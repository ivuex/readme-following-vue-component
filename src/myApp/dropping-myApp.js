import './.stable/index.scss';
import Vue from 'vue';
import myApp from './myApp.vue';
new Vue({
    el: '#my-app-wrap',
    render: h=>h(myApp),
}); 
