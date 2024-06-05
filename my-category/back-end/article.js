// 文章基路径
const articleBasePath = "../../article";
var a = document.getElementById("articles");

// 定义文章标题和链接
var articlesInfo = [
  {
    title: "Go语言引入Gin框架",
    description: "Go语言引入Gin框架，实现RESTful API的开发。",
    fileName: "Go引入Gin框架.html",
  },
  {
    title: "Go标准库sort简单使用",
    description:
      "Go语言标准库sort是用于对数据集合进行排序的包，本文简单介绍了sort包的使用方法。",
    fileName: "Go标准库sort简单使用.html",
  },
  {
    title: "Go正则表达式",
    description: "Go语言的正则表达式简单介绍。",
    fileName: "Go正则表达式.html",
  },
  {
    title: "Go语言使用GORM连接SQLite数据库",
    description: "Go语言使用GORM连接SQLite数据库，实现增删改查操作。",
    fileName: "Go语言使用GORM连接SQLite.html",
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
