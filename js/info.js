/*
  <div class="info">
    <h2 class="about"><a href="/about.html">关于我</a></h2>
    <div class="info-item">
      <label>姓名：</label>
      <span>Cukor</span>
      <label>年龄：</label>
      <span>21</span>
      <label>专业：</label>
      <span>信息与计算科学</span>
      <label>擅长：</label>
      <span>Go、HTML、CSS、JavaScript、Java、C++、Vue等</span>
    </div>
  </div>
*/

var info = document.querySelector(".info");
var about = document.createElement("h2");
about.classList.add("about");
about.innerHTML = '<a href="/about.html">关于我</a>';
info.appendChild(about);

var infoItem = document.createElement("div");
infoItem.classList.add("info-item");

var autor = {
  name: { lab: "姓名：", val: "Cukor" },
  age: { lab: "年龄：", val: "21" },
  profession: { lab: "专业：", val: "信息与计算科学" },
  skill: { lab: "擅长：", val: "Go、HTML、CSS、JavaScript、Java、C++、Vue等" },
};

for (var key in autor) {
  var k = document.createElement("label");
  k.innerText = autor[key].lab;
  var v = document.createElement("span");
  v.innerText = autor[key].val;

  infoItem.appendChild(k);
  infoItem.appendChild(v);
}

info.appendChild(infoItem);