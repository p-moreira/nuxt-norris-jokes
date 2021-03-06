<template>

    <article class="m-quote">

        <div class="m-quote__wrapper">

            <!-- Quote body -->
            <section class="m-quote__body">

                <a-text
                    color="var(--color-on-primary-medium)"
                    class="a-quote__text"
                >
                    {{ joke.value }}
                </a-text>

            </section>

            <!-- Quote footer -->
            <footer class="m-quote__footer">

                <!-- Categories -->
                <section
                    v-if="joke.categories[0]"
                    class="m-quote-footer__categories"
                >

                    <!-- Category button -->
                    <a-button
                        v-for="category in joke.categories"
                        :key="category"
                        chip
                        class="a-quote-footer__chip"
                    >
                        {{ category }}
                    </a-button>

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

                        <a-text
                            caption
                            color="var(--color-on-primary-low)"
                        >
                            {{ `Created: ${createdAt}` }}
                        </a-text>

                        <a-text
                            caption
                            color="var(--color-on-primary-low)"
                        >
                            {{ `Updated: ${updatedAt}` }}
                        </a-text>

                        <a-text
                            caption
                            color="var(--color-on-primary-low)"
                        >

                            <a
                                :href="joke.url"
                                rel="norefer nofollow"
                                target="_blank"
                            >
                                Link
                            </a>

                        </a-text>

                    </section>

                </section>

            </footer>

        </div>

    </article>

</template>

<script>
import AText from '@/components/AText'
import AButton from '@/components/AButton'
import { formatDate } from '@/common/utils.js'

export default {

    name: 'MQuote',

    components: {
        AText,
        AButton
    },

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
    border-radius: 0.625rem;
    display: inline-block;
    margin: 0 0 calc(var(--space-grid) * 2);
    width: 100%;
    background-color: var(--color-primary);
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
            var(--settings-color-on-primary),
            calc(var(--color-contrast-low) / 2)
        );
}

/* m-quote-footer__info component */
.m-quote-footer__info {
    display: grid;
    row-gap: calc(var(--space-grid) * 2);
    border-top: 1px solid
        rgba(
            var(--settings-color-on-primary),
            calc(var(--color-contrast-low) / 2)
        );
    padding: calc(var(--space-grid) * 2) 0 0;
}

/* m-quote-footer-info__data component */
.m-quote-footer-info__data {
    display: grid;
    row-gap: calc(var(--space-grid) / 2);
    color: var(--color-on-primary-low);
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
    border: 1px solid var(--color-on-primary-low);
    color: var(--color-on-primary-medium);
}

.a-quote-footer__chip:hover {
    border: 1px solid var(--color-secondary);
    color: var(--color-on-secondary);
}
</style>
