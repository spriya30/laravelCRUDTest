require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('card-component', require('./components/CardComponent.vue').default);
Vue.component('my-button', require('./components/MyButtonComponent.vue').default);

const app = new Vue({
    el: '#app',
});
