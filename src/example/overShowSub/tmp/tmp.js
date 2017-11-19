import './.stable/index.scss';
import Vue from 'vue';
import tmp from './tmp.vue';
new Vue({
    el: '.tmp-wrap',
    render: h=>h(tmp),
});
