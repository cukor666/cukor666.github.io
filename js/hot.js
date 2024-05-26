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
    title: "第二章：Svelte引入sass",
    desc: "Svelte是一款很棒的前端框架，它可以帮助我们快速开发应用，但是它有一个缺点就是它不支持sass，这就需要我们自己手动引入。",
    fileName: "/article/svelte项目引入sass.html",
  },
  {
    title: "第三章：Svelte引入svelte-spa-router",
    desc: "Svelte-spa-router是一款帮助我们快速开发单页面应用的路由器。本文将介绍如何在Svelte中引入svelte-spa-router。",
    fileName: "/article/svelte项目引入svelte-spa-router.html",
  },
  {
    title: "第四章：Svelte引入tailwindcss",
    desc: "Tailwindcss是一款CSS框架，它可以帮助我们快速开发Web应用。本文将介绍如何在Svelte中引入tailwindcss。",
    fileName: "/article/svelte项目引入tailwindcss.html",
  },
  {
    title: "第五章：Go引入Gin框架",
    desc: "Gin是一款Go语言的Web框架，它可以帮助我们快速开发Web应用。本文将介绍如何在Go中引入Gin框架。",
    fileName: "/article/Go引入Gin框架.html",
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
