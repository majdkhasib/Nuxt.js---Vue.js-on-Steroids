import Vue from "vue";
import BaseCard from "~/components/UI/BaseCard";
import TheHeader from "~/components/Navigation/TheHeader";
const components = {
  BaseCard,
  TheHeader,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
