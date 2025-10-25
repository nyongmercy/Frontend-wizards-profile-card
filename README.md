# 🧙‍♀️Frontend Wizards — Stage 1 Task

## 🚀Overview

This project expands into **a multi-page responsive web app** that includes:

* A **Profile Card (Home Page)**

* A **Contact Us Page** with form validation

* An **About Me Page** with semantic and accessible structure

The project is built using **HTML, CSS, and Vanilla JavaScript** following accessibility and semantic best practices.

---------------------------------------------------------------------------------------------------

# 🧩 Pages Overview

## 🏠 Home (Profile Card)

**File**: index.html

Displays a user profile card containing:

Features:

* User name, bio, hobbies, dislikes, and social links

* Dynamic time (in milliseconds, updated every second)

* Responsive design across mobile, tablet, and desktop

* Use semantic HTML tags like `<header>`, `<section>`, `<nav>`, `<ul>`, and `<figure>`.

Each element includes the required data-testid for automated testing.

---------------------------------------------------------------------------------------------------

## ✉️ Contact Us Page

**File:** contact.html

Includes a form with built-in **JavaScript validation.**

## Validation Rules:
  * All fields are required

  * Email must follow name@example.com format

  * Message must be at least 10 characters

  * On success, shows a confirmation message

## Accessibility:

  * Each input has an associated <label for="...">
  * Error messages use aria-describedby
  * Fully keyboard navigable

---------------------------------------------------------------------------------------------------

## 👩‍💻 About Me Page

**File:** about.html

A reflective page describing personal goals and growth areas.

Includes sections for:

  * Bio — data-testid="test-about-bio"
  * Goals — data-testid="test-about-goals"
  * Areas of Low Confidence — data-testid="test-about-confidence"
  * Note to Future Self — data-testid="test-about-future-note"
  * Extra Thoughts — data-testid="test-about-extra"

Uses proper **semantic HTML**: `<main>`, `<section>`, `<h2>`, `<p>`.

---------------------------------------------------------------------------------------------------

## ⚙️ Technologies Used

  * HTML5 (Semantic markup)
  * CSS3 (Flexbox, Responsive Design)
  * JavaScript (Vanilla) (Form validation, dynamic time updates)

---------------------------------------------------------------------------------------------------

# 📁 Project Structure

```frontend-wizards-stage1/

├── index.html      ---    Profile card homepage
├── contact.html    ---    Contact form with validation
├── about.html      ---    About Me page
├── style.css       ---    Shared styling across all pages
├── script.js       ---    Handles dynamic time & form validation
└── README.md       ---    Project documentation
```
---------------------------------------------------------------------------------------------------

## 🧪 Testing

All required data-testid attributes are implemented for automated testing.
You can inspect elements or use browser DevTools to confirm.

Example:

`<h2 data-testid="test-user-name">Mercy Nyong</h2>`
`<p data-testid="test-user-bio">Frontend Developer...</p>`

---------------------------------------------------------------------------------------------------

## 🌐 Live Demo

**Netlify Deployment:** [https://frontendwizards-profilecard.netlify.app](https://frontendwizards-profilecard.netlify.app)

---------------------------------------------------------------------------------------------------

# 🖥️ How to Run Locally
1. Clone the repository:

git clone https://github.com/<your-username>/frontend-wizards-stage1.git

2. Open the project folder:

cd frontend-wizards-stage1

3. Open any file (`index.html`, `about.html`, or `contact.html`) in your browser.

That’s it! 🎉

---------------------------------------------------------------------------------------------------

# 🧑‍🎓 Author

**Name:** Mercy Nyong

**Role:** Frontend Developer

**Internship:** HNG Frontend — Stage 1

**GitHub:** [github.com/nyongmercy](https://github.com/nyongmercy)
