const BaseCheckbox = {
    inheritAttrs: false,
    template: '#base-checkbox',
    props: {
        checkboxes: {
            type: Array,
            required: true,
        },
        inputName: String,
    },
    data() {
        return {
            checkVal: [],
        }
    },
    computed: {
        removeWhiteSpaces() {
            return item => item.replaceAll(' ', '');
        }
    }
}

const app = Vue.createApp({
    components: {
        BaseCheckbox,
    },
    data() {
        return {
            packages: [{
                id: 1,
                name: 'Basic',
            },
            {
                id: 2,
                name: 'Premium'
            },
            {
                id: 3,
                name: 'Premium Pro'
            },
            {
                id: 4,
                name: 'Enterprise'
            }],
            selectedPackages: [],
        }
    },
}).mount('#app');