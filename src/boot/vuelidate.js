// import something here

import Vuelidate from "vuelidate";

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
//? Vuelidate is register globally but never used.
export default async ({ Vue }) => {
  Vue.use(Vuelidate);
};
