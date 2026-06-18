const forms = document.querySelectorAll("[data-static-form]");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = form.querySelector("[data-form-notice]");
    if (notice) {
      notice.hidden = false;
    }
  });
});
