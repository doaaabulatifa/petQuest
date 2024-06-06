# 🐾 https://pet-quest.vercel.app 🐾

## petQuest

---

petQuest is a full-stack web application that allows the user to create a profile, create posts, and comment on other user’s posts.

The project is built using Next.js with the /app router and Tailwind CSS, and uses Clerk for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the pg package.

---

## Features

- Create a profile
- View a list of profiles
- View and edit your profile
- View other user's profiles
- View a list of pet posts
- View a single pet post
- Search by breed/location on homepage
- Create a new pet post
- Edit your pet posts
- Comment on pet posts
- Submit an enquiry form
- Mobile responsive
- Navigate with keyboard

---

## Setup Instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine.
2. In your forked repository, copy the SSH key and clone the repo into your terminal (git clone SSHKey)
3. cd projectname, code .
4. Run npm i, and npm i db in the terminal
5. Create a .env.local file in the root directory, and copy and paste the template from the ".env.example" file
6. Go to supabase.com, and in your account go to connect, then connection string, url, and copy and paste this URL and paste it in your ".env.local" file in DATABASE_URL:
7. Swap [password] for your Supabase database password (to reset this, go to settings, then database, then reset database password)
8. In Supabase, open the query editor and paste the contents of seed.sql
9. Set up clerk project and follow the steps to connect it to your project. Follow the instructions here: https://clerk.com/docs/quickstarts/nextjs
10. Install react-toastify by running 'npm install --save react-toastify' in the terminal. Read more here: https://www.npmjs.com/package/react-toastify
11. Run npm run dev to start the development server
12. Open http://localhost:3000 with your browser to see the site
13. On http://Vercel.com , click new project, then link your github repo, and paste the environmental keys before pressing deploy

## Potential future features

---

- Enquiry form is sent to user
- Responsive on all screen sizes
- Upload image for pet post
- Searchbar on pets page
- Loading icon for data loading on page
- Like and save posts
