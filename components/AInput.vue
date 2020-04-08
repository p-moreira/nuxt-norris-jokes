<template>

    <input
        ref="input"
        :value="value"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :class="{
            'a-input': 1,
            'a-input--error': err
        }"
        @input="$emit('input', $event.target.value)"
        @keyup="$emit('keyup', $event)"
    >

</template>

<script>
export default {

    name: 'AInput',

    props: {
        value: {
            type: String,
            default: ''
        },
        err: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'input'
        }
    },

    methods: {
        focus () {
            this.$refs.input.focus()
        }
    }

}
</script>

<style scoped>
/* a-input component */
.a-input {
    font-size: var(--font-size, 1rem);
    color: var(--color-on-surface-medium);
    border: 1px solid var(--color-on-surface-medium);
    border-radius: 0.3125rem;
    padding: 1rem;
    background-color: transparent;
    transition: all 0.3s;
}

.a-input::placeholder {
    color: var(--color-on-surface-medium);
}

.a-input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
}

.a-input:focus {
    border: 1px solid var(--color-secondary);
}

.a-input--error {
    border: 1px solid var(--color-error);
}

@keyframes autofill {
    to {
        color: var(--color-on-surface-medium);
        background: transparent;
    }
}
</style>
