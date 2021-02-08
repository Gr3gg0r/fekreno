import Vue from "vue";
import Vuex from "vuex";

import repository from "../repositories/RepositoryFactory";
//* Register repository globally.
Vue.prototype.$repository = repository;
//* Register respository at Vuex.
Vuex.Store.prototype.$repository = repository;
