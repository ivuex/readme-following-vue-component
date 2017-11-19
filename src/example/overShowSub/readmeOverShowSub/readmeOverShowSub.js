import './.stable/index.scss';
import Vue from 'vue';
import readmeOverShowSub from './readmeOverShowSub.vue';
new Vue({
    el: '.readme-over-show-sub-wrap',
    render: h=>h(readmeOverShowSub),
});
