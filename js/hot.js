var article = document.querySelector(".article");

/*
    <!-- <h2 class="article-title">置顶文章</h2>
*/
var title = document.createElement("h2");
title.classList.add("article-title");
title.textContent = "置顶文章";

article.appendChild(title);

const hotArticles = [
  {
    title: "第一章：HelloWord",
    desc: "这是第一篇文章，欢迎来到我的博客，这里将分享一些关于我的学习经历和生活感悟。",
    fileName: "/article/helloword.html",
  },
  {
    title: "第二章：Go引入Gin框架",
    desc: "Go是一门开源的编程语言，它可以帮助我们快速开发Web应用。本文将介绍如何在Go中引入Gin框架。",
    fileName: "/article/Go引入Gin框架.html",
  },
  {
    title: "第三章：Nginx解决跨域问题",
    desc: "Nginx是一款开源的Web服务器，它可以帮助我们解决跨域问题。本文将介绍如何在Nginx中配置跨域。",
    fileName: "/article/Nginx解决跨域问题.html",
  },
  {
    title: "第四章：Svelte引入tailwindcss",
    desc: "Tailwindcss是一款CSS框架，它可以帮助我们快速开发Web应用。本文将介绍如何在Svelte中引入tailwindcss。",
    fileName: "/article/svelte项目引入tailwindcss.html",
  },
  {
    title: "第五章：希尔排序（Go语言实现）",
    desc: "希尔排序是一种排序算法，它的时间复杂度为O(n^1.5)。本文将介绍如何在Go语言中实现希尔排序。",
    fileName: "/article/希尔排序（Go语言实现）.html",
  },
  {
    title: "第六章：fetchAPI的基本使用",
    desc: "fetchAPI是一款用于在浏览器和服务器之间传输数据的API。本文将介绍如何使用fetchAPI。",
    fileName: "/article/fetchAPI的基本使用.html",
  },
];

hotArticles.forEach((item) => {
  /*
    <div class="article-item">
        <a href="/article/Go引入Gin框架.html">
          <h3 class="article-title">第五章：Go引入Gin框架</h3>
          <p class="article-desc">
            Gin是一款Go语言的Web框架，它可以帮助我们快速开发Web应用。本文将介绍如何在Go中引入Gin框架。
          </p>
        </a>
    </div>
    */
  var articleItem = document.createElement("div");
  articleItem.classList.add("article-item");
  var articleLink = document.createElement("a");
  articleLink.href = item.fileName;
  var articleTitle = document.createElement("h3");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = item.title;
  var articleDesc = document.createElement("p");
  articleDesc.classList.add("article-desc");
  articleDesc.textContent = item.desc;
  articleLink.appendChild(articleTitle);
  articleLink.appendChild(articleDesc);
  articleItem.appendChild(articleLink);
  article.appendChild(articleItem);
});
