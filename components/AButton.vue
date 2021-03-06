<template>

    <component
        :is="tag"
        :href="href"
        :to="to"
        :target="getTarget"
        :rel="getRel"
        :disabled="disabled"
        :class="{
            'a-button': 1,
            'a-button--disabled': disabled,
            'a-button--outlined': outlined,
            'a-button--text': text,
            'a-button--chip': chip,
            'a-button--large': large
        }"
        @click="handleClick"
    >
        <slot />
    </component>

</template>

<script>
export default {

    props: {

        href: {
            type: String,
            default: ''
        },

        to: {
            type: String,
            default: ''
        },

        target: {
            type: String,
            default: ''
        },

        rel: {
            type: String,
            default: ''
        },

        disabled: Boolean,

        outlined: Boolean,

        text: Boolean,

        chip: Boolean,

        large: Boolean

    },

    computed: {
        getTarget () {
            return this.target || (this.href ? '_blank' : null)
        },

        getRel () {
            return this.rel || (this.getTarget === '_blank' ? 'noopener' : null)
        },

        tag () {
            if (this.href) { return 'a' }
            if (this.to) { return 'n-link' }
            return 'button'
        }
    },

    methods: {
        handleClick (event) {
            this.$emit('click', event)
        }
    }

}
</script>

<style scoped>
/* a-button component */
.a-button {
    padding-top: var(--space-grid, 0.5rem);
    padding-bottom: var(--space-grid, 0.5rem);
    padding-left: calc(var(--space-grid, 0.5rem) * 2);
    padding-right: calc(var(--space-grid, 0.5rem) * 2);
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    text-transform: uppercase;
    font-size: var(--button, 0.875rem);
    font-weight: 500;
    text-align: center;
    border: 0;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: all 0.3s;
}

.a-button:hover {
    background-color: var(--color-secondary);
}

/* a-button--disabled */
.a-button--disabled {
    background-color: var(--color-on-surface-low);
    color: var(--color-on-surface-low);
    border: 0;
    cursor: unset;
}

.a-button--disabled:hover {
    background-color: var(--color-on-surface-low);
    color: var(--color-on-surface-low);
    border: 0;
}

/* a-button--large */
.a-button--large {
    padding-top: calc(var(--space-grid, 0.5rem) * 1.5);
    padding-bottom: calc(var(--space-grid, 0.5rem) * 1.5);
    padding-left: calc(var(--space-grid, 0.5rem) * 3);
    padding-right: calc(var(--space-grid, 0.5rem) * 3);
    font-size: calc(var(--button, 0.875rem) * 1.2);
}

/* a-button--chip */
.a-button--chip {
    font-size: 0.8125rem;
    padding: 4px var(--space-grid);
    border: 1px solid var(--color-on-surface-low);
    border-radius: 1rem;
    background-color: transparent;
    color: var(--color-on-surface-medium);
}

.a-button--chip:hover {
    border: 1px solid var(--color-secondary);
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
}

/* a-button--text */
.a-button--text {
    background-color: transparent;
    color: var(--color-primary);
}

.a-button--text:hover {
    background-color: rgba(241, 90, 36, 0.15);
    color: var(--color-secondary);
}

/* a-button--outlined */
.a-button--outlined {
    border: 1px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);
}

.a-button--outlined:hover {
    border: 1px solid var(--color-secondary);
    background-color: transparent;
    color: var(--color-secondary);
}
</style>
