# NextGram

This is a sample Next.js application that takes advantage of the advanced routing capabilities.

The photo route can be attached to _two distinct_ components:

1. When navigating within the application, it is rendered as a modal
1. When the page is refreshed, it is rendered as a standalone page

## Demo

https://nextgram.vercel.app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextgram)

## Run locally

```sh
docker build -t markuslewin/nextgram-on-azure .
docker run -p 3000:3000 markuslewin/nextgram-on-azure
```

## Upload to container registry

```sh
docker build -t markuslewin/nextgram-on-azure .
docker push markuslewin/nextgram-on-azure
```
