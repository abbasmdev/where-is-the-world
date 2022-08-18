# Alibaba Countries code challenge

## Challenge Description

Your task is to build a project using the provided design files, integrate with the REST Countries V2 API to pull country data, and display it as demonstrated in the provided designs. You will find both a mobile and desktop version in light and dark mode color schemes for each page. Note that the final implementation doesn't have to be pixel perfect and anything close to the photos will suffice.

## Designs

### Mobile

- <a href="https://alibaba-rest-countries.vercel.app/design/mobile-design-home-light.jpg">Home Page</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/mobile-design-home-dark.jpg">Home Page [Dark]</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/mobile-design-detail-light.jpg">Detail Page</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/mobile-design-detail-dark.jpg">Detail Page [Dark]</a>

### Desktop

- <a href="https://alibaba-rest-countries.vercel.app/design/desktop-design-home-light.jpg">Home Page</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/desktop-design-home-dark.jpg">Home Page [Dark]</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/desktop-design-detail-light.jpg">Detail Page</a>
- <a href="https://alibaba-rest-countries.vercel.app/design/desktop-design-detail-dark.jpg">Detail Page [Dark]</a>

# Tasks

## TODO

- [ ] Initialize project with Next.js and typescript
- [ ] Update README.md with suitable description
- [ ] Add Tailwind CSS for theming and styling system
- [ ] See all countries from the API on the homepage
- [ ] Search for a country using an input field
- [ ] Filter countries by region
- [ ] Click on a country to see more detailed information on a separate page (client-side routing)
- [ ] Clicking on border countries on the detail page should link the user to the detail of those countries.
- [ ] <b>Bonus:</b> Toggle the color scheme between light and dark mode without using any 3rd party libraries
- [ ] <b>Bonus:</b> Searching using the keywords Grmany or Grmny should also work
- [ ] <b>Bonus:</b> Add sort functionality for both Population and Country Name
- [ ] <b>Bonus:</b> Make all content server-side rendered and also have a fallback if the server-side render faces an error
- [ ] <b>Bonus:</b> Collect analytical data (in whichever way you prefer) using Google Analytics
- [ ] <b>Bonus:</b> Make sure styles are loaded whenever they're really needed. e.g., The styles for the details page don't load on the homepage
- [ ] <b>Bonus:</b> Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable
- [ ] <b>Bonus:</b> Dockerize your application by creating an efficient Dockerfile
- [ ] <b>Bonus:</b> Add unit tests for components
- [ ] <b>Bonus:</b> Store the filters in the URL query strings and sync it with the component filter object
- [ ] <b>Bonus:</b> Add lazy loading for country images and list

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
