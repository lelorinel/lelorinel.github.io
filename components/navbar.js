Vue.component('navbar', {
    data() {
        return{
            active: 'guide'
        }
        
    },
    methods: {
        
    },
    computed: {
    },
    template: `
    <div class="center examplex">
        <vs-navbar center-collapsed v-model="active">
        <template #left>
            <img src="/logo2.png" alt="">
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
            Guide
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
            Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
            license
        </vs-navbar-item>
        <template #right>
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
        </template>
        </vs-navbar>
        <div class="square">
        <div class="child">
            child 1
        </div>
        <div class="child">
            child 2
        </div>
        <div class="child">
            child 3
        </div>
        </div>
    </div>
    `
});
