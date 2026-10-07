# Custom HTTP Server Using Node.js

This small project serves Home, About, and Contact pages using Node.js's built-in HTTP module.

To run it on your computer, use:

```bash
npm start
```

Then visit [http://localhost:3000](http://localhost:3000).

You can also visit `/about` or `/contact`. Any other path shows a 404 page.

To publish on GitHub Pages, use the static HTML files. Pages doesn't run `server.js`. In **Settings → Pages**, choose the branch and `/` or `/docs` folder containing the files. If the project is elsewhere, use a Pages Actions workflow.
