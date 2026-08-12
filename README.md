# Personal Portfolio — Advanced CSS3 & Responsive Architecture

A modern, accessible, and fully responsive personal portfolio website built as part of an **Advanced CSS3 & Responsive Architecture** internship project.

The project transforms a semantic HTML portfolio into a polished responsive interface using **CSS Grid, Flexbox, CSS custom properties, responsive media queries, modern CSS3 features, and dynamic light/dark theming**.

## 🌐 Live Demo

**Live Website:** `Add your deployed URL here`

## 📌 Project Overview

This portfolio showcases my technical skills, projects, education, certifications, and contact information through a responsive multi-page website.

The primary objective of this project was to develop a **mobile-first responsive architecture** that provides a consistent user experience across mobile, tablet, laptop, and desktop screen sizes.

The website was designed with maintainability and accessibility in mind rather than relying on fixed layouts or excessive visual effects.

## ✨ Key Features

* 📱 Fully responsive, mobile-first layout
* 🎨 Dynamic light/dark theme
* 🧩 CSS Grid for two-dimensional layouts
* ↔️ Flexbox for component alignment
* 🎯 Responsive typography using `clamp()`
* 📐 Flexible layouts using `minmax()` and `auto-fit`
* 🖼️ Responsive images using `aspect-ratio` and `object-fit`
* ✨ CSS transitions and hover interactions
* ♿ Accessibility-focused navigation and focus states
* ⌨️ Keyboard-friendly interface
* 🧭 Skip navigation link
* 🔄 Persistent theme preference using `localStorage`
* ♻️ Reduced-motion support
* 📱 Tested across mobile, tablet, and desktop breakpoints
* 📄 Resume integration
* 🔗 Project, GitHub, LinkedIn, and contact links

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### CSS Architecture

* CSS Custom Properties
* CSS Grid
* Flexbox
* Media Queries
* `clamp()`
* `minmax()`
* `auto-fit`
* `aspect-ratio`
* CSS Transitions
* CSS Transforms
* Gradients
* Responsive Design

### JavaScript

* DOM Manipulation
* `IntersectionObserver`
* `localStorage`
* `matchMedia()`
* Theme management
* Back-to-top functionality

## 🧱 Project Structure

```text
portfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── favicon.png
│   ├── profile.png
│   └── projects/
│       ├── visionloop.png
│       ├── behavior-ai.png
│       ├── mentor-chatbot.png
│       ├── app-analytics.png
│       ├── mental-health.png
│       └── cohort-analysis.png
│
├── assets/
│   └── resume.pdf
│
├── README.md
└── .gitignore
```

## 🎨 Responsive Architecture

The website follows a **mobile-first approach**.

The base styles target smaller screens first, with progressively enhanced layouts for larger devices.

### Breakpoints

| Breakpoint | Purpose       |
| ---------- | ------------- |
| `< 768px`  | Mobile        |
| `≥ 768px`  | Tablet        |
| `≥ 1024px` | Desktop       |
| `≥ 1440px` | Large desktop |

The layout was tested across approximately:

```text
320px
375px
430px
768px
1024px
1440px
```

## 🧩 CSS Grid

CSS Grid is used for layouts where both rows and columns need to be controlled.

Examples include:

* Project cards
* Technical skills
* Contact page layout

Example:

```css
.projects-grid {
    display: grid;
    grid-template-columns:
        repeat(
            auto-fit,
            minmax(min(100%, 300px), 1fr)
        );
}
```

This allows the number of project columns to adapt automatically to the available screen width.

## ↔️ Flexbox

Flexbox is used for one-dimensional component layouts such as:

* Navigation
* Project buttons
* Technology tags
* Contact information
* Form layouts

Example:

```css
.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
}
```

## 🎨 Theme System

The portfolio uses CSS custom properties to manage its visual design.

The light theme defines the default variables:

```css
:root {
    --bg: #f8fafc;
    --surface: #ffffff;
    --text: #1e293b;
    --primary: #2563eb;
}
```

The dark theme overrides those variables:

```css
.dark-theme {
    --bg: #0b1120;
    --surface: #111c31;
    --text: #f8fafc;
}
```

This approach avoids duplicating component styles for each theme and makes the design easier to maintain.

The selected theme is also stored using `localStorage`, allowing the preference to persist between page loads.

## ♿ Accessibility

Accessibility was considered throughout the project.

Implemented features include:

* Semantic HTML5 structure
* Skip navigation link
* Proper form labels
* Keyboard focus states
* `aria-current` navigation state
* Descriptive image `alt` attributes
* Reduced-motion support
* Responsive text and layouts
* Sufficient theme contrast

## 📂 Portfolio Sections

### Home

Introduces the portfolio and provides quick access to:

* About
* Projects
* Contact
* Resume

### About

Contains:

* Professional introduction
* Education
* Technical skills
* Certifications
* Career goals

### Projects

Showcases selected projects including:

* VisionLoop — Active Learning for Computer Vision
* Human Behavior Analysis AI
* AI Mentor Chatbot
* App Usage Analytics
* Student Mental Health Dashboard
* Customer Retention Cohort Analysis

### Contact

Provides:

* Contact form
* Email
* Phone
* GitHub
* LinkedIn
* Resume access

## 🚀 Running Locally

No build system or framework is required.

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd portfolio
```

Then open:

```text
index.html
```

in a browser.

For development, using the **Live Server extension in VS Code** is recommended.

## 🔗 Links

* **Live Demo:** `Add deployed website URL`
* **GitHub:** `https://github.com/bhagya21-tech`
* **LinkedIn:** `https://linkedin.com/in/bhagyashri-raut-471960322`

## 📈 Project Objectives

This project was developed to demonstrate practical understanding of:

1. Advanced CSS3
2. Responsive web architecture
3. CSS Grid
4. Flexbox
5. Mobile-first development
6. CSS custom properties
7. Dynamic theming
8. Accessibility
9. Modern CSS layout techniques
10. Maintainable frontend structure

## 🔮 Future Improvements

Potential future enhancements include:

* Mobile navigation menu
* Form backend integration
* Improved project filtering
* Automated deployment pipeline
* Additional accessibility testing
* Performance optimization
* Progressive Web App features

## 👩‍💻 Author

**Bhagyashri Shriram Raut**

Python Developer | Data Science | AI/ML

* GitHub: `https://github.com/bhagya21-tech`
* LinkedIn: `https://linkedin.com/in/bhagyashri-raut-471960322`

---

### Internship Project

**Advanced CSS3 & Responsive Architecture**

This project demonstrates the transformation of a semantic portfolio into a responsive, accessible, and visually polished web experience using modern CSS architecture.
