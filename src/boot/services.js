import Vue from "vue";
import Vuex from "vuex";

import services from "../services/serviceFactory";
//* Register services globally .
Vue.prototype.$services = services;
//* Register service into Vuex .
Vuex.Store.prototype.$services = services;
