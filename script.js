/* ============================================================
   LUMETRA — PORTFOLIO SCRIPT
   Reads PROJECTS from projects.js and builds the cards.
   ============================================================ */

/* ── CSS-art SVG themes for project thumbnails ─────────────
   Each theme returns an SVG string.
   Used only when a project has no image set.
   ──────────────────────────────────────────────────────── */
function getProjectArt(theme) {
  var arts = {

    brand: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><radialGradient id="rg-brand" cx="50%" cy="50%" r="60%">' +
      '<stop offset="0%" stop-color="#ff4d00" stop-opacity=".25"/>' +
      '<stop offset="100%" stop-color="#ff4d00" stop-opacity="0"/>' +
      '</radialGradient></defs>' +
      '<rect fill="#1a0800" width="400" height="300"/>' +
      '<circle cx="200" cy="150" r="120" fill="url(#rg-brand)"/>' +
      '<circle cx="200" cy="150" r="70" fill="none" stroke="#ff4d00" stroke-width="1.5" opacity=".4"/>' +
      '<circle cx="200" cy="150" r="40" fill="none" stroke="#ff4d00" stroke-width="1" opacity=".3"/>' +
      '<text x="200" y="167" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="46" fill="#ff4d00" opacity=".9" letter-spacing="-2">AC</text>' +
      '<rect x="140" y="196" width="120" height="2" fill="#ff4d00" opacity=".5"/>' +
      '<text x="200" y="222" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#ff4d00" opacity=".6" letter-spacing="4">APEX CLOTHING CO.</text>' +
      '<circle cx="50" cy="50" r="30" fill="none" stroke="#ff4d00" stroke-width=".5" opacity=".2"/>' +
      '<circle cx="350" cy="250" r="40" fill="none" stroke="#ff4d00" stroke-width=".5" opacity=".2"/>' +
      '</svg>',

    social: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="lg-social" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="#0d1a2d"/><stop offset="100%" stop-color="#0a0d14"/>' +
      '</linearGradient></defs>' +
      '<rect fill="url(#lg-social)" width="400" height="300"/>' +
      '<rect x="30"  y="40"  width="100" height="100" rx="14" fill="none" stroke="#ff4d00" stroke-width="1.5" opacity=".5"/>' +
      '<rect x="150" y="40"  width="100" height="100" rx="14" fill="rgba(255,77,0,.08)" stroke="#ff4d00" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="270" y="40"  width="100" height="100" rx="14" fill="none" stroke="#ff4d00" stroke-width="1.5" opacity=".5"/>' +
      '<rect x="30"  y="160" width="100" height="100" rx="14" fill="rgba(255,77,0,.06)" stroke="#ff4d00" stroke-width="1" opacity=".4"/>' +
      '<rect x="150" y="160" width="100" height="100" rx="14" fill="none" stroke="#ff4d00" stroke-width="1" opacity=".4"/>' +
      '<rect x="270" y="160" width="100" height="100" rx="14" fill="rgba(255,77,0,.10)" stroke="#ff4d00" stroke-width="1.5" opacity=".6"/>' +
      '<circle cx="200" cy="90" r="22" fill="#ff4d00" opacity=".85"/>' +
      '<polygon points="194,78 194,102 218,90" fill="white"/>' +
      '<text x="200" y="200" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="#ff4d00" opacity=".8" letter-spacing="2">SUMMER REFRESH</text>' +
      '<text x="200" y="218" text-anchor="middle" font-family="Arial,sans-serif" font-size="8"  fill="#ffffff" opacity=".4" letter-spacing="1">SOCIAL CAMPAIGN 2025</text>' +
      '</svg>',

    photo: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><radialGradient id="rg-photo" cx="50%" cy="40%" r="55%">' +
      '<stop offset="0%" stop-color="#ffaa00" stop-opacity=".2"/>' +
      '<stop offset="100%" stop-color="#ff4d00" stop-opacity="0"/>' +
      '</radialGradient></defs>' +
      '<rect fill="#111108" width="400" height="300"/>' +
      '<rect fill="url(#rg-photo)" width="400" height="300"/>' +
      '<rect x="120" y="95"  width="160" height="115" rx="12" fill="none" stroke="#ff4d00" stroke-width="2" opacity=".6"/>' +
      '<rect x="155" y="75"  width="70"  height="22"  rx="6"  fill="none" stroke="#ff4d00" stroke-width="1.5" opacity=".5"/>' +
      '<circle cx="200" cy="152" r="35" fill="none" stroke="#ff4d00" stroke-width="2" opacity=".7"/>' +
      '<circle cx="200" cy="152" r="24" fill="none" stroke="#ff4d00" stroke-width="1" opacity=".4"/>' +
      '<circle cx="200" cy="152" r="10" fill="rgba(255,77,0,.3)"/>' +
      '<circle cx="250" cy="108" r="7"  fill="none" stroke="#ff4d00" stroke-width="1.5" opacity=".5"/>' +
      '<text x="200" y="242" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#ffaa00" opacity=".7" letter-spacing="3">URBAN LENS SERIES</text>' +
      '</svg>',

    web: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<rect fill="#100008" width="400" height="300"/>' +
      '<rect x="40" y="45" width="320" height="215" rx="8" fill="rgba(255,77,0,.04)" stroke="rgba(255,77,0,.4)" stroke-width="1.5"/>' +
      '<rect x="40" y="45" width="320" height="32" rx="8" fill="rgba(255,77,0,.10)"/>' +
      '<circle cx="60" cy="61" r="6" fill="rgba(255,77,0,.6)"/>' +
      '<circle cx="82" cy="61" r="6" fill="rgba(255,77,0,.3)"/>' +
      '<circle cx="104" cy="61" r="6" fill="rgba(255,77,0,.15)"/>' +
      '<rect x="120" y="53" width="180" height="16" rx="8" fill="rgba(255,255,255,.06)"/>' +
      '<rect x="56" y="90" width="130" height="80" rx="4" fill="rgba(255,77,0,.12)" stroke="rgba(255,77,0,.2)" stroke-width="1"/>' +
      '<rect x="56" y="178" width="80" height="8" rx="4" fill="rgba(255,77,0,.3)"/>' +
      '<rect x="56" y="192" width="110" height="6" rx="3" fill="rgba(255,255,255,.10)"/>' +
      '<rect x="56" y="204" width="90" height="6" rx="3" fill="rgba(255,255,255,.07)"/>' +
      '<rect x="200" y="90" width="148" height="30" rx="4" fill="rgba(255,77,0,.2)"/>' +
      '<rect x="200" y="128" width="148" height="8" rx="4" fill="rgba(255,255,255,.08)"/>' +
      '<rect x="200" y="142" width="120" height="8" rx="4" fill="rgba(255,255,255,.06)"/>' +
      '<rect x="200" y="178" width="60" height="22" rx="4" fill="rgba(255,77,0,.5)"/>' +
      '<text x="230" y="194" text-anchor="middle" font-size="8" fill="white" opacity=".9">EXPLORE</text>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#ff6680" opacity=".7" letter-spacing="2">PEAKS COFFEE · WEB</text>' +
      '</svg>',

    video: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="lg-video" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="#000d1a"/><stop offset="100%" stop-color="#001020"/>' +
      '</linearGradient></defs>' +
      '<rect fill="url(#lg-video)" width="400" height="300"/>' +
      '<rect x="20" y="60" width="360" height="60" fill="rgba(255,77,0,.05)" stroke="rgba(255,77,0,.2)" stroke-width="1"/>' +
      '<rect x="20" y="180" width="360" height="60" fill="rgba(255,77,0,.05)" stroke="rgba(255,77,0,.2)" stroke-width="1"/>' +
      '<rect x="28" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.15)"/>' +
      '<rect x="50" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.12)"/>' +
      '<rect x="72" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.10)"/>' +
      '<rect x="28" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.10)"/>' +
      '<rect x="50" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.12)"/>' +
      '<rect x="72" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.15)"/>' +
      '<rect x="314" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.10)"/>' +
      '<rect x="336" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.12)"/>' +
      '<rect x="358" y="67" width="14" height="46" rx="2" fill="rgba(255,77,0,.15)"/>' +
      '<rect x="314" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.15)"/>' +
      '<rect x="336" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.12)"/>' +
      '<rect x="358" y="187" width="14" height="46" rx="2" fill="rgba(255,77,0,.10)"/>' +
      '<circle cx="200" cy="150" r="38" fill="rgba(255,77,0,.15)" stroke="#ff4d00" stroke-width="2"/>' +
      '<polygon points="192,134 192,166 222,150" fill="#ff4d00" opacity=".9"/>' +
      '<text x="200" y="260" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#4da6ff" opacity=".7" letter-spacing="2">HORIZON FILMS · COMMERCIAL</text>' +
      '</svg>',

    '3d': '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><radialGradient id="rg-3d" cx="50%" cy="50%" r="55%">' +
      '<stop offset="0%" stop-color="#8800ff" stop-opacity=".2"/>' +
      '<stop offset="100%" stop-color="#ff4d00" stop-opacity=".05"/>' +
      '</radialGradient></defs>' +
      '<rect fill="#080010" width="400" height="300"/>' +
      '<rect fill="url(#rg-3d)" width="400" height="300"/>' +
      '<polygon points="140,120 260,120 260,220 140,220" fill="rgba(136,0,255,.08)" stroke="rgba(255,77,0,.6)" stroke-width="1.5"/>' +
      '<polygon points="140,120 260,120 300,80 180,80"  fill="rgba(136,0,255,.12)" stroke="rgba(255,77,0,.5)" stroke-width="1.5"/>' +
      '<polygon points="260,120 300,80 300,180 260,220"  fill="rgba(136,0,255,.06)" stroke="rgba(255,77,0,.4)" stroke-width="1.5"/>' +
      '<circle cx="200" cy="150" r="8"  fill="#ff4d00" opacity=".7"/>' +
      '<circle cx="200" cy="150" r="20" fill="none" stroke="#ff4d00" stroke-width=".5" opacity=".4"/>' +
      '<circle cx="200" cy="150" r="35" fill="none" stroke="#8800ff" stroke-width=".5" opacity=".3"/>' +
      '<circle cx="140" cy="120" r="3" fill="#ff4d00" opacity=".8"/>' +
      '<circle cx="260" cy="120" r="3" fill="#ff4d00" opacity=".8"/>' +
      '<circle cx="260" cy="220" r="3" fill="#ff4d00" opacity=".6"/>' +
      '<circle cx="140" cy="220" r="3" fill="#ff4d00" opacity=".6"/>' +
      '<circle cx="180" cy="80"  r="3" fill="#ff4d00" opacity=".7"/>' +
      '<circle cx="300" cy="80"  r="3" fill="#ff4d00" opacity=".7"/>' +
      '<circle cx="300" cy="180" r="3" fill="#ff4d00" opacity=".6"/>' +
      '<text x="200" y="262" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#aa66ff" opacity=".8" letter-spacing="3">NOVASPHERE · 3D RENDER</text>' +
      '</svg>'
  };
  return arts[theme] || arts['brand'];
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX SLIDER
   ══════════════════════════════════════════════════════════ */

var lbImages  = [];
var lbIndex   = 0;
var lbFading  = false;
var lbTouchX  = 0;

/* Build the lightbox DOM once */
function buildLightbox() {
  var overlay = document.createElement('div');
  overlay.id  = 'lb-overlay';
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('role', 'dialog');

  overlay.innerHTML =
    '<div id="lb-inner">' +
      '<button id="lb-close" aria-label="Close">&#10005;</button>' +
      '<div id="lb-stage">' +
        '<button id="lb-prev" aria-label="Previous image">&#8249;</button>' +
        '<div id="lb-img-wrap">' +
          '<img id="lb-img" src="" alt="Project image">' +
        '</div>' +
        '<button id="lb-next" aria-label="Next image">&#8250;</button>' +
      '</div>' +
      '<div id="lb-footer">' +
        '<div id="lb-dots"></div>' +
        '<div id="lb-counter"></div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  /* Close on backdrop click */
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target.id === 'lb-inner') closeLightbox();
  });

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', function() { lbStep(-1); });
  document.getElementById('lb-next').addEventListener('click', function() { lbStep(1); });

  /* Touch / swipe */
  var wrap = document.getElementById('lb-img-wrap');
  wrap.addEventListener('touchstart', function(e) {
    lbTouchX = e.changedTouches[0].clientX;
  }, { passive: true });
  wrap.addEventListener('touchend', function(e) {
    var diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) lbStep(diff > 0 ? 1 : -1);
  }, { passive: true });

  /* Keyboard */
  document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lb-overlay').classList.contains('lb-open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   lbStep(-1);
    if (e.key === 'ArrowRight')  lbStep(1);
  });
}

