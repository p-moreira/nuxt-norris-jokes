<template>

    <!-- Footer section -->
    <footer
        id=""
        :class="{
            'o-footer': 1,
            'o-footer--fixed--bottom': fixedBottom,
        }"
    >

        <o-section>

            <o-wrapper
                centered-content
                row-gap-small
            >

                <p class="a-text a-footer__text">
                    by <a
                        href="https://www.linkedin.com/in/pmoreiralk/"
                        target="_blank"
                        rel="noopener nofollow"
                    >pmoreira</a>
                </p>

                <p class="a-text a-footer__text">
                    powered by the <a
                        href="https://api.chucknorris.io"
                        target="_blank"
                        rel="noopener nofollow"
                    >chucknorris.io</a>
                </p>

            </o-wrapper>

        </o-section>

    </footer>

</template>

<script>
import OSection from '@/components/OSection'
import OWrapper from '@/components/OWrapper'

export default {

    name: 'OFooter',

    components: {
        OSection,
        OWrapper
    },

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
    width: 100%;
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
