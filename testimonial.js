(function () {
  const testimonials = [
    "“Saved us hundreds and handled all the group payments — so easy.”",
    "“Didn’t have to front the bill once. 10/10 experience.”",
    "“Booked our Mexico trip way under budget. Highly recommend.”",
    "“Made group travel painless — everything was taken care of.”"
  ];

  const ROTATE_MS = 10000; // 10 seconds
  const FADE_MS = 500;

  function mount() {
    if (document.getElementById("ff-testimonial-bar")) return;

    const bar = document.createElement("div");
    bar.id = "ff-testimonial-bar";
    bar.innerHTML = `
      <p id="ff-testimonial-text" class="ff-show">
        ${testimonials[0]}
        <a class="ff-testimonial-cta" href="quote.html">Plan my trip →</a>
      </p>
    `;

    document.body.appendChild(bar);

    // prevent bar covering content
    document.body.style.paddingBottom = "64px";

    let i = 1;
    const textEl = document.getElementById("ff-testimonial-text");

    setInterval(() => {
      textEl.classList.remove("ff-show");
      textEl.classList.add("ff-hide");

      setTimeout(() => {
        textEl.childNodes[0].textContent = testimonials[i] + " ";
        i = (i + 1) % testimonials.length;
        textEl.classList.remove("ff-hide");
        textEl.classList.add("ff-show");
      }, FADE_MS);
    }, ROTATE_MS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
