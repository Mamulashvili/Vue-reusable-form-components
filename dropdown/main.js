const BaseSelect = {
    inheritAttrs: false,
    template: '#base-select',
    props: {
        options: {
            type: Object,
            required: true
        },
        inputLabel: String,
        id: String,
    },
    data() {
        return {
            selectedOption: ''
        }
    },
    watch: {
        value: function (newValue) {
            this.selectedOption = newValue
        }
    }
}

const Dropdown = {
    template: '#base-dropdown',
    props: {
        options: {
            type: Array,
            required: true,
            default: [],
        },
        value: String,
        labelText: String,
        selectorId: String,
        disabledOptionText: String,
        value: String,
    },
    emits: ['updateValue'],
    data() {
        return {
            selectedVal: '',
        }
    },
    methods: {
        showChange(e) {
            this.selectedVal = e.target.value;
            this.$emit('updateValue', this.selectedVal);
        }
    },
}

const app = Vue.createApp({
    components: {
        BaseSelect,
        Dropdown,
    },
    data() {
        return {
            genderOptions: ['Female', 'Male', 'Other'],
            selectedGender: null,
            carOptions: ['BMW', 'Mercedes', 'Porsche', 'Other'],
            selectedCar: null,
        }
    },
    methods: {
        updateSelectedCarValue(event) {
            this.selectedCar = event;
        }
    }

}).mount('#dropdown');