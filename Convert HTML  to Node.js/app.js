const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const buildDirectory = path.join(__dirname, 'dist');

app.use(express.static(buildDirectory));

app.use((req, res, next) => {
    if (req.method !== 'GET' || path.extname(req.path)) {
        return next();
    }

    res.sendFile(path.join(buildDirectory, 'index.html'), (error) => {
        if (error) {
            next(error);
        }
    });
});

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((error, req, res, next) => {
    console.error(error);

    if (res.headersSent) {
        return next(error);
    }

    res.status(500).send('Unable to load the website. Run npm run build and try again.');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});