<template>

    <div class="m-search">

        <input
            id="search-text"
            v-model="searchText.value"
            type="text"
            name="search-text"
            placeholder="Search something"
            class="a-input a-search__input"
        >

        <button
            class="a-button a-search__button"
            @click="search"
        >
            <img
                src="@/assets/icon-search.svg"
                alt="Search icon"
            >
        </button>

    </div>

</template>

<script>
export default {

    name: 'MSearch',

    data () {
        return {

            // The user search text
            searchText: {
                value: '',
                isValid: () => this.searchText.value ? this.searchText.value.trim() : ''
            }

        }
    },

    methods: {

        search () {
            if (this.searchText.isValid()) {
                // Go to the /search route passing the search text
                this.$router.push(`/search?q=${this.searchText.isValid()}`)
            }
        }

    }

}
</script>

<style scoped>
/* m-search component */
.m-search {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
}
</style>
