import './.stable/index.scss';
import Vue from 'vue';
import iconWrap from './iconWrap.vue';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
new Vue({
    el: '#icon-wrap',
    render: h=>h(iconWrap),
}); 
