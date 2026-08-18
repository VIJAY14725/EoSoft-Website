# EoSoft Solutions Website

A modern corporate website for **EoSoft Solutions Pvt Ltd**, built with
React and Vite. The site presents the company's IT consulting, IT
services, and AI-enabled consulting offerings through a responsive
multi-page interface.

## Overview

The website includes:

-   Home page with company introduction, services, statistics, and calls
    to action
-   About page with company information and key statistics
-   Services page for consulting and technology offerings
-   Contact page with enquiry form and office information
-   Responsive navigation and footer
-   Animated/reveal UI elements
-   SEO metadata for individual pages
-   Local image assets served from the `public` directory
-   PocketBase integration for contact enquiries

## Technology Stack

-   React
-   Vite
-   React Router
-   Tailwind CSS
-   Lucide React
-   React Helmet
-   PocketBase
-   JavaScript / JSX


## Local Development

From the project root:

``` bash
npm install
npm run dev
```

The development server normally runs on:

``` text
http://localhost:5173
```

### Share the Development Site on a Local Network

To allow another computer on the same network to access the website:

``` bash
npm run dev -- --host 0.0.0.0
```

Vite will display a network URL. Share that URL with the other user.

## Environment Configuration

If PocketBase is used locally, configure the frontend environment with
the PocketBase URL.

Example:

``` env
VITE_POCKETBASE_URL=http://127.0.0.1:8090
```

Do not commit private credentials or secrets to the repository.

## Local Images

Images placed inside:

``` text
apps/web/public/images/
```

are referenced from the application using root-relative paths.

For example:

``` jsx
<img src="/images/MJR.png" alt="EoSoft Solutions" />
```

Do not use:

``` jsx
import MJR from "@/public/images/MJR.png";
```

for files stored under `public`.

## Routing

The website uses React Router for page navigation.

Current primary routes include:

``` text
/
 /services
 /about
 /contact
```

## Contact Form

The Contact page submits enquiries to a PocketBase collection named:

``` text
inquiries
```

The frontend uses the PocketBase client configured in:

``` text
src/lib/pocketbaseClient.js
```

The PocketBase server must be available and configured correctly for
enquiry submission to work.

## Production Build

Create a production build with:

``` bash
npm run build
```

Preview the production build locally with:

``` bash
npm run preview
```

## Deployment

The frontend can be deployed to a static hosting provider that supports
Vite-generated applications.

Before deployment:

1.  Configure production environment variables.
2.  Verify all local image paths.
3.  Verify the PocketBase API URL.
4.  Test all application routes.
5.  Test the contact form.
6.  Run a production build successfully.

## License

This project is proprietary to EoSoft Solutions Pvt Ltd unless otherwise
specified.
