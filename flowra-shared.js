// flowra-shared.js — injects nav and footer into every page
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',   label: 'Home' },
    { href: 'product.html', label: 'Shop' },
    { href: 'about.html',   label: 'About' },
    { href: 'reviews.html', label: 'Reviews' },
    { href: 'faq.html',     label: 'FAQ' },
  ];

  const navHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Flowra</a>
        <ul class="nav-links">
          ${navLinks.map(l => `<li><a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a></li>`).join('')}
        </ul>
      </div>
    </nav>`;

  const footerHTML = `
    <footer class="footer">
      <div class="container footer-inner">
        <span class="footer-logo">Flowra</span>
        <ul class="footer-links">
          <li><a href="product.html">Shop</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
        <span class="footer-copy">© ${new Date().getFullYear()} Flowra &middot; Payments secured by Stripe</span>
      </div>
    </footer>`;

  // Inject nav before body content
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
