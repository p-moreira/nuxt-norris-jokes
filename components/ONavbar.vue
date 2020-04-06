<template>

    <!-- navbar -->
    <header class="o-navbar">

        <div class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--normal o-navbar__wrapper">

            <figure>
                <img
                    class="a-navbar__image"
                    srcset="@/assets/image-chuck-norris-navbar-xs.png,
                            @/assets/image-chuck-norris-navbar-xs-2x.png, 2x"
                    src="@/assets/image-chuck-norris-navbar-xs-2x.png"
                    alt="Chuck Norris"
                >
            </figure>

            <h1 class="a-title a-title--level-1 a-navbar__title">
                The truth about Chuck Norris
            </h1>

            <m-search class="m-navbar__search" />

        </div>

    </header>

</template>

<script>
import MSearch from '@/components/MSearch'

export default {

    components: {
        MSearch
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

/* m-navbar__search component */
.m-navbar__search {
    max-width: 34.5rem;
}

/* a-navbar__title component */
.a-navbar__title {
    font-size: calc(var(--title-level-1) / 1.6);
    text-align: center;
}

/* a-navbar__image component */
.a-navbar__image {
    width: 4rem;
}
</style>
