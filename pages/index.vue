<template>

    <main class="p-home">

        <section class="o-section o-header-section">

            <div class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-wrapper--padding-section o-wrapper--columns o-header-section__wrapper">

                <!-- Header section -->
                <header class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-header-section__header">

                    <figure class="m-header-section__image">
                        <img
                            src="@/assets/image-chuck-norris-rounded-pb-1-lo.png"
                            alt="Chuck Norris"
                        >
                    </figure>

                    <h1 class="a-title a-title--level-1 a-header__title">
                        The truth about<br>
                        Chuck Norris
                    </h1>

                </header>

                <!-- Content section -->
                <section class="o-content o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-header-section__content">

                    <m-search />

                    <p class="a-text">
                        I'm luckly
                    </p>

                </section>

            </div>

        </section>

        <o-footer fixed-bottom />

    </main>

</template>

<script>
import MSearch from '@/components/MSearch'
import OFooter from '@/components/OFooter'

export default {

    name: 'PHome',

    components: {
        MSearch,
        OFooter
    }

}

</script>
