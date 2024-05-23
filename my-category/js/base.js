const articlesPerPage = 3;
const articles = document.querySelectorAll(".article");
const totalPages = Math.ceil(articles.length / articlesPerPage);
const pagination = document.getElementById("pagination");

function showPage(page) {
  articles.forEach((article, index) => {
    article.style.display = "none";
    if (
      index >= (page - 1) * articlesPerPage &&
      index < page * articlesPerPage
    ) {
      article.style.display = "block";
    }
  });
  updatePagination(page);
}

function updatePagination(page) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("page-button");
    if (i === page) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      showPage(i);
    });
    pagination.appendChild(button);
  }
}

showPage(1);