function openLightbox(images, startIndex) {
  lbImages = images;
  lbIndex  = startIndex || 0;
  document.body.style.overflow = 'hidden';
  var overlay = document.getElementById('lb-overlay');
  overlay.classList.add('lb-open');
  lbRender(false);
}

function closeLightbox() {
  document.getElementById('lb-overlay').classList.remove('lb-open');
  /* Wait for the close animation to finish before restoring scroll */
  setTimeout(function() {
    document.body.style.overflow = '';
    var img = document.getElementById('lb-img');
    if (img) img.src = '';
  }, 400);
}

function lbStep(dir) {
  if (lbFading) return;
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  lbRender(true);
}

function lbRender(animate) {
  var img     = document.getElementById('lb-img');
  var dots    = document.getElementById('lb-dots');
  var counter = document.getElementById('lb-counter');
  var prev    = document.getElementById('lb-prev');
  var next    = document.getElementById('lb-next');

  /* Show/hide arrows for single image */
  var multi = lbImages.length > 1;
  prev.style.visibility = multi ? 'visible' : 'hidden';
  next.style.visibility = multi ? 'visible' : 'hidden';

  /* Counter text */
  counter.textContent = (lbIndex + 1) + ' / ' + lbImages.length;

  /* Dots */
  dots.innerHTML = '';
  lbImages.forEach(function(_, i) {
    var d = document.createElement('button');
    d.className  = 'lb-dot' + (i === lbIndex ? ' lb-dot-active' : '');
    d.setAttribute('aria-label', 'Image ' + (i + 1));
    (function(idx) {
      d.addEventListener('click', function() {
        if (idx !== lbIndex) { lbIndex = idx; lbRender(true); }
      });
    })(i);
    dots.appendChild(d);
  });

  /* Image swap with fade */
  if (animate) {
    lbFading = true;
    img.classList.add('lb-fade');
    setTimeout(function() {
      img.src = lbImages[lbIndex];
      img.onload = function() {
        img.classList.remove('lb-fade');
        lbFading = false;
      };
      /* Fallback if image fails to load */
      img.onerror = function() {
        img.classList.remove('lb-fade');
        lbFading = false;
      };
    }, 220);
  } else {
    img.src = lbImages[lbIndex];
  }
}

