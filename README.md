# Vue reusable form components
Vue reusable components: Input, dropdown, checkboxes

- input: create base-input reusable components with props: 
    - type : String, **required**
    - name : String
    - msg - v-model variable, **required**
    - input-label : String, text for input label
    - id : String
    - placeholder : String
    - maxLength: Number
  
 template linked with id `#base-input` (index.html)
 
 emits: `update:msg` - update parent element variable
 
 methods: `updateValue` - call emit

 ### Usage

```js
 <base-input
   type="text"
   name="fn"
   v-model:msg="message"
   input-label="First Name"
   id="fname"
   placeholder="First Name"
 > </base-input>
```

<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
