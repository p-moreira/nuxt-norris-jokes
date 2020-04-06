<template>

    <!-- Footer section -->
    <footer
        id="footer"
        :class="{
            'o-footer': 1,
            'o-footer--fixed--bottom': fixedBottom,
            'o-wrapper': 1,
            'o-wrapper--centered-content': 1
        }"
    >

        <p class="a-text a-footer__text">
            powered by the chucknorris.io
        </p>

    </footer>

</template>

<script>
export default {

    name: 'OFooter',

    props: {
        fixedBottom: {
            type: Boolean
        }
    }

}
</script>

<style scoped>
/* o-footer component */
.o-footer {
    background-color: var(--color-primary);
    padding: calc(var(--space) / 1.5);
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
}

.o-footer--fixed--bottom {
    position: fixed;
    bottom: 0;
}
</style>
