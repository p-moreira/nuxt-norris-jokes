<template>

    <main class="p-home">

        <o-section class="o-header-section">

            <div class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-wrapper--padding-section o-wrapper--columns o-header-section__wrapper">

                <!-- Header section -->
                <header class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-header-section__header">

                    <figure>
                        <img
                            class="m-header-section__image"
                            srcset="@/assets/image-chuck-norris-xs.png,
                                    @/assets/image-chuck-norris-xs-2x.png, 2x"
                            src="@/assets/image-chuck-norris-xs-2x.png"
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

                    <m-search show-i-am-lucky />

                </section>

            </div>

        </o-section>

    </main>

</template>

<script>
import OSection from '@/components/OSection'
import MSearch from '@/components/MSearch'

export default {

    name: 'PHome',

    components: {
        OSection,
        MSearch
    }

}

</script>
