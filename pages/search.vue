<template>

    <!-- Search results -->
    <main class="p-search">

        <section
            v-if="jokes[0]"
            class="o-section o-search__content"
        >

            <div class="o-wrapper o-wrapper--padding-section o-wrapper--boxed o-search-content__wrapper">

                <article
                    v-for="joke in currentJokes"
                    :key="joke.id"
                    class="m-quote"
                >
                    <p class="a-text a-quote__text">
                        {{ joke.value }}
                    </p>
                </article>

            </div>

        </section>

        <section
            v-else
            class="o-section"
        >

            <div class="o-wrapper o-wrapper--padding-section o-wrapper--boxed">

                <div class="m-message-box">
                    <p class="a-text a-text--large">
                        {{ `Oops! There is no jokes with the search term: "${searchText}"` }}
                    </p>
                </div>

            </div>

        </section>

        <footer
            v-if="jokes[0]"
            class="o-section o-search__footer"
        >

            <div class="o-wrapper o-wrapper-centered-content o-wrapper--boxed o-search-footer__wrapper">

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

            </div>

        </footer>

    </main>

</template>

<script>

export default {

    name: 'PSearch',

    layout: 'searchresult',

    async asyncData ({ $http, query, redirect, error }) {
        const searchText = query.q

        if (!searchText) {
            console.log('no query')
            return
        }

        const url = `api/jokes/search?query=${searchText}`

        try {
            const response = await $http.get(url)

            if (response.ok) {
                const jokesData = await response.json()

                // jokesData object is in like bellow
                // {
                //     total: Integer,
                //     result: Array of jokes
                // }

                return {
                    jokes: jokesData.result,
                    totalJokes: jokesData.total,
                    searchText
                }
            } else {
                // Show the 'no jokes' message
                console.log('There is no jokes!')
            }
        } catch (e) {
            // Show the network error message
            console.log('API error', e)
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

            message: ''
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
/* o-search-content__wrapper component */
.o-search-content__wrapper {
    padding-bottom: var(--space-grid);
}
@media screen and (min-width: 600px) {
    .o-search-content__wrapper {
        display: block;
        column-count: 2;
        column-gap: calc(var(--space-grid) * 2);
    }
}
@media screen and (min-width: 900px) {
    .o-search-content__wrapper {
        column-count: 3;
    }
}
@media screen and (min-width: 1200px) {
    .o-search-content__wrapper {
        column-count: 4;
    }
}

/* o-search-footer__wrapper component */
.o-search-footer__wrapper {
    padding: 0 var(--padding-section) var(--padding-section);
}

.m-message-box {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    text-align: center;
    padding: var(--padding-section);
    border-radius: 0.3125rem;
}

.a-quote__text::before {
    content: url("~assets/image-quotation-mark.svg");
    display: block;
    margin-bottom: calc(var(--space-grid) / 2);
    word-break: break-word;
}

.a-search-footer__button {
    width: 100%;
}
</style>
