# BetterFaster Media Static Site Deployment Guide

This guide explains how to build and deploy the static version of the BetterFaster Media website.

## Building the Static Site

1. Ensure you have Node.js installed on your system.
2. Run the following command to build the static site:

```bash
npm run build-static
```

3. After successful build, the static site files will be available in the `static-build` directory.

## Deployment Options

### Option 1: Deploy to GitHub Pages

1. Create a new GitHub repository if you don't have one already.
2. Push the content of the `static-build` directory to the `gh-pages` branch of your repository.

```bash
cd static-build
git init
git add .
git commit -m "Initial static site deployment"
git remote add origin your-github-repo-url
git push -u origin master
```

3. In your GitHub repository settings, enable GitHub Pages and set the source to the `master` branch.

### Option 2: Deploy to Netlify

1. Create an account on [Netlify](https://www.netlify.com/) if you don't have one already.
2. Drag and drop the `static-build` directory onto the Netlify dashboard, or connect your GitHub repository.
3. Configure your domain settings as needed.

### Option 3: Deploy to Any Web Hosting Service

1. Upload the contents of the `static-build` directory to your web hosting service via FTP or their provided file upload interface.
2. Ensure the `index.html` file is at the root of your public directory.

## Notes About the Static Site

- The static site uses client-side JavaScript to handle the contact form submissions.
- Form submissions will open the user's email client with a pre-populated email.
- All links and navigation features function without the need for a backend server.
- The site is optimized for Facebook-blue styling as requested.

## Troubleshooting

If you encounter any issues:

1. Ensure all assets are properly referenced with relative paths.
2. Check browser console for any JavaScript errors.
3. Verify that your hosting service supports single-page applications if you're using client-side routing.

## Custom Domain Setup

To use a custom domain:

1. Update your DNS settings to point to your hosting provider.
2. Configure SSL/TLS certificates for secure HTTPS connections.
3. Ensure your hosting provider has HTTPS enabled for your domain.

For any questions or support, please contact: nisjetl@gmail.com