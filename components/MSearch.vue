<template>

    <div class="m-search">

        <div class="m-search__wrapper">

            <a-input
                id="search-input"
                v-model="searchText.value"
                type="text"
                name="search-input"
                placeholder="Search something"
                class="a-search__input"
                @keyup.enter="search"
            />

            <a-button
                class="a-search__button"
                @click="search"
            >
                <img
                    src="@/assets/icon-search.svg"
                    alt="Search icon"
                >
            </a-button>

        </div>

        <a-button
            v-show="showIAmLucky"
            text
            class="a-lucky__button"
            @click="luckySearch"
        >
            I'm feeling lucky
        </a-button>

    </div>

</template>

<script>
import AInput from '@/components/AInput'
import AButton from '@/components/AButton'

export default {

    name: 'MSearch',

    components: {
        AInput,
        AButton
    },

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

        search () {
            const validText = this.searchText.isValid()

            if (validText) {
                this.updateLoadingMessage()

                // Go to the /search route passing the search text
                this.$router.push(`/search?q=${validText}`)
            }
        },

        luckySearch () {
            const validText = this.searchText.isValid()

            if (validText) {
                this.updateLoadingMessage()

                // Go to the /search route passing the search text and
                // the l=true query param to indicate it is a 'I am lucky' search
                this.$router.push(`/search?q=${validText}&l=true`)
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

/* a-search__input component */
.a-search__input {
    border-radius: 0.3125rem 0 0 0.3125rem;
    border-right: none;
    height: 3.5rem;
}

.a-search__input:focus {
    border-right: none;
}

/* a-search__button component */
.a-search__button {
    height: 3.5rem;
    width: 3.5rem;
    border: 1px solid var(--color-primary);
    border-radius: 0 0.3125rem 0.3125rem 0;
}

.a-search__button:hover {
    border-color: var(--color-secondary);
}

/* a-lucky__button component */
.a-lucky__button {
    width: fit-content;
    justify-self: center;
}
</style>
