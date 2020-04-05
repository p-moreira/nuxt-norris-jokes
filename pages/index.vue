<template>

    <main class="p-home">

        <section class="o-section o-header-section">

            <div class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-wrapper--padding-section o-wrapper--columns o-header-section__wrapper">

                <!-- Header section -->
                <header class="o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-header-section__header">

                    <figure class="m-header-section__image">
                        <img
                            src="@/assets/image-chuck-norris-rounded-pb-1-lo.png"
                            alt="Chuck Norris"
                        >
                    </figure>

                    <h1 class="a-title a-title--level-1 a-header__title">
                        The truth about<br>
                        Chuck Norris
                    </h1>

                </header>

                <!-- Content section -->
                <section class="o-content o-wrapper o-wrapper--centered-content o-wrapper--row-gap--large o-header-section__content">

                    <div class="m-search">

                        <input
                            id="search-text"
                            type="text"
                            name="search-text"
                            placeholder="Search something"
                            class="a-input a-search__input"
                        >

                        <button class="a-button a-search__button">
                            <img
                                src="@/assets/icon-search.svg"
                                alt="Search icon"
                            >
                        </button>

                    </div>

                    <p class="a-text">
                        I'm luckly
                    </p>

                </section>

            </div>

        </section>

        <!-- Footer section -->
        <footer class="o-footer o-wrapper o-wrapper--centered-content">

            <p class="a-text">
                powered by the chucknorris.io
            </p>

        </footer>

    </main>

</template>

<script>

export default {

    name: 'PHome'

}

</script>

<style>
/* o-section component */
.o-section {
    width: 100%;
    display: grid;
    justify-items: center;
}
@media screen and (min-width: 1200px) {
    .o-section {
        background-image: url("~assets/image-chuck-norris-large-lo.png");
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        height: 100vh;
        align-content: center;
    }
}

/* o-wrapper component */
.o-wrapper {
    width: 100%;
    display: grid;
}
.o-wrapper--centered-content {
    justify-items: center;
}
.o-wrapper--padding-section {
    padding: var(--padding-section);
}
.o-wrapper--row-gap--normal {
    row-gap: vcalc(var(--space-grid) * 2);
}
.o-wrapper--row-gap--small {
    row-gap: calc(var(--space-grid) * 1);
}
.o-wrapper--row-gap--large {
    row-gap: calc(var(--space-grid) * 4);
}
.o-wrapper--boxed {
    max-width: var(--boxed-width);
}
@media screen and (min-width: 600px) {
    .o-wrapper--columns {
        grid-template-columns: repeat(8, 1fr);
        column-gap: 1rem;
    }
}
@media screen and (min-width: 1200px) {
    .o-wrapper--columns {
        grid-template-columns: repeat(12, 1fr);
        column-gap: 1.5rem;
    }
}

/* o-header-section__header component */
@media screen and (min-width: 600px) {
    .o-header-section__header {
        grid-column: 1/9;
    }
}
@media screen and (min-width: 1200px) {
    .o-header-section__header {
        grid-column: 1/13;
    }
}

/* o-header-section__content component */
@media screen and (min-width: 600px) {
    .o-header-section__content {
        grid-column: 1/9;
    }
}
@media screen and (min-width: 900px) {
    .o-header-section__content {
        grid-column: 2/8;
    }
}
@media screen and (min-width: 1200px) {
    .o-header-section__content {
        grid-column: 4/10;
    }
}

/* o-footer component */
.o-footer {
    background-color: var(--color-primary);
    padding: var(--space);
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
    position: fixed;
    bottom: 0;
    color: var(--color-on-primary-medium);
}

/* ********** */
/* Molecules */
/* ********** */

/* m-header-section__image component */
@media screen and (min-width: 1200px) {
    .m-header-section__image {
        display: none;
    }
}

/* m-search component */
.m-search {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
}

/* ********** */
/* Atoms components */
/* ********** */

/* a-title component */
.a-title {
    font-family: var(--font-family-title);
    font-weight: var(--font-weight-title);
    line-height: var(--line-height-title);
}
.a-title--level-1 {
    font-size: var(--title-level-1);
}

/* a-header__title component */
.a-header__title {
    text-align: center;
}

/* a-input component */
.a-input {
    font-size: var(--font-size, 1rem);
    color: var(--color-on-surface-medium);
    border: 1px solid var(--color-on-surface-medium);
    border-radius: 0.3125rem;
    padding: 1rem;
    background-color: transparent;
    transition: all 0.3s;
    height: 3.5rem;
}
.a-input::placeholder {
    color: var(--color-on-surface-medium);
}
.a-input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
}
.a-input:focus {
    border: 1px solid var(--color-secondary);
}
.a-input--error {
    border: 1px solid var(--color-error);
}
@keyframes autofill {
    to {
        color: var(--color-on-surface-medium);
        background: transparent;
    }
}

/* a-search__input component */
.a-search__input {
    border-radius: 0.3125rem 0 0 0.3125rem;
    border-right: none;
}
.a-search__input:focus {
    border-right: none;
}

/* a-button component */
.a-button {
    padding-top: var(--space-grid, 0.5rem);
    padding-bottom: var(--space-grid, 0.5rem);
    padding-left: calc(var(--space-grid, 0.5rem) * 2);
    padding-right: calc(var(--space-grid, 0.5rem) * 2);
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    text-transform: uppercase;
    font-size: var(--button, 0.875rem); /* 14px */
    font-weight: 500;
    text-align: center;
    border: 0;
    border-radius: 0.3125rem; /* 5px */
    cursor: pointer;
    transition: all 0.3s;
}
.a-button:hover {
    background-color: var(--color-secondary);
}
.a-button--large {
    padding-top: calc(var(--space-grid, 0.5rem) * 1.5);
    padding-bottom: calc(var(--space-grid, 0.5rem) * 1.5);
    padding-left: calc(var(--space-grid, 0.5rem) * 3);
    padding-right: calc(var(--space-grid, 0.5rem) * 3);
    font-size: calc(var(--button, 0.875rem) * 1.2);
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
</style>
