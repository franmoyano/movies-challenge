# Movies App

## General
Welcome to my project "Movies App". This application is based on a main dashboard that loads a paginated list of movies, including their image, title, and rating. Additionally, there is a section for filters (by categories and sorting).

When selecting a movie from the dashboard, you access its detail page. Here, more specific information is displayed: release year, summary, rating, and generated revenue. You can also see the list of associated genres: if you click on one of them, you are taken to the main dashboard with that filter preloaded. Additionally, there is a list of similar movies at the bottom of the detail page.

## Technical details
The application is primarily server-side rendered (SSR), utilizing minimal client-side components. **searchParams** are used for searches, along with **server actions** to process all the data.

Stack
* NextJS (v14)
* MaterialUI
* TMDb API
* Typescript
* Axios

## Deploy
https://movies-challenge-coral.vercel.app/

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Enshure you have an .env file. In this project i've let a .env.example wich is useful to start developing