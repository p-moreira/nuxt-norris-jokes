<template>

    <div class="m-search">

        <div class="m-search__wrapper">

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

        <button
            v-show="showIAmLucky"
            class="a-button a-button--text a-lucky__button"
            @click="iAmLuckySearch"
        >
            I'm feeling lucky
        </button>

    </div>

</template>

<script>
export default {

    name: 'MSearch',

    props: {
        showIAmLucky: Boolean
    },

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
        },

        iAmLuckySearch () {
            if (this.searchText.isValid()) {
                // Go to the /search route passing the search text and
                // the l=true query param to indicate it is a 'I am Lucky' search
                this.$router.push(`/search?q=${this.searchText.isValid()}&l=true`)
            }
        }

    }

}
</script>

<style scoped>
/* m-search component */
.m-search {
    display: grid;
    width: 100%;
    row-gap: calc(var(--space-grid) * 4);
}

/* m-search__wrapper component */
.m-search__wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
}

/* a-lucky__button component */
.a-lucky__button {
    width: fit-content;
    justify-self: center;
}
</style>
