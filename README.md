![Nuxt Norris Jokes](https://gitlab.com/pmoreira/nuxt-norris-jokes/-/raw/af59b6f275478ed3e7c5e5ffb19ef6cbfea9b1b8/assets/image-chuck-norris-xs.png "Logo")

# Nuxt Norris Jokes

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
- /disabled.gitlab-ci.yml (change to .gitlab-ci.yml to trigger the automatic deploy)
- /nginx (if you want to deploy using nginx proxy server)

Have some question? Contact me at https://t.me/pmoreira
