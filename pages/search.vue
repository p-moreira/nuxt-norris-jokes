<template>

    <!-- Search results -->
    <main class="p-search">

        <o-section
            v-if="!errorMessage"
            class="o-search__content"
        >

            <o-wrapper
                padding-section
                boxed
                row-gap-small
                class=""
            >

                <o-wrapper class="o-search-content__body">

                    <article
                        v-for="joke in currentJokes"
                        :key="joke.id"
                        class="m-quote"
                    >
                        <p class="a-text a-quote__text">
                            {{ joke.value }}
                        </p>
                    </article>

                </o-wrapper>

                <button
                    :class="{
                        'a-button': 1,
                        'a-button--disabled': isLastPage,
                        'a-search-footer__button': 1
                    }"
                    @click="nextPage"
                >
                    {{ isLastPage ? 'No more jokes' : 'Load more' }}
                </button>

            </o-wrapper>

        </o-section>

        <o-section v-else>

            <o-wrapper
                padding-section
                boxed
                class=""
            >

                <div class="m-error-box">
                    <p class="a-text a-text--large">
                        {{ errorMessage }}
                    </p>
                </div>

            </o-wrapper>

        </o-section>

    </main>

</template>

<script>
import OSection from '@/components/OSection'
import OWrapper from '@/components/OWrapper'

export default {

    name: 'PSearch',

    layout: 'searchresult',

    components: {
        OSection,
        OWrapper
    },

    async asyncData ({ $http, query, redirect, error }) {
        const searchText = query.q

        // If there is no search query param, or
        // the search query param is invalid, redirect to the home
        if (!searchText) {
            console.error('Invalid search query param')
            redirect('/')
        }

        const url = `api/jokes/search?query=${searchText}`

        try {
            const response = await $http.get(url)

            if (response.ok) {
                const jokesData = await response.json()

                // jokesData object is like bellow
                // {
                //     total: Integer,
                //     result: Array of jokes
                // }

                // If it is an 'I am lucky' search, return the first result
                if (query.l && jokesData.total) {
                    return {
                        jokes: [jokesData.result[0]],
                        totalJokes: 1,
                        searchText
                    }
                }

                return {
                    jokes: jokesData.result,
                    totalJokes: jokesData.total,
                    searchText,
                    errorMessage: jokesData.total ? '' : `There is no jokes with the search term: "${searchText}"`
                }
            } else {
                // Show the error message
                console.error('There is an error', response.error)
                return {
                    errorMessage: 'We can\'t show the search result now, please try again later!'
                }
            }
        } catch (e) {
            // Show the network error message
            console.error('There is an error', e)
            return {
                errorMessage: 'We can\'t show the search result now, please check your network connection and try again later!'
            }
        }
    },

    data () {
        return {

            jokes: [
                // {
                //      "categories": [category1, category2],
                //      "created_at": "2020-01-05 13:42:18.823766",
                //      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                //      "id": "WrRWYZGRQrik9_aPy8iyMw",
                //      "updated_at": "2020-01-05 13:42:18.823766",
                //      "url": "https://api.chucknorris.io/jokes/WrRWYZGRQrik9_aPy8iyMw",
                //      "value": "Chuck Norris ate a 72lb steak in 60 minutes"
                // }
            ],

            totalJokes: 0,

            currentPage: 1,

            errorMessage: ''
        }
    },

    computed: {

        currentJokes () {
            return this.jokes.slice(0, this.currentPage * 10)
        },

        isLastPage () {
            return this.currentPage >= this.totalJokes / 10
        }

    },

    methods: {

        nextPage () {
            return this.currentPage++
        }

    },

    watchQuery: ['q']

}
</script>

<style scoped>
@media screen and (min-width: 600px) {
    .o-search-content__body {
        display: block;
        column-count: 2;
        column-gap: calc(var(--space-grid) * 2);
    }
}
@media screen and (min-width: 900px) {
    .o-search-content__body {
        column-count: 3;
    }
}
@media screen and (min-width: 1200px) {
    .o-search-content__body {
        column-count: 4;
    }
}

/* o-search-footer__wrapper component */
.o-search-footer__wrapper {
    padding: 0 var(--padding-section) var(--padding-section);
}

/* m-error-box component */
.m-error-box {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    text-align: center;
    padding: var(--padding-section);
    border-radius: 0.3125rem;
}

/* a-quote__text component */
.a-quote__text::before {
    content: url("~assets/image-quotation-mark.svg");
    display: block;
    margin-bottom: calc(var(--space-grid) / 2);
}

/* a-search-footer__button component */
.a-search-footer__button {
    width: 100%;
}
</style>
