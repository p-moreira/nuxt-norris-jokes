<template>

    <main class="p-home">

        <o-section class="o-header">

            <o-wrapper
                centered-content
                row-gap-large
                padding-section
                columns
                class="o-header__wrapper"
            >

                <!-- header -->
                <header class="o-header__header">

                    <o-wrapper
                        centered-content
                        row-gap-large
                    >

                        <figure>
                            <img
                                class="a-header-section__image"
                                srcset="@/assets/image-chuck-norris-xs.png,
                                        @/assets/image-chuck-norris-xs-2x.png, 2x"
                                src="@/assets/image-chuck-norris-xs-2x.png"
                                alt="Chuck Norris"
                            >
                        </figure>

                        <a-title
                            tag="h1"
                            level1
                            center
                            class="a-header__title"
                        >
                            The truth about<br>
                            Chuck Norris
                        </a-title>

                    </o-wrapper>

                </header>

                <!-- body -->
                <o-section class="o-header__body">

                    <o-wrapper
                        centered-content
                        row-gap-large
                        class="o-header-body__wrapper"
                    >

                        <m-search
                            ref="mSearch"
                            show-i-am-lucky
                        />

                    </o-wrapper>

                </o-section>

            </o-wrapper>

        </o-section>

    </main>

</template>

<script>
import OSection from '@/components/OSection'
import OWrapper from '@/components/OWrapper'
import MSearch from '@/components/MSearch'
import ATitle from '@/components/ATitle'

export default {

    name: 'PHome',

    components: {
        OSection,
        OWrapper,
        MSearch,
        ATitle
    },

    mounted () {
        setTimeout(() => { this.$refs.mSearch.$refs.input.focus() }, 500)
    }

}

</script>

<style scoped>
/* o-header component */
@media screen and (min-width: 1200px) {
    .o-header {
        background-image: url("~assets/image-chuck-norris-lg.png");
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        height: 100vh;
        align-content: center;
    }
}

@media screen and (min-width: 1200px) and (min-resolution: 192dpi) {
    .o-header {
        background-image: url("~assets/image-chuck-norris-lg-2x.png");
    }
}

/* o-header__header component */
@media screen and (min-width: 600px) {
    .o-header__header {
        grid-column: 1/9;
    }
}

@media screen and (min-width: 1200px) {
    .o-header__header {
        grid-column: 1/13;
    }
}

/* o-header__body component */
@media screen and (min-width: 600px) {
    .o-header__body {
        grid-column: 1/9;
    }
}

@media screen and (min-width: 900px) {
    .o-header__body {
        grid-column: 2/8;
    }
}

@media screen and (min-width: 1200px) {
    .o-header__body {
        grid-column: 4/10;
    }
}

/* a-header-section__image component */
.a-header-section__image {
    width: 10.625rem;
}

@media screen and (min-width: 1200px) {
    .a-header-section__image {
        display: none;
    }
}
</style>
