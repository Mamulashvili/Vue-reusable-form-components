const BaseInput = {
    template: '#base-input',
    props: {
        name: {
            type: String,
            required: true,
            default: '',
        },
        type: {
            type: String,
            required: false,
            default: 'Text',
        },
        maxLength: {
            type: Number,
            required: false,
            default: 100,
        },
        msg: {
            required: true,
        },
        inputLabel: {
            type: String,
            default: '',
            required: false,
        },
        id: {
            type: String,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
        },
    },
    emits: ['update:msg'],
    methods: {
        updateValue(event) {
            this.$emit('update:msg', event.target.value);
        }
    }
}

const app = Vue.createApp({
    components: {
        BaseInput,
    },
    data() {
        return {
            message: '',
        }
    }

}).mount('#app');