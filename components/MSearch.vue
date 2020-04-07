<template>

    <div class="m-search">

        <div class="m-search__wrapper">

            <input
                id="search-text"
                ref="input"
                v-model="searchText.value"
                type="text"
                name="search-text"
                placeholder="Search something"
                class="a-input a-search__input"
                @keyup.enter="search"
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
            @click="search(true)"
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
                value: this.$route.query.q,
                isValid: () => this.searchText.value ? this.searchText.value.trim() : ''
            }

        }
    },

    methods: {

        search (isLuckySearch) {
            const validText = this.searchText.isValid()

            if (validText) {
                this.updateLoadingMessage()

                if (isLuckySearch) {
                    // Go to the /search route passing the search text
                    this.$router.push(`/search?q=${validText}`)
                } else {
                    // Go to the /search route passing the search text and
                    // the l=true query param to indicate it is a 'I am lucky' search
                    this.$router.push(`/search?q=${validText}&l=true`)
                }
            }
        },

        focus () {
            this.$refs.input.focus()
        },

        updateLoadingMessage () {
            this.$store.dispatch('updateLoadingMessage')
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
