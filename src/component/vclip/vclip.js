import './.stable/index.scss';
import Vue from 'vue';
import vclip from './vclip.vue';
new Vue({
    el: '.vclip',
    render: h=>h(vclip),
}); 
