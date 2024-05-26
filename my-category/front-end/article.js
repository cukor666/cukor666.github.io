// 文章基路径
const articleBasePath = "../../article";
var a = document.getElementById("articles");

var articlesInfo = [
  {
    title: "svelte项目引入sass",
    description:
      "在svelte项目中引入sass，并使用变量、嵌套、混合等特性，提高代码的可维护性。",
    fileName: "svelte项目引入sass.html",
  },
  {
    title: "svelte项目引入svelte-spa-router",
    description:
      "在svelte项目中引入svelte-spa-router，实现前端路由功能，实现页面间的切换。",
    fileName: "svelte项目引入svelte-spa-router.html",
  },
  {
    title: "svelte项目引入tailwindcss",
    description:
      "在svelte项目中引入tailwindcss，并使用其提供的预设样式，快速实现页面的美化。",
    fileName: "svelte项目引入tailwindcss.html",
  },
  {
    title: "fetchAPI的基本使用",
    description: "学习fetchAPI的基本使用方法，并在项目中应用。",
    fileName: "fetchAPI的基本使用.html",
  },
  {
    title: "css隐藏滚动条",
    description: "使用CSS伪类隐藏浏览器滚动条。",
    fileName: "css隐藏滚动条.html",
  },
  {
    title: "Typescript简单学习",
    description: "学习Typescript的基本语法，并在项目中应用。",
    fileName: "Typescript简单学习.html",
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
