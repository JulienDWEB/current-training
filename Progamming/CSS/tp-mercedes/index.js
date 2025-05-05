document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".gallery-page");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
  });

  prevBtn.addEventListener("click", () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
  });

  showPage(currentPage);
});
