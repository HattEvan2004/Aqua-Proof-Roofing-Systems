// Aqua-Proof Roofing Systems — light interactions

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after tapping a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* =========================================================
     Quote form
     ---------------------------------------------------------
     STEP 1: Create a free form at https://formspree.io
     STEP 2: Paste your endpoint below, e.g.
             var FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
     Until an endpoint is set, the form asks visitors to call
     902.441.4011 instead of silently failing.
     ========================================================= */
  var FORMSPREE_ENDPOINT = ""; // <-- paste your Formspree endpoint here

  var form = document.getElementById("quote-form");
  if (!form) { return; }

  var statusEl = document.getElementById("form-status");
  var submitBtn = form.querySelector(".form-submit");
  var submitLabel = form.querySelector(".submit-label");

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "form-status" + (type ? " " + type : "");
  }

  function validate() {
    var ok = true;
    var required = form.querySelectorAll("[required]");
    required.forEach(function (field) {
      var valid = field.checkValidity();
      field.classList.toggle("invalid", !valid);
      if (!valid && ok) { field.focus(); }
      if (!valid) { ok = false; }
    });
    return ok;
  }

  // Clear the invalid state as the visitor fixes a field
  form.addEventListener("input", function (e) {
    if (e.target.classList.contains("invalid") && e.target.checkValidity()) {
      e.target.classList.remove("invalid");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: if filled, silently treat as success (bot)
    if (form.querySelector('[name="_gotcha"]').value) {
      setStatus("Thanks! We'll be in touch shortly.", "ok");
      form.reset();
      return;
    }

    if (!validate()) {
      setStatus("Please fill in your name, phone, and a valid email.", "err");
      return;
    }

    // No endpoint configured yet — guide the visitor to call.
    if (!FORMSPREE_ENDPOINT) {
      setStatus("Thanks! Our online form is being set up — please call 902.441.4011 and we'll get you a quote right away.", "ok");
      return;
    }

    var data = new FormData(form);
    submitBtn.setAttribute("disabled", "disabled");
    submitLabel.textContent = "Sending…";
    setStatus("", "");

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          setStatus("Thanks! Your request has been sent — we'll be in touch soon.", "ok");
        } else {
          return res.json().then(function (d) {
            var msg = (d && d.errors && d.errors.length)
              ? d.errors.map(function (x) { return x.message; }).join(", ")
              : "Something went wrong. Please call 902.441.4011.";
            setStatus(msg, "err");
          });
        }
      })
      .catch(function () {
        setStatus("Couldn't send right now. Please call 902.441.4011 and we'll help you out.", "err");
      })
      .finally(function () {
        submitBtn.removeAttribute("disabled");
        submitLabel.textContent = "Request My Free Quote";
      });
  });
})();
