import { getToken } from "./../datasources/localstorage.storage";

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file'
//* This is the default quasar boot structue. It enable the user to have access to  the app, router ,store and Vue
export default async ({ app, router, store, Vue }) => {
  //? The function was declared but never used.
  function hasPermission(roles, permissionRoles) {
    if (!permissionRoles) return true;

    return roles.some(role => permissionRoles.indexOf(role) >= 0);
  }

  // URLs which gonna be public access
  //* This is the url that does not needed authentication to access.
  const whiteListURL = ["/login", "/register"];

  //* Navigation guard
  //* will be executed each time we change route.
  router.beforeEach(async (to, from, next) => {
    //* Get user token based on Backend token that was register together when user login.
    //* Check is based on token that was stored at localstorage.
    //* Check user authentication status.
    if (getToken(process.env.MAIN_BE_TOKEN)) {
      //* If user already login , block their access to /login page.
      if (to.path === "/login") {
        next({ path: "/" });
      } else {
        //* If no roles specifiy for this route, just allow it to pass.
        //* Can be see in privacy route where there's no array declare in it array.
        if (store.getters.roles.length === 0) {
          try {
            //* Vuex called action from user module. Located at store/module/user.js
            //* This will populate the user state.
            await store.dispatch("GetInfo");
            let links = [];

            //* get only data route from "/" only .
            //* Filter unauthenctication route such as '/login'
            const routes = router.options.routes.filter(
              element => element.path === "/"
            );
            //* Null checker for routes
            if (routes.length === 1) {
              //* push to link array only if the condition met.
              routes[0].children.forEach(route => {
                //* Filter route with no sidebar in meta.
                if (route.meta.sidebar) {
                  //* Store into link if user roles is master
                  if (store.getters.roles.includes("master")) {
                    links.push(route);
                  } else {
                    //* check if there's role for specific route.
                    if (route.meta.roles.length) {
                      //* Check the route is the same as user role state.
                      if (
                        route.meta.roles.some(element =>
                          store.getters.roles.includes(element)
                        )
                      ) {
                        //* Add to link if route is the same as user role.
                        links.push(route);
                      }
                    } else {
                      //* push the route if no role specify.
                      links.push(route);
                    }
                  }
                }
              });
            }
            //* Set drawer navigation link.
            //? Journal, material . The route and the icon was set here.
            store.dispatch("SetMenu", links);
            //* spread all to route and set their replace as true. So they can be replace.
            next({ ...to, replace: true });
            //! Execute only when there's error.
          } catch (err) {
            console.log(err);
            //! Log out session an replace route to /login
            store.dispatch("Logout").then(() => {
              console.log("logout");
              next({ path: "/login" });
            });
          }
        } else {
          next();
        }
      }
    } else {
      //* Check wheather the path is for public or authentication.
      //* If yes proceed . If not redirect the user to login page.
      if (whiteListURL.indexOf(to.path) !== -1) {
        next();
      } else {
        next("/login");
      }
    }
  });
};
