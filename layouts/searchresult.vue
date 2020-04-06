<template>

    <div>

        <o-navbar />

        <nuxt />

        <o-footer />

    </div>

</template>

<script>
import ONavbar from '@/components/ONavbar'
import OFooter from '@/components/OFooter'

export default {

    components: {
        ONavbar,
        OFooter
    }

}
</script>
