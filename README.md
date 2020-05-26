![Chuck Norris](https://raw.githubusercontent.com/p-moreira/nuxt-norris-jokes/master/assets/image-chuck-norris-xs.png)

# Nuxt Norris Jokes

> I migrated this project from my Gitlab private repository, so there is some gitlab CI/CD related files!
> All push to this repository will trigger the gitlab CI/CD from the gitlab repository and deploy to https://norrisjokes.firenzze.com

Nuxtjs web app to search for Chuck Norris jokes from the chucknorris.io API.

See it in action: https://norrisjokes.firenzze.com

Nuxtjs is a vuejs framework to develop SSR, SPA and static web apps. To learn about nuxtjs, access https://nuxtjs.org/

## How to run locally

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

## How to run locally using Docker

```bash
# build the docker image
$ docker build --tag=nuxt-norris-jokes .

# run the container
$ docker run -d -p 3000:5000 nuxt-norris-jokes

# access the app at http://localhost:3000
# or http://<your-docker-machine-ip>:3000
# to get the docker machine IP
$ docker-machine ip
```

## How to build for production

```bash
$ yarn build
$ yarn start
```

## Gitlab CI/CD deploy

If you will host the code on Gitlab, the project includes all we need to setup the Gitlab CI/CD to build and deploy the app using staging and production servers.

- /Dockerfile
- /docker-compose.yml
- /.dockerignore
- /.gitlab-ci.yml (change to disabled.gitlab-ci.yml to turn-off the automatic deploy on gitlab)
- /nginx (if you want to deploy using nginx proxy server)

## How to setup the app social sharing and SEO metadata

Open the `/commom/config.js` file and change the object values

```
siteUrl: 'https://norrisjokes.firenzze.com',
siteName: 'Nuxt Norris Jokes',
siteTitle: 'Nuxt Norris Jokes | Natal, RN, Brasil',
siteDescription: 'Search for Chuck Norris jokes from the chucknorris.io API',
siteSocialImage: '/social-share-image.png',
twitterUser: '@pmoreirabr'
```

## How to change or to add the funny loading messages

When waiting for the search results, the app shows a message in a dramatic black screen.

You can change the messages or you can add as many messages you want.

Open the `/common/loading-messages.js` file and change the messages.

----------

Have some question? Contact me at https://t.me/pmoreira
