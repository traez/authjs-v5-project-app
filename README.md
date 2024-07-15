# Auth.js (NextAuth) v5 Next.js Authentication

This is a 4-part combined solution to the [Master NextAuth v5: Next.js Authentication Made Easy Project](https://www.youtube.com/watch?v=4BjowsolXmw), [Next.js Authentication With Next-Auth V5 Project](https://www.youtube.com/watch?v=O8Ae6MC5bf4), [Next.js Authentication With Next-Auth V5 Credential Provider Project](https://www.youtube.com/watch?v=4m7u7zGbdTI) and [Next.js Authentication || Register User To MongoDB With Next-Auth V5 Project](https://www.youtube.com/watch?v=5kmZAqc2Jeg). I'm practicing and developing my coding competency by building projects after projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Learn the latest version of next-auth v5!

### Screenshot

![](public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/nextauth-v5-nextjs-authentication](https://github.com/traez/nextauth-v5-nextjs-authentication)
- Live Site URL: [https://nextauth-v5-nextjs-authentication-trae-zeeofors-projects.vercel.app/](https://nextauth-v5-nextjs-authentication-trae-zeeofors-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS
- Typescript**
- Nodejs (with/without Expressjs)
- MongoDB**  
- GraphQL**    
- Redux Toolkit**  
- Auth.js (NextAuth)   

### What I learned
   
- **Random Base64-Encoded String Generation:**  
`node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`: This command generates a random base64-encoded string using Node.js's built-in capabilities.  
`npx auth secret`: This command also generates a random base64-encoded string but leverages an external tool (auth).  
Although both commands serve the same purpose, the first approach is more direct and uses Node.js's built-in functionality.
- **auth.ts:**  
This file configures the authentication mechanism, focusing on setting up and configuring the authentication logic using NextAuth. It defines how authentication should work, including the providers, callbacks, and other configuration details. 
- **route.ts (Route Handler):**  
This file sets up the API routes that handle authentication requests using the configured logic. It is responsible for exposing the authentication logic as API routes, using the handlers defined in auth.ts to create actual API endpoints that can be called from the client-side or other parts of the application. 
- **middleware.ts:**  
This file re-exports the auth middleware from auth.ts, enabling it to be used globally across the application to manage session lifetimes. It updates the session expiry time on every request to keep the user logged in for a longer duration. It wraps protected routes with authentication to ensure only authenticated users can access them.  
- **Google Cloud Console and Resource Management:**  
Google Cloud Console is your web-based control panel for managing resources in Google Cloud Platform (GCP). It lets you:  
1) Launch and manage cloud services like compute, storage, databases, and machine learning tools.  
2) Monitor and optimize your cloud resources for performance and cost.  
3) Secure your cloud environment with access controls and permissions management.  
Think of it as the mission control for your projects running on Google's cloud infrastructure.  
- **Google Cloud Configuration for Authentication:**    
**The Google Cloud Console** configuration is needed for setting up the **Google Provider** in your application, similar to how Developer Settings are configured in GitHub for the **GitHub Provider**.  
In the context of **The Clerk vs. Auth.js Approach to Authentication**:
The Clerk approach simplifies the process by handling most of the heavy lifting, allowing you to easily integrate authentication ("plug and play").  
The Auth.js approach requires more groundwork and configuration on your part. While Clerk is "drag and drop" (as Clerk server handles code for authentication), Auth.js (NextAuth) requires extra work and configuration in your Provider settings. This provides more control and potentially higher security.  
For setting up the Google Provider, I defined the `Client ID` and `Client Secret` in the `.env` file.
- **Configuring Next.js Image Component for Security and Optimization:**  
The `next/image component` in Next.js requires explicit configuration for hostnames, such as `avatars.githubusercontent.com`, in your `next.config.js` file for security and optimization purposes.  
For my GitHub project, I used the newer `remotePatterns` property and set the pathname to `'**'` (double asterisk), which matches any path within the trusted hostname. This configuration can also omit the port and pathname for simplicity and security.  
- **FormData in RegistrationForm.jsx:**   
The line `const formData = new FormData(event.currentTarget);` creates a `formData` object from the form element that triggered the submit event. This captures the current state of the form's input values. The `formData` object contains key-value pairs representing the form fields and their values, ready for further processing, such as sending via the `fetch` API. 
- **Using MongoDB Compass:**  
MongoDB Compass allows you to easily create and manage databases and collections without writing any code. This feature is particularly useful for quick setups, prototyping, or when you want to manage your database visually. 
- **Import Cost Extension in Visual Studio Code:**    
The Import Cost extension helps you monitor bundle size by displaying the estimated size of imported packages right next to the import statements in your code. This allows you to quickly identify potentially large dependencies that might be bloating your application.   

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
