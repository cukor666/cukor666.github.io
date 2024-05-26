import { getTags } from "./tag.js";

var container = document.querySelector(".container");

let s = 0;

let tags = getTags();

tags.forEach((element) => {
  s += element.value;
});

tags.forEach((element) => {
  let tag = document.createElement("div");
  tag.classList.add("tag");
  tag.innerHTML = element.name;
  tag.style.fontSize = `${(element.value / s) * 100 + 14}px`;
  container.appendChild(tag);
});
