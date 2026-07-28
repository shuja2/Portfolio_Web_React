
---

# 📖 Portfolio Application Documentation

## 🌐 Overview

This project is a personal developer portfolio web application built with **React**. It features a classic, clean layout designed to showcase technical skills, featured projects (such as MERN stack applications), peer/client recommendations, and contact channels.

---

## 🛠 Tech Stack

* **Frontend Framework:** React.js
* **Styling:** CSS3, Modern Modular Styles (`App.css`, `index.css`)
* **Assets & Icons:** Custom SVG logos, high-resolution PNG badges (C++, CSS3, HTML5, JavaScript, Node.js, React)
* **Deployment:** GitHub Pages

---

## 📁 Repository Structure

```text
portfolio/
├── public/                     # Static assets and HTML entry point
│   ├── 3d-man-on-pc.png        # Developer hero illustration
│   ├── waving-hand.png         # Interactive greeting graphic
│   ├── cpp.png, CSS3.png, ...  # Tech stack skill badges
│   ├── index.html              # HTML DOM host page
│   ├── manifest.json           # PWA web app manifest
│   └── robots.txt              # Search engine crawling rules
│
├── src/                        # React application source code
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.js           # Top navigation bar
│   │   ├── AboutMe.js          # Biography and intro section
│   │   ├── Skills.js           # Interactive skills & tech stack showcase
│   │   ├── Projects.js         # Card showcase for core MERN & full-stack apps
│   │   ├── Recommendation.js   # Peer/client feedback & testimonials
│   │   ├── RecommendationForm.js # Form to submit new recommendations
│   │   ├── ContactUs.js        # Contact details section
│   │   ├── ContactUsForm.js    # Interactive contact message submission form
│   │   └── Footer.js           # Social links and copyright footer
│   │
│   ├── App.js                  # Main Application Component
│   ├── App.css                 # Main layout and theme styles
│   ├── index.js                # React DOM rendering entry point
│   └── index.css               # Base global styles & reset
│
├── package.json                # Project dependencies and scripts
└── README.md                   # Repository overview

```

---

## ⚙️ Core Components Breakdown

### 1. Navigation (`Navbar.js`)

* Provides smooth scrolling anchors to jump across core sections: **About Me**, **Skills**, **Projects**, **Recommendations**, and **Contact**.

### 2. Header & Hero (`AboutMe.js`)

* Displays an intro greeting alongside visual assets (`3d-man-on-pc.png`, `waving-hand.png`).
* Briefly highlights developer background, key specialties, and quick call-to-action buttons (Resume / Contact).

### 3. Skills Showcase (`Skills.js`)

* Renders tech badges and proficiency cards utilizing skill assets (`cpp.png`, `CSS3.png`, `html5.png`, `js.jpeg`, `node.png`, `react.png`).

### 4. Projects Portfolio (`Projects.js`)

* Displays interactive cards for key applications (e.g., **PharmaVault**, custom web apps, and CLI utilities) with descriptions, technology tags, and links to live demos or GitHub repos.

### 5. Recommendations (`Recommendation.js` & `RecommendationForm.js`)

* Displays written testimonials.
* Includes a dynamic input form (`RecommendationForm.js`) allowing users/peers to submit endorsement feedback directly on the page.

### 6. Contact Section (`ContactUs.js` & `ContactUsForm.js`)

* Provides direct contact methods alongside a clean UI form for visitors to send direct messages.

---

## 🚀 Getting Started locally

### Prerequisites

* **Node.js** (v14.x or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shuja2/portfolio.git
cd portfolio

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm start

```


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
4. **Build for production:**
```bash
npm run build

```


5. **Deploy to GitHub Pages:**
```bash
npm run deploy

```