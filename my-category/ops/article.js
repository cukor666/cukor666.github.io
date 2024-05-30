// 文章基路径
const articleBasePath = "../../article";
var a = document.getElementById("articles");

// 定义文章标题和链接
var articlesInfo = [
  {
    title: "Docker安装Nginx",
    description: "这是一篇介绍如何在Docker容器中安装Nginx的文章。",
    fileName: "docker安装nginx.html",
  },
  {
    title: "Nginx解决跨域问题",
    description: "这是一篇介绍如何解决Nginx跨域问题的文章。",
    fileName: "Nginx解决跨域问题.html",
  },
  {
    title: "更多文章...",
    description: "更多精彩内容，敬请期待。",
    fileName: "",
  },
];

articlesInfo.forEach((element) => {
  var newDiv = document.createElement("div");
  newDiv.classList.add("article");
  newDiv.innerHTML = `
          <h2>${element.title}</h2>
          <p>${element.description}</p>
        `;
  newDiv.addEventListener("click", function () {
    location.href = `${articleBasePath}/${element.fileName}`;
  });
  a.appendChild(newDiv);
});
