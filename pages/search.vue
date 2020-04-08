<template>

    <!-- Search results -->
    <main class="p-search">

        <o-section
            v-if="!errorMessage"
            class="o-search__content"
            :style="getStyle"
        >

            <o-wrapper
                boxed
                class="o-search-content__wrapper"
            >

                <o-section class="o-search-content__header">

                    <o-wrapper class="o-search-content-header__wrapper">

                        <button
                            v-show="currentView.type === 'grid'"
                            class="a-button a-button--outlined a-button-change-view"
                            @click="showList"
                        >
                            Show like List
                        </button>

                        <button
                            v-show="currentView.type === 'list'"
                            class="a-button a-button--outlined a-button-change-view"
                            @click="showGrid"
                        >
                            Show like Grid
                        </button>

                    </o-wrapper>

                </o-section>

                <o-wrapper class="o-search-content__body">

                    <m-quote
                        v-for="joke in currentJokes"
                        :key="joke.id"
                        :joke="joke"
                    />

                </o-wrapper>

                <button
                    v-show="!$route.query.l"
                    :class="{
                        'a-button': 1,
                        'a-button--large': 1,
                        'a-button--disabled': isLastPage,
                        'a-search-footer__button': 1
                    }"
                    @click="nextPage"
                >
                    {{ isLastPage ? 'No more jokes' : 'Load more' }}
                </button>

            </o-wrapper>

        </o-section>

        <o-section
            v-else
            class="o-section-error"
        >

            <o-wrapper
                padding-section
                boxed
                class="o-section-error__wrapper"
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
import MQuote from '@/components/MQuote'

export default {

    name: 'PSearch',

    layout: 'searchresult',

    components: {
        OSection,
        OWrapper,
        MQuote
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

            errorMessage: '',

            // Set the results list view to grid or list
            currentView: {
                type: 'list',
                '--content-body-max-width': '31.25rem'
            }

        }
    },

    computed: {

        currentJokes () {
            return this.jokes.slice(0, this.currentPage * 10)
        },

        isLastPage () {
            return this.currentPage >= this.totalJokes / 10
        },

        getStyle () {
            return this.currentView
        }

    },

    methods: {

        nextPage () {
            return this.currentPage++
        },

        showList () {
            this.currentView = {
                type: 'list',
                '--content-body-max-width': '31.25rem',
                '--content-body-display-sm': 'grid',
                '--content-body-column-count-sm': 'none',
                '--content-body-column-gap-sm': 'none',
                '--content-body-column-count-md': 'none',
                '--content-body-column-count-lg': 'none'
            }
        },

        showGrid () {
            this.currentView = {
                type: 'grid',
                '--content-body-max-width': 'none',
                '--content-body-display-sm': 'block',
                '--content-body-column-count-sm': '2',
                '--content-body-column-gap-sm': 'calc(var(--space-grid) * 2)',
                '--content-body-column-count-md': '3',
                '--content-body-column-count-lg': '4'
            }
        }

    },

    watchQuery: ['q']

}
</script>

<style scoped>
.o-search-content__wrapper {
    justify-items: center;
    padding: 0 var(--padding-section) var(--padding-section);
}

.o-search-content-header__wrapper {
    /*  */
    padding: var(--space);
    justify-items: center;
}

/* o-search-content__body component */
.o-search-content__body {
    max-width: var(--content-body-max-width);
}

@media screen and (min-width: 600px) {
    .o-search-content__body {
        display: var(--content-body-display-sm);
        /* grid or block */
        column-count: var(--content-body-column-count-sm);
        /** none or 2 */
        column-gap: var(--content-body-column-gap-sm);
        /** none or calc(var(--space-grid) * 2) */
    }
}
@media screen and (min-width: 900px) {
    .o-search-content__body {
        column-count: var(--content-body-column-count-md);
        /* none or 3 */
    }
}
@media screen and (min-width: 1200px) {
    .o-search-content__body {
        column-count: var(--content-body-column-count-lg);
        /* none or 4 */
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

/* a-search-footer__button component */
.a-search-footer__button {
    width: 100%;
}
</style>
