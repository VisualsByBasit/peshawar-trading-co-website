/* Shared footer, injected on every page into <footer id="site-footer"> */
(function () {
  const mount = document.querySelector("#site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="assets/images/logo-emblem.png" alt="Peshawar Trading Co. logo" />
            <span>Peshawar Trading Co., Ltd.</span>
          </div>
          <p>Exporting used cars, trucks, buses, construction machinery, generators and agricultural tractors from Toyama, Japan to buyers worldwide.</p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/peshawartradingjapan" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1Bv9q3dHKu/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8.5h2V5h-2a4 4 0 0 0-4 4v2H9v3.5h2V21h3.5v-6.5H17l.5-3.5h-3V9a.5.5 0 0 1 .5-.5Z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@peshawar.trading.j" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 4a5 5 0 0 0 5 5" /></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="inventory.html">Inventory</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Categories</h5>
          <ul>
            <li><a href="inventory.html?cat=cars">Cars &amp; Vans</a></li>
            <li><a href="inventory.html?cat=trucks">Trucks</a></li>
            <li><a href="inventory.html?cat=machinery">Construction Machinery</a></li>
            <li><a href="inventory.html?cat=generators">Generators</a></li>
            <li><a href="inventory.html?cat=tractors">Agricultural Tractors</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="https://maps.app.goo.gl/p3ddrfi97GDvEFzk9" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg> 2-8 Motomachi 1-chome,<br/>Imizu-shi, Toyama 934-0011, Japan</a></li>
            <li><a href="tel:+81766508749"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z"/></svg> Tel: 0766-50-8749</a></li>
            <li><a href="https://wa.me/819043254004" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z"/></svg> WhatsApp: +81 90-4325-4004</a></li>
            <li><a href="mailto:peshawar2004@gmail.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg> peshawar2004@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="current-year"></span> Peshawar Trading Co., Ltd. All rights reserved.</span>
        <span>Vehicle Dismantling Business Permit No. 20163000000982</span>
      </div>
    </div>
  `;

  const yearEl = mount.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
