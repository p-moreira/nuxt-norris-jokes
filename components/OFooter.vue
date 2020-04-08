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

            <o-wrapper centered-content>

                <a-text
                    caption
                    color="var(--color-on-primary-medium)"
                >
                    by <a
                        href="https://www.linkedin.com/in/pmoreiralk/"
                        target="_blank"
                        rel="noopener nofollow"
                    >pmoreira</a>
                </a-text>

                <a-text
                    caption
                    color="var(--color-on-primary-medium)"
                >
                    powered by the <a
                        href="https://api.chucknorris.io"
                        target="_blank"
                        rel="noopener nofollow"
                    >chucknorris.io</a>
                </a-text>

            </o-wrapper>

        </o-section>

    </footer>

</template>

<script>
import OSection from '@/components/OSection'
import OWrapper from '@/components/OWrapper'
import AText from '@/components/AText'

export default {

    name: 'OFooter',

    components: {
        OSection,
        OWrapper,
        AText
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
    padding: calc(var(--space) / 2);
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
}

.o-footer--fixed--bottom {
    position: fixed;
    bottom: 0;
}
</style>
