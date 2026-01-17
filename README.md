<h1 style="display: flex; align-items: center; justify-content: start; gap: 10px;">
  <img src="./src/app/favicon.ico" width="30" /><a hrf='https://foodiefinds-blush.vercel.app/'>🍵FoodieFinds</a>
</h1>

# Digital Menu Application

FoodieFinds is a modern, responsive digital menu application built with **Next.js 16** and **React 19**. It allows users to browse a curated list of dishes with rich details, while offering a protected administrative interface for restaurant managers to add new items to the menu.

---

## 🚀 Features

### ✅ Core Functionality
* **Dynamic Menu:** Browse a list of food items fetched from a custom backend.
* **Dish Details:** Detailed view for every item including price, description, and "Chef's Notes."
* **Admin Dashboard:** A protected route to add new items to the menu.
* **Mock Database:** Uses an Express.js server to simulate a backend database for storing and retrieving menu items.

### 🎨 UI & UX
* **Modern Styling:** Built with **Tailwind CSS 4** and **DaisyUI 5** for a clean, accessible interface.
* **Responsive Design:** Fully mobile-optimized Navbar (with hamburger menu), Hero section, and Grid layouts.
* **Toast Notifications:** Integrated **React Hot Toast** for instant feedback (e.g., "Dish added successfully").
* **Dynamic Metadata:** SEO-friendly pages with dynamic titles and OpenGraph tags for social sharing.

### 🔐 Authentication
* **Mock Login System:** Secure credential check using hardcoded admin credentials.
* **Cookie-Based Protection:** Uses HTTP cookies to manage session state.
* **Middleware Protection:** Next.js Middleware blocks unauthenticated access to `/admin` routes.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 16.1.2 (App Router), React 19
* **Styling:** Tailwind CSS 4, DaisyUI 5
* **Backend:** Express.js (running on port 5000)
* **Data Handling:** In-Memory / JSON Data
* **Utilities:** React Hot Toast, ESLint

---

## ⚙️ Setup & Installation Instructions

Follow these steps to get the project running locally. You will need **Node.js** installed.

### 1. Clone & Install Dependencies
```bash
# Install frontend dependencies (Next.js, React, DaisyUI, etc.)
npm install

# Install backend dependencies (if not already installed)
npm install express cors body-parser

```

### 2. Start the Backend Server

The application requires the backend to be running to fetch and save data.
Open a **new terminal** and run:

```bash
node server.js

```

* *Note: This will start the API server on Port 5000.*

### 3. Start the Frontend Application

Open a **second terminal** and run:

```bash
npm run dev

```

The application will start on `http://localhost:3000`.

---

## 📍 Route Summary

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | **Home Page:** Hero section and featured navigation. |
| `/menu` | Public | **Menu Page:** Displays all available dishes. |
| `/menu/[id]` | Public | **Details Page:** Specific details, ingredients, and visual stats for a dish. |
| `/login` | Public | **Login Page:** Admin authentication form. |
| `/admin/add-dish` | **Protected** | **Add Item:** Form to upload new dishes (Requires Login). |

---

## 🔑 Admin Credentials

To test the protected functionality, use the following demo credentials on the `/login` page:

* **Email:** `admin@foodiefinds.com`
* **Password:** `admin123`

---

## 📝 Feature Explanation

1. **Mock Authentication & Middleware:**
The app uses a `middleware.js` file to intercept requests to `/admin`. It checks for a specific `auth=true` cookie. If missing, the user is redirected to Login. The Login page sets this cookie upon validating the hardcoded credentials.
2. **Admin Protection:**
The "Add Item" functionality is strictly protected. Unauthenticated users cannot see the "Add Item" button in the navigation or Hero section, and any attempt to access the route directly via the URL is blocked by the server middleware.
3. **Real-Time Feedback:**
The application provides immediate visual feedback using Toast notifications. When an admin adds an item or encounters an error (like an invalid price), a non-intrusive popup alerts them to the status of their action without requiring a page reload.