/* ══════════════════════════════════════════════════════════
   RENDER PROJECT CARDS
   ══════════════════════════════════════════════════════════ */
var revealObserver;

function renderProjects() {
  var grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = '';

  PROJECTS.forEach(function(project) {
    var hasImage     = project.image && project.image.trim() !== '';
    var thumbContent = hasImage
      ? '<img src="' + project.image + '" alt="' + project.title + '">'
      : '<div class="proj-art pt-' + (project.theme || 'brand') + '">' + getProjectArt(project.theme || 'brand') + '</div>';

    var card = document.createElement('div');
    card.className = 'proj-card reveal';
    card.innerHTML =
      '<div class="proj-thumb">' +
        '<div class="proj-thumb-inner">' + thumbContent + '</div>' +
        '<div class="proj-overlay"></div>' +
        '<div class="proj-info">' +
          '<span class="proj-tag">' + (project.category || '') + '</span>' +
          '<div class="proj-title">' + (project.shortTitle || project.title) + '</div>' +
          '<div class="proj-view-hint">Click to view project</div>' +
        '</div>' +
      '</div>' +
      '<div class="proj-label">' +
        '<div class="proj-label-title">' + project.title + '</div>' +
        '<div class="proj-label-cat">' + (project.category || '') + '</div>' +
      '</div>';

    /* Open lightbox on click */
    (function(proj) {
      card.addEventListener('click', function() {
        var imgs = proj.images || [];
        if (imgs.length > 0) {
          openLightbox(imgs, 0);
        }
      });
    })(project);

    grid.appendChild(card);

    if (revealObserver) revealObserver.observe(card);
  });
}

