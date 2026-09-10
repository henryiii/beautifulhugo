(function () {
  var wrapper = document.getElementById('toc-wrapper');
  if (!wrapper) return;

  var mode = wrapper.getAttribute('data-toc-mode') || 'headings';

  if (mode === 'posts') {
    var postList = wrapper.querySelector('.toc-post-list');
    var hasPosts = postList && postList.querySelector('li');
    if (!hasPosts) {
      wrapper.remove();
      var navToggle = document.getElementById('toc-toggle');
      if (navToggle) navToggle.remove();
      return;
    }
  } else {
    var tocNav = wrapper.querySelector('#TableOfContents');
    var hasItems = tocNav && tocNav.querySelector('li');
    if (!hasItems) {
      wrapper.remove();
      var navToggle = document.getElementById('toc-toggle');
      if (navToggle) navToggle.remove();
      return;
    }
    var allLinks = tocNav.querySelectorAll('a');
    if (allLinks.length <= 1) {
      wrapper.remove();
      var navToggle2 = document.getElementById('toc-toggle');
      if (navToggle2) navToggle2.remove();
      return;
    }
  }

  var toggle = document.getElementById('toc-toggle');
  var panel = document.getElementById('toc-panel');
  var close = document.getElementById('toc-close');
  var backdrop = document.getElementById('toc-backdrop');
  var isOpen = false;

  function openPanel() {
    isOpen = true;
    panel.removeAttribute('inert');
    panel.classList.add('toc-open');
    backdrop.classList.add('toc-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (close) close.focus();
  }

  function closePanel(returnFocus) {
    isOpen = false;
    panel.classList.remove('toc-open');
    backdrop.classList.remove('toc-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // `inert` drops the closed panel out of the tab order and the
    // accessibility tree, so its links are not read twice on list pages.
    if (returnFocus && toggle && panel.contains(document.activeElement)) {
      toggle.focus();
      // Focus would otherwise show the toggle's tooltip until the next blur.
      if (window.bootstrap && bootstrap.Tooltip) {
        var tip = bootstrap.Tooltip.getInstance(toggle);
        if (tip) tip.hide();
      }
    }
    panel.setAttribute('inert', '');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (isOpen) closePanel(true);
      else openPanel();
    });
  }

  close.addEventListener('click', function () {
    closePanel(true);
  });
  backdrop.addEventListener('click', function () {
    closePanel(true);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      closePanel(true);
      return;
    }
    if (e.key !== 'Tab') return;
    var items = panel.querySelectorAll('a[href], button:not([disabled])');
    if (items.length === 0) return;
    var first = items[0];
    var last = items[items.length - 1];
    var active = document.activeElement;
    // A click on empty panel space leaves focus outside `items`.
    var outside = !panel.contains(active);
    if (e.shiftKey && (active === first || outside)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (active === last || outside)) {
      e.preventDefault();
      first.focus();
    }
  });

  if (mode === 'posts') {
    var postLinks = panel.querySelectorAll('.toc-post-list a');
    postLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closePanel(false);
      });
    });

    var postPreviews = document.querySelectorAll('.post-preview');
    if (postPreviews.length === 0) {
      document.body.classList.add('toc-visible');
      return;
    }

    var activePostLink = null;

    // The panel lists every post, but the page shows one pager of previews,
    // so match previews to links by URL rather than by index.
    var linkByHref = {};
    postLinks.forEach(function (link) {
      linkByHref[link.pathname] = link;
    });

    function setActivePost(preview) {
      if (activePostLink) activePostLink.classList.remove('toc-active');
      var anchor = preview.querySelector('a[href]');
      var link = anchor ? linkByHref[anchor.pathname] : null;
      if (link) {
        link.classList.add('toc-active');
        activePostLink = link;
        link.scrollIntoView({ block: 'nearest', behavior: 'instant' });
      }
    }

    var postObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActivePost(entry.target);
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    postPreviews.forEach(function (el) {
      postObserver.observe(el);
    });
  } else {
    var tocLinks = panel.querySelectorAll('#TableOfContents a');
    tocLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closePanel(false);
      });
    });

    var headings = [];
    document.querySelectorAll('.blog-post h2, .blog-post h3, .blog-post h4, .blog-post h5, .blog-post h6').forEach(function (h) {
      if (h.id) headings.push(h);
    });

    if (headings.length === 0) {
      document.body.classList.add('toc-visible');
      return;
    }

    var activeLink = null;

    function setActive(id) {
      if (activeLink) activeLink.classList.remove('toc-active');
      var link = panel.querySelector('a[href="#' + CSS.escape(id) + '"]');
      if (link) {
        link.classList.add('toc-active');
        activeLink = link;
        link.scrollIntoView({ block: 'nearest', behavior: 'instant' });
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach(function (h) {
      observer.observe(h);
    });
  }

  document.body.classList.add('toc-visible');
})();
