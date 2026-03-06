const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.length > 1) {
      const targetEl = document.getElementById(href.slice(1));
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
  }
});

const form = document.getElementById('appointment-form');
const formMsg = document.getElementById('form-msg');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.classList.remove('hidden');
    formMsg.textContent = "Your appointment request has been noted. We'll call to confirm.";
    setTimeout(()=>formMsg.classList.add('hidden'), 3400);
    form.reset();
  });
}

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  let lazyImageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src || img.src;
        lazyImageObserver.unobserve(img);
      }
    });
  }, { threshold: 0.15 });
  lazyImages.forEach(function(img) {
    lazyImageObserver.observe(img);
  });
}


let lastScrollY = window.scrollY;
const floatBtnCall = document.querySelector('.float-btn-call');
const floatBtnWa = document.querySelector('.float-btn-wa');
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 64) {
    floatBtnCall.style.opacity = "0.6";
    floatBtnWa.style.opacity = "0.6";
  } else {
    floatBtnCall.style.opacity = "1";
    floatBtnWa.style.opacity = "1";
  }
  lastScrollY = window.scrollY;
});


import "https://cdn.jsdelivr.net/npm/gsap@3.12.4/dist/gsap.min.js";
window.gsap && window.gsap.utils.toArray(".service-card,.why-card,.gallery-img,.review-card").forEach(el => {
  window.gsap.from(el, { opacity: 0, y: 20, duration: 1, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" } });
});


document.addEventListener("DOMContentLoaded", function() {
  const reviewSchema = {
    "@context": "http://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "Dentist", "name": "Vedanta Dental Clinic" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Rajesh Sati" },
    "reviewBody": "Great experience with dental implant treatment."
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(reviewSchema);
  document.head.appendChild(script);
});
