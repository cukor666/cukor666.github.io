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
    title: "Dokcer安装MySQL",
    description: "这是一篇介绍如何在Docker容器中安装MySQL的文章。",
    fileName: "Docker安装MySQL.html",
  },
  {
    title: "Docker部署Go项目",
    description: "这是一篇介绍如何在Docker容器中部署Go项目的文章。",
    fileName: "Docker部署Go项目.html",
  },
  {
    title: "Windows终端关闭WSL不关机",
    description: "这是一篇介绍如何在Windows终端关闭WSL不关机的文章。",
    fileName: "Windows终端关闭WSL不关机.html",
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
