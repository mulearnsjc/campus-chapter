/* eslint-disable @typescript-eslint/no-unused-vars */
// In your gatsby-config.js file

export const plugins = [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          // Define custom headers for your single page
          "/*": [
            // Example custom header
            "X-Frame-Options: DENY",
            // Add more custom headers if needed
          ],
        },
        allPageHeaders: [], // No need to add headers for all pages as there's only one page
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ];