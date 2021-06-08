Vue.config.devtools = false;
Vue.prototype.window = window;

Vue.use(Vuetify)
Vue.use(Vuesax)


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
            selection: 0,           
            navOptions: ['Homepage'],
        };
    },
    computed: {
        getTabComponent: function() {
            return `tab-${this.navOptions[this.selection].toLowerCase()}`;
        }
    },
    methods: {
    },
    components:{
    },
    mounted() {
       
    }
});