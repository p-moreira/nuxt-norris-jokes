<template>

    <article class="m-quote">

        <div class="m-quote__wrapper">

            <!-- Quote body -->
            <section class="m-quote__body">

                <p class="a-text a-quote__text">
                    {{ joke.value }}
                </p>

            </section>

            <!-- Quote footer -->
            <footer class="m-quote__footer">

                <!-- Categories -->
                <section
                    v-if="joke.categories[0]"
                    class="m-quote-footer__categories"
                >

                    <button
                        v-for="category in joke.categories"
                        :key="category"
                        class="a-button a-button--chip a-quote-footer__chip"
                    >
                        {{ category }}
                    </button>

                </section>

                <!-- Section Info -->
                <section class="m-quote-footer__info">

                    <!-- Info button -->
                    <img
                        src="@/assets/icon-info.svg"
                        alt="Icon info"
                        @click="showInfo = !showInfo"
                    >

                    <!-- Info data -->
                    <section
                        v-show="showInfo"
                        class="m-quote-footer-info__data"
                    >

                        <p class="a-text a-text--caption">
                            {{ `Created: ${createdAt}` }}
                        </p>

                        <p class="a-text a-text--caption">
                            {{ `Updated: ${updatedAt}` }}
                        </p>

                        <a
                            :href="joke.url"
                            rel="norefer nofollow"
                            target="_blank"
                            class="a-text a-text--caption"
                        >
                            Link
                        </a>

                    </section>

                </section>

            </footer>

        </div>

    </article>

</template>

<script>
import { formatDate } from '@/common/utils.js'

export default {

    name: 'MQuote',

    props: {

        // The joke Object:
        // {
        //      "categories": [category1, category2],
        //      "created_at": "2020-01-05 13:42:18.823766",
        //      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        //      "id": "WrRWYZGRQrik9_aPy8iyMw",
        //      "updated_at": "2020-01-05 13:42:18.823766",
        //      "url": "https://api.chucknorris.io/jokes/WrRWYZGRQrik9_aPy8iyMw",
        //      "value": "Chuck Norris ate a 72lb steak in 60 minutes"
        // }
        joke: {
            type: Object,
            required: true,
            default: () => { }
        }
    },

    data () {
        return {
            showInfo: false
        }
    },

    computed: {

        createdAt () {
            return this.joke.created_at ? formatDate(this.joke.created_at) : ''
        },

        updatedAt () {
            return this.joke.updated_at ? formatDate(this.joke.updated_at) : ''
        }
    }

}
</script>

<style scoped>
/* m-quote component */
.m-quote {
    padding: calc(var(--space-grid) * 2);
    border: 2px solid var(--color-primary);
    border-radius: 0.625rem;
    display: inline-block;
    margin: 0 0 calc(var(--space-grid) * 2);
    width: 100%;
}

/* m-quote__wrapper component */
.m-quote__wrapper {
    display: grid;
    row-gap: calc(var(--space-grid) * 2);
}

/* m-quote__footer component */
.m-quote__footer {
    display: grid;
}

/* m-quote-footer__categories component */
.m-quote-footer__categories {
    padding: calc(var(--space-grid) * 2) 0;
    border-top: 1px solid
        rgba(
            var(--settings-color-on-surface),
            calc(var(--color-contrast-low) / 2)
        );
}

/* m-quote-footer__info component */
.m-quote-footer__info {
    display: grid;
    row-gap: calc(var(--space-grid) * 2);
    border-top: 1px solid
        rgba(
            var(--settings-color-on-surface),
            calc(var(--color-contrast-low) / 2)
        );
    padding: calc(var(--space-grid) * 2) 0 0;
}

/* m-quote-footer-info__data component */
.m-quote-footer-info__data {
    display: grid;
    row-gap: calc(var(--space-grid) / 2);
}

/* a-quote__text component */
.a-quote__text::before {
    content: url("~assets/image-quotation-mark.svg");
    display: block;
    margin-bottom: calc(var(--space-grid) / 2);
}

/* a-quote-footer__chip component */
.a-quote-footer__chip {
    width: fit-content;
}
</style>