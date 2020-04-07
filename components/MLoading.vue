<template>

    <div
        v-if="loading"
        class="m-loading"
    >

        <div class="m-loading__wrapper">

            <h1 class="a-title a-title--level-1 a-loading__title">
                {{ loadingMessage }}
            </h1>

            <p class="a-text a-loading__text">
                waiting for the answers...
            </p>

        </div>

    </div>

</template>

<script>
export default {

    data () {
        return {
            loading: false
        }
    },

    computed: {
        loadingMessage () {
            return this.$store.state.currentLoadingMessage
        }
    },

    methods: {

        start () {
            this.loading = true
        },

        finish () {
            this.loading = false
        }

    }

}
</script>

<style scoped>
/* m-loading component */
.m-loading {
    display: grid;
    row-gap: var(--space);
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(var(--settings-color-on-surface), 0.9);
    text-align: center;
    color: var(--color-on-primary);
    padding: var(--padding-section);
}

/* m-loading__wrapper component */
.m-loading__wrapper {
    display: grid;
    row-gap: var(--space);
    padding: var(--padding-section);
    border: 2px solid var(--color-on-primary);
}

/* a-loading__text component */
.a-loading__text {
    color: var(--color-on-primary-medium);
}
</style>
