<template>
  <div>
    <q-list>
      <q-item class="q-py-lg">
        <q-img src="~assets/krenovator.png" width="240px" height="40px" />
      </q-item>
      <!-- //* Create the drawer navigation from menus. -->
      <EssentialLink
        v-for="link in menus"
        :key="link.meta.title"
        :title="link.meta.title"
        :caption="link.meta.subtitle"
        :link="link.path"
        :icon="link.meta.icon"
        :color="link.meta.color"
      />
    </q-list>
  </div>
</template>

<script>
//* Import essentiallink from component for displaying navigation
//* for sidebar.
import EssentialLink from "../components/EssentialLink";
//* Called all getter from store/getters.
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  //* Spread all the menu registered for specific user role and pass it into essential link component.
  computed: {
    ...mapGetters(["menus"])
  },

  components: {
    EssentialLink
  }
};
</script>
