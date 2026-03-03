document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll(".reveal");

  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
  });

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Smooth Scroll Offset Adjustment (for the sticky nav)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Dynamic Grain Effect (optional aesthetic)
  const addGrain = () => {
    const grain = document.createElement("div");
    grain.style.position = "fixed";
    grain.style.top = "0";
    grain.style.left = "0";
    grain.style.width = "100%";
    grain.style.height = "100%";
    grain.style.pointerEvents = "none";
    grain.style.zIndex = "9999";
    grain.style.opacity = "0.02";
    grain.style.background =
      'url("https://grainy-gradients.vercel.app/noise.svg")';
    document.body.appendChild(grain);
  };

  // addGrain(); // Uncomment to add subtle noise texture
});
