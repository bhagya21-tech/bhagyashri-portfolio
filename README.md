# Bhagyashri Raut — Portfolio

A multi-page personal portfolio website built with semantic HTML5, accessible
markup (WCAG-aligned), and vanilla CSS/JavaScript — no frameworks, no build step.

🔗 **Live site:** _add your deployed URL here after publishing_

## About

This portfolio showcases my work and background as a Computer Science student
and Python developer focused on AI, Machine Learning, Data Science, and
Web Development.

## Pages

| Page | Description |
|---|---|
| `index.html` | Landing page with intro, about summary, and featured projects |
| `about.html` | Full bio, education, technical skills, certifications, career goal |
| `projects.html` | Complete project list with tech stacks and GitHub links |
| `contact.html` | Contact form and direct contact details |

## Features

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Accessible by default: skip link, labelled form fields, keyboard-navigable nav,
  visible focus states, `aria-current` on the active nav link
- SEO meta tags (description, keywords, Open Graph) on every page
- Responsive layout, mobile-friendly navigation
- Scroll-reveal animations on page sections (respects `prefers-reduced-motion`)
- Dark mode toggle with saved preference (`localStorage`)
- Back-to-top button

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (`IntersectionObserver`, `localStorage`)

## Project structure

```
.
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── favicon.png
│   ├── profile.png
│   └── projects/
├── assets/
│   └── resume.pdf
└── README.md
```

## Running locally

No build tools required. Either:

1. Open `index.html` directly in a browser, **or**
2. Serve it locally for a more production-like environment:
   ```bash
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`

## Author

**Bhagyashri Raut**
- GitHub: [@bhagya21-tech](https://github.com/bhagya21-tech)
- LinkedIn: [bhagyashri-raut-471960322](https://linkedin.com/in/bhagyashri-raut-471960322)
- Email: rautbhagya16@gmail.com

## License

This project is open source and available for reference under the [MIT License](LICENSE).