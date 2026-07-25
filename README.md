# Page Pulse - Website SEO Auditor

## Overview

Page Pulse is a lightweight website SEO auditing tool built with Node.js. It analyzes a webpage and extracts basic SEO metrics such as page title, meta description, heading count, image accessibility, response time, and word count.

---

## Features

- Validate website URLs
- Measure response time
- Extract page title
- Extract meta description
- Count H1 headings
- Count images missing alt attributes
- Count page words
- User-friendly frontend
- Parser unit tests using Jest

---

## Tech Stack

### Backend
- Node.js
- Express.js
- Axios
- Cheerio
- Validator

### Frontend
- HTML
- CSS
- JavaScript

### Testing
- Jest

---

## Project Structure

backend/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ │ └── parser.js
│ └── errors/
│
├── tests/
│ └── parser.test.js
│
├── package.json
└── .env.example

frontend/
├── index.html
├── style.css
└── script.js

---

## Installation

Clone the repository

```bash
git clone https://github.com/waquararif149-lang/Page-Pulse.git
```

Move into backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
```

Start the backend

```bash
npm run dev
```

Open the frontend using Live Server.

---

## API Contract

### Endpoint

```
POST /api/audit
```

### Request

```json
{
    "url": "https://example.com"
}
```

### Successful Response

```json
{
    "success": true,
    "status": 200,
    "responseTime": 145,
    "title": "Example Domain",
    "metaDescription": "Example website",
    "h1Count": 1,
    "imagesMissingAlt": 0,
    "wordCount": 250
}
```

### Error Response

```json
{
    "success": false,
    "message": "Invalid URL"
}
```

---

## Running Tests

```bash
npm test
```

Current Test Coverage

- Happy Path
- Missing Title
- Missing Meta Description

---

## Design Decisions

### 1. Separated HTML Parsing from Network Requests

The HTML parsing logic was moved into a dedicated `parser.js` utility. This keeps the service focused on validation and network communication while making the parser independently testable.

---

### 2.Using Cheerio for Server-Side HTML Parsing

Cheerio was chosen because it provides a fast and lightweight jQuery-like API for server-side HTML parsing without requiring a browser.

---

### 3. Unit Testing the Parser

Instead of testing against live websites, tests use static HTML strings. This makes the tests deterministic, fast, and independent of internet connectivity or external website changes.

---

## Future Improvements

If more time were available, I would:

- Analyze additional SEO tags (Open Graph, Canonical, Robots)
- Support sitemap analysis
- Add Docker support and CI/CD Pipeline
- Add API integration tests

---

## Author

Arif Waquar