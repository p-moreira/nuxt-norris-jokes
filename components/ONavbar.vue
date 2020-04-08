<template>

    <!-- navbar -->
    <header class="o-navbar">

        <o-wrapper
            centered-content
            row-gap-normal
            class="o-navbar__wrapper"
        >

            <section class="o-navbar__header">

                <n-link to="/">

                    <img
                        v-show="$route.path != '/'"
                        src="@/assets/icon-arrow-back.svg"
                        alt="Back to the home"
                    >

                </n-link>

                <n-link to="/">

                    <figure>
                        <img
                            class="a-navbar__image"
                            srcset="@/assets/image-chuck-norris-navbar-xs.png,
                                    @/assets/image-chuck-norris-navbar-xs-2x.png, 2x"
                            src="@/assets/image-chuck-norris-navbar-xs-2x.png"
                            alt="Chuck Norris"
                        >
                    </figure>

                </n-link>

            </section>

            <a-title
                tag="h1"
                level4
                center
                class="a-navbar__title"
            >
                The truth about Chuck Norris
            </a-title>

            <m-search class="m-navbar__search" />

        </o-wrapper>

    </header>

</template>

<script>
import OWrapper from '@/components/OWrapper'
import MSearch from '@/components/MSearch'
import ATitle from '@/components/ATitle'

export default {

    components: {
        OWrapper,
        MSearch,
        ATitle
    }

}
</script>

<style scoped>
/* o-navbar component */
.o-navbar {
    border-bottom: 1px solid var(--color-on-surface-low);
}

/* o-navbar__wrapper component */
.o-navbar__wrapper {
    padding: calc(var(--space-grid) * 3);
}

.o-navbar__header {
    width: 100%;
    display: grid;
    grid-template-columns: 24px auto 24px;
    justify-items: center;
    align-items: start;
}

/* m-navbar__search component */
.m-navbar__search {
    max-width: 34.5rem;
}

/* a-navbar__title component */
/* .a-navbar__title {
    font-size: calc(var(--title-level-1) / 1.6);
    text-align: center;
} */

/* a-navbar__image component */
.a-navbar__image {
    width: 4rem;
    cursor: pointer;
}
</style>
