# TechSphere — Technology Blog

A responsive, multi-page static technology blog built with HTML, CSS and vanilla JavaScript for a BCS501 Software Engineering and Project Management academic assignment.

## Pages
- `index.html` — homepage, featured story and latest articles
- `about.html` — purpose, vision and mission
- `blog.html` — article listing, search and category filters
- `article.html` — individual article template (uses `?id=...`)
- `contact.html` — validated contact-form interface

## Run locally
1. Extract the ZIP file.
2. Open the `TechSphere` folder in Visual Studio Code.
3. Install the **Live Server** extension (optional but recommended).
4. Right-click `index.html` and choose **Open with Live Server**.

You can also use any static local web server. Opening the files directly may work, but a local server is the recommended workflow.

## Technologies
- HTML5 for semantic page structure
- CSS3 for layout, responsive design and visual styling
- Vanilla JavaScript for article rendering, search, category filtering, navigation and form validation
- Google Fonts for typography
- Unsplash-hosted images for editorial imagery

## Important implementation notes
- Search and category filtering run in the browser using the article data in `js/articles.js`.
- Article pages are generated from the article data using the `id` query parameter.
- The contact form validates input in the browser only. It does not transmit messages.
- The newsletter form validates an email address in the browser only. It does not subscribe or store email addresses.
- Before production use, connect these forms to a trusted backend or form service, add spam protection and publish an appropriate privacy notice.
- Article content is a starting draft for an academic project. Review, edit and verify it against the linked references before submission or publication.
- Images and Google Fonts are loaded from external services, so internet access is needed for those assets.
- No deployment has been performed by this project package.

## Suggested deployment
GitHub Pages can host this static site:
1. Create a GitHub repository named `techsphere`.
2. Upload the contents of this folder (not the ZIP itself).
3. Open repository **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to finish publishing and open the URL shown in Settings → Pages.
6. Test every page, search, category filter and form behaviour on desktop and mobile.

## Academic documentation checklist
Record actual dates and outcomes when you:
- implement and revise each page
- test navigation, search and category filters
- test form validation and document the fact that sending is not configured
- inspect mobile and desktop layouts
- deploy and verify the live URL