/* ── DOM ready ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {

  /* Build the lightbox overlay */
  buildLightbox();

  /* Floating particles in hero */
  var container = document.getElementById('particles');
  if (container) {
    for (var i = 0; i < 30; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      var size = 1 + Math.random() * 3;
      p.style.cssText =
        'left:'               + (Math.random() * 100) + '%;' +
        'bottom:'             + (Math.random() * 20)  + '%;' +
        'animation-duration:' + (4 + Math.random() * 6) + 's;' +
        'animation-delay:'    + (Math.random() * 6)   + 's;' +
        'width:'              + size + 'px;' +
        'height:'             + size + 'px;';
      container.appendChild(p);
    }
  }

  /* Scroll-reveal observer */
  revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
  });

  /* Build project cards */
  renderProjects();
});

/* ── Mobile menu toggle ──────────────────────────────────── */
function toggleMenu(btn) {
  var links = document.querySelector('.nav-links');
  var cta   = document.querySelector('.nav-cta');
  var open  = links.getAttribute('data-open') === '1';

  if (!open) {
    links.style.cssText =
      'display:flex;flex-direction:column;position:fixed;top:72px;' +
      'left:0;right:0;background:rgba(10,13,20,0.98);' +
      'padding:28px 5%;gap:22px;border-bottom:1px solid rgba(255,77,0,0.2);z-index:999;';
    cta.style.cssText = 'display:block;margin:8px 5%;';
    links.setAttribute('data-open', '1');
  } else {
    links.style.cssText = 'display:none;';
    cta.style.cssText   = '';
    links.setAttribute('data-open', '0');
  }
}
