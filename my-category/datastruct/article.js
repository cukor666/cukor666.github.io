// 文章基路径
const articleBasePath = "../../article";
var a = document.getElementById("articles");

// 定义文章标题和链接
var articlesInfo = [
  {
    title: "冒泡排序（Go语言实现）",
    description: "Go语言实现冒泡排序",
    fileName: "冒泡排序（Go语言实现）.html",
  },
  {
    title: "选择排序（Go语言实现）",
    description: "Go语言实现选择排序",
    fileName: "选择排序（Go语言实现）.html",
  },
  {
    title: "插入排序（Go语言实现）",
    description: "Go语言实现插入排序",
    fileName: "插入排序（Go语言实现）.html",
  },
  {
    title: "希尔排序（Go语言实现）",
    description: "Go语言实现希尔排序",
    fileName: "希尔排序（Go语言实现）.html",
  },
  {
    title: "归并排序（Go语言实现）",
    description: "Go语言实现归并排序",
    fileName: "归并排序（Go语言实现）.html",
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
