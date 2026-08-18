EoSoft Solutions Website

A modern corporate website for EoSoft Solutions Pvt Ltd, built with
React and Vite. The site presents the company's IT consulting, IT
services, and AI-enabled consulting offerings through a responsive
multi-page interface.

Overview

The website includes:

Home page with company introduction, services, statistics, and calls
to action

About page with company information and key statistics

Services page for consulting and technology offerings

Contact page with enquiry form and office information

Responsive navigation and footer

Animated/reveal UI elements

SEO metadata for individual pages

Local image assets served from the public directory

PocketBase integration for contact enquiries

Local Development

From the project root:

npm install
npm run dev

The development server normally runs on:

http://localhost:5173

Share the Development Site on a Local Network


Vite will display a network URL. Share that URL with the other user.

Local Images

Images placed inside:

apps/web/public/images/

are referenced from the application using root-relative paths.


Routing

The website uses React Router for page navigation.

Current primary routes include:

/
 /services
 /about
 /contact

Contact Form

The Contact page submits enquiries to a PocketBase collection named:

inquiries

The frontend uses the PocketBase client configured in:

src/lib/pocketbaseClient.js

The PocketBase server must be available and configured correctly for
enquiry submission to work.

Production Build

Create a production build with:

npm run build

Preview the production build locally with:

npm run preview

Deployment

The frontend can be deployed to a static hosting provider that supports
Vite-generated applications.

Before deployment:

Configure production environment variables.

Verify all local image paths.

Verify the PocketBase API URL.

Test all application routes.

Test the contact form.

Run a production build successfully.

Development Notes

Keep reusable layout elements and shared UI components under:

src/components/

Keep page-specific content under:

src/pages/

Keep static website data under:

src/data/

Keep browser/client integrations under:

src/lib/

Use the @ alias for imports from src where the Vite configuration
supports it:

import SiteLayout from "@/components/SiteLayout";
import Reveal from "@/components/Reveal";

License
VIJAY PEDDAPAKA

This project is proprietary to EoSoft Solutions Pvt Ltd unless otherwise
specified.