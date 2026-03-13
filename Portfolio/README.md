# Thirthala Rajkumar – Developer Portfolio

A clean, fast, single-page developer portfolio built with pure HTML, CSS, and JavaScript.  
Zero dependencies. Zero frameworks. Just fast, professional web code.

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main entry file
├── style.css           ← All styles (dark/light theme)
├── script.js           ← Interactions, animations, typed effect
├── assets/
│   └── Thirthala_Rajkumar_Resume.pdf   ← Your resume (add here)
└── README.md           ← This file
```

## ✨ Features

- 🌙 Dark / Light mode toggle (persisted in localStorage)
- 🔤 Typed tagline animation
- 📱 Fully responsive & mobile-friendly
- 🎨 Scroll reveal animations
- 🖱️ Custom cursor dot (desktop)
- 📊 GitHub stats via github-readme-stats API
- 📬 Contact form UI
- ⚡ Zero dependencies – pure HTML/CSS/JS

---

## 🚀 Deploy to GitHub Pages – Step by Step

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **New Repository**
3. Name it: `<your-username>.github.io`  
   *(e.g., `Rajvarma-hub.github.io`)*
4. Set it to **Public**
5. Click **Create Repository**

---

### Step 2: Upload Your Portfolio Files

**Option A – Using GitHub Web UI (easiest):**
1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop all portfolio files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` folder (with your resume PDF)
4. Click **Commit changes**

**Option B – Using Git CLI:**
```bash
# Inside your portfolio folder
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/Rajvarma-hub/Rajvarma-hub.github.io.git
git push -u origin main
```

---

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll to **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

---

### Step 4: Access Your Live Site

After 1–2 minutes, your portfolio will be live at:

```
https://Rajvarma-hub.github.io
```

---

## 📝 Customization Checklist

- [ ] Replace the profile emoji in `index.html` hero section with your actual photo
- [ ] Add your resume PDF to `assets/Thirthala_Rajkumar_Resume.pdf`
- [ ] Update GitHub username in the stats image URLs (search `Rajvarma-hub`)
- [ ] Update live demo links for each project card
- [ ] Add real project screenshots in the project cards (replace emoji with `<img>`)
- [ ] Update the contact form to use [Formspree](https://formspree.io) for real submissions:
  - Sign up at formspree.io
  - Change `<form id="contact-form">` to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

---

## 📸 Adding Your Real Profile Photo

Replace this in `index.html`:
```html
<span class="photo-placeholder">👨‍💻</span>
```

With:
```html
<img src="assets/profile.jpg" alt="Thirthala Rajkumar" style="width:100%;height:100%;object-fit:cover;" />
```

Then add your photo as `assets/profile.jpg`.

---

## 🔗 Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap or GoDaddy)
2. In repository Settings → Pages → Custom Domain, enter your domain
3. Add a `CNAME` file to your repo with just your domain:
   ```
   rajkumar.dev
   ```
4. Update DNS records at your registrar to point to GitHub's IPs

---

Built with 💚 by Thirthala Rajkumar
