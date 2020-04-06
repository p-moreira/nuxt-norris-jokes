<template>

    <!-- navbar -->
    <header class="o-navbar">

        <div class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--normal o-navbar__wrapper">

            <figure>
                <img
                    srcset="@/assets/image-chuck-norris-navbar-xs.png,
                            @/assets/image-chuck-norris-navbar-xs-2x.png, 2x"
                    src="@/assets/image-chuck-norris-navbar-xs-2x.png"
                    alt="Chuck Norris"
                >
            </figure>

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
</style>
