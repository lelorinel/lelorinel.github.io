Vue.config.devtools = false;
Vue.prototype.window = window;

Vue.use(Vuesax)


const app = new Vue({
    el: '.app',
    data() {
        return {
            selection: 0,           
            navOptions: ['Homepage'],
            data:{
                test: "Hello!",
            }
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