# Flowra HTML Store — Deployment Guide

This is a plain HTML/CSS/JS store. No Node.js, no installs, no build step.
Just edit files and upload to any web host.

---

## Files in this folder

| File | What it is |
|------|-----------|
| `index.html` | Homepage |
| `product.html` | Shop / product page |
| `about.html` | About page |
| `reviews.html` | All reviews |
| `faq.html` | FAQ with accordion |
| `success.html` | Order confirmed page |
| `flowra.css` | All styles (shared by every page) |
| `flowra-shared.js` | Shared nav + footer (auto-injects into every page) |
| `product.jpg` | **Add your product photo here** |

---

## Step 1 — Add your product photo

Save your product image as `product.jpg` and drop it in this folder.
That's it — every page will pick it up automatically.

---

## Step 2 — Set up Stripe payments

Stripe handles all your payments. You need two things:

### A) Get your Stripe keys
1. Go to https://dashboard.stripe.com
2. Sign up or log in
3. Go to **Developers → API keys**
4. Copy your **Publishable key** (starts with `pk_test_...`)

### B) Set up a backend for payment intents
Stripe needs a small backend to create payment intents securely.
The easiest way is to deploy the included backend to Vercel (free).

**Or use Stripe Payment Links (even simpler — no backend needed):**
1. In Stripe Dashboard go to **Payment Links → Create**
2. Add your product ($34.95), name it "Flowra Disc"
3. Copy the payment link URL
4. In `index.html` and `product.html`, replace the `openCheckout()` button with:
   `<a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary">Shop Now · $34.95</a>`

This is the simplest option — no backend, no code, just a link.

---

## Step 3 — Deploy to the web

### Option A — Netlify (easiest, free)
1. Go to https://netlify.com and sign up
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your store is live instantly — you'll get a URL like `https://flowra-abc123.netlify.app`
4. To use a custom domain (e.g. flowra.com), go to **Domain settings** in Netlify

### Option B — Vercel (also free)
1. Go to https://vercel.com, sign in with GitHub
2. Upload the folder or push to a GitHub repo and import it
3. Click Deploy

### Option C — Any web host (GoDaddy, Bluehost, etc.)
1. Log in to your hosting control panel
2. Go to **File Manager** or use FTP
3. Upload all files to your `public_html` folder
4. Your site is live at your domain

---

## Step 4 — Connect Stripe to your live site

Once deployed, open `index.html` and `product.html` and update these two lines:

```js
const STRIPE_KEY = 'pk_test_REPLACE_ME';       // ← paste your publishable key
const BACKEND_URL = 'https://your-backend.vercel.app'; // ← your backend URL
```

If using Stripe Payment Links instead, skip this — just update the button href.

---

## Step 5 — Go live with real payments

When ready to accept real money:
1. In Stripe Dashboard, switch from **Test mode** to **Live mode** (toggle top-left)
2. Copy your new **live** publishable key (starts with `pk_live_...`)
3. Update `STRIPE_KEY` in `index.html` and `product.html`
4. Re-upload the files to your host

---

## Making changes

Everything is plain HTML. Open any `.html` file in Notepad (or any text editor)
and edit the text directly. Save and re-upload the file.

To change the price: search for `$34.95` and replace it across the files.
To change the product name: search for `Flowra Disc` and replace it.
To change colours: edit `flowra.css` — all colours are at the top in `:root {}`.

---

## Custom domain

Buy a domain from https://namecheap.com or https://godaddy.com (~$10–15/year),
then point it to your Netlify/Vercel/host using their domain settings guide.

---

## Support

- Stripe docs: https://stripe.com/docs
- Netlify docs: https://docs.netlify.com
- Vercel docs: https://vercel.com/docs
