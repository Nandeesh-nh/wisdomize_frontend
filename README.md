```markdown
# Wisdomize Frontend

**Wisdomize** is a modern EdTech platform built with React. This repository contains the frontend of the application, styled with Tailwind CSS and deployed as a static site.

> 🌐 Live Site: [https://wisdomize-frontend.onrender.com](https://wisdomize-frontend.onrender.com)

---

## Tech Stack

- React
- Vite (build tool)
- Tailwind CSS (utility-first CSS)
- React Router DOM (routing)
- Axios (HTTP client)
- Lucide Icons (icon set)
- Render (static site hosting)

---

## Project Structure

```

wisdomize-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── package.json
└── vite.config.js

````

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Nandeesh-nh/wisdomize_frontend.git
cd wisdomize_frontend
````

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to see the app.

---

## Deployment

The frontend is deployed on **Render** as a static site.

* **Build Command:**
  `npm install && npm run build`

* **Publish Directory:**
  `dist`

* **Live URL:**
  [https://wisdomize-frontend.onrender.com](https://wisdomize-frontend.onrender.com)

---

## Features

* Role-based protected routes (Admin, Instructor, Student)
* Browse and enroll in courses
* Responsive UI with Tailwind CSS
* Dynamic data fetching via Axios from backend APIs
* Loading and error handling states
* Fully mobile responsive

---

## Backend API

Make sure the backend API is running and accessible (e.g., at `https://wisdomize-backend.onrender.com`) for full functionality.

---

## License

This project uses the [MIT License](LICENSE).

---

Feel free to contribute or report issues!

```
```
