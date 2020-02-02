# gatsby-aamu-starter

Gatsby [Aamu.app](https://aamu.app) starter for creating a blog

![The index page of the starter blog](https://raw.githubusercontent.com/AamuApp/gatsby-aamu-starter/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Aamu.app comes into play.

With Aamu.app and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Features

* Simple content model and structure. Easy to adjust to your needs.
* Aamu.app integration using our [Sync API](https://aamu.app/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type)
* Using our [Delivery API](https://aamu.app/developers/docs/references/content-delivery-api/).
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

## Contribution

This project is part of [AamuApp](https://github.com/AamuApp) which means that we’re always open to contributions **and you can be part of userland and shape the project yourself after your first merged pull request**. You can learn more about how AamuApp is organized by visiting [our about repository](https://github.com/AamuApp/about).

## Requirements

To use this project you have to have a Aamu.app account. If you don't have one yet you can register at [aamu.app/sign-up](https://aamu.app/sign-up/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:AamuApp/gatsby-aamu-starter.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new aamu-starter https://github.com/AamuApp/gatsby-aamu-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Aamu.app setup command `yarn run setup`.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.

## Roadmap

- [x] [make the starter completely responsive](https://github.com/AamuApp/gatsby-aamu-starter/issues/2)
- [ ] [include tags](https://github.com/AamuApp/gatsby-aamu-starter/issues/3)
- [x] [support traced placeholders](https://github.com/AamuApp/gatsby-aamu-starter/issues/4)
- [ ] [add i18n](https://github.com/AamuApp/gatsby-aamu-starter/issues/6)

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
