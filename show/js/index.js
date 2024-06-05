/*
<div class="card">
    <h1 class="title">HTML+CSS+JavaScript实现分页效果</h1>
    <p>使用原生HTML+CSS+JavaScript来实现分页效果</p>
    <a href="./project/Pagination/index.html" target="_blank" rel="noopener noreferrer">查看效果</a>
    <a href="https://github.com/cukor666/hcj-pagination" target="_blank" rel="noopener noreferrer">查看源码</a>
</div>
*/

var container = document.querySelector(".container");

var items = [
  {
    title: "HTML+CSS+JavaScript实现分页效果",
    desc: "使用原生HTML+CSS+JavaScript来实现分页效果",
    link: "./project/Pagination/index.html",
    source: "https://github.com/cukor666/hcj-pagination",
  },
  {
    title: "JavaScript实现轮播图效果",
    desc: "使用原生JavaScript来实现轮播图效果",
    link: "#",
    source: "#",
  },
  {
    title: "JavaScript实现表单验证效果",
    desc: "使用原生JavaScript来实现表单验证效果",
    link: "#",
    source: "#",
  },
];

items.forEach(function (item) {
  var card = document.createElement("div");
  card.classList.add("card");

  var title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = item.title;

  var p = document.createElement("p");
  p.textContent = item.desc;

  var a1 = document.createElement("a");
  a1.href = item.link;
  a1.target = "_blank";
  a1.rel = "noopener noreferrer";
  a1.textContent = "查看效果";

  var a2 = document.createElement("a");
  a2.href = item.source;
  a2.target = "_blank";
  a2.rel = "noopener noreferrer";
  a2.textContent = "查看源码";

  card.appendChild(title);
  card.appendChild(p);
  card.appendChild(a1);
  card.appendChild(a2);

  container.appendChild(card);
});
