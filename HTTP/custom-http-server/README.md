Sure — here is a **short, simple, humanized README.md** without unnecessary explanations.

# Custom HTTP Server Using Node.js

The server has Home, About, Contact, and 404 pages. No Express.js or external packages are used.

## Installation

First, install Node.js from the official Node.js website.

Check if Node.js is installed:

```bash
node -v
npm -v
```

## Setup

Create the project:

```bash
mkdir custom-http-server
cd custom-http-server
npm init -y
```

Project structure:

```text
custom-http-server/
├── server.js
├── package.json
└── README.md
```

## Run the Server

Start the server using:

```bash
node server.js
```

Or:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Pages

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page
* Any other URL → 404 Page

## Technologies Used

* Node.js
* JavaScript
* HTTP Module

## About the Project

This project shows how a basic web server works using Node.js. It takes a request from the browser, checks the URL, and sends the correct page as a response.
