/* Menu unique du site : une seule source pour toutes les pages.
   Chaque page l'appelle avec <script src="…/assets/scripts/menu.js" data-active="home|createurs|image-totale|catalogue|mentions"></script> */
(function () {
  var s = document.currentScript;
  var root = s.src.replace(/assets\/scripts\/menu\.js.*$/, "");
  var active = s.getAttribute("data-active") || "";
  var html = `<div class="menu">
<button class="menu_close" type="button">
<svg fill="none" height="24" width="23" xmlns="http://www.w3.org/2000/svg">
<path d="m2.1 2 19 21" stroke="#000" stroke-width="3"></path>
<path d="M21 2 1.7 22.9" stroke="#000" stroke-width="3"></path>
</svg>
</button>
<div class="menu_inner">
<nav class="menu_main">
<ul>
<li>
<a data-transition-bg="#A70151" href="{{root}}index.html">Accueil</a>
</li>
<li>
<a data-transition-bg="#000000" href="{{root}}createurs-annabelle-mauger-julien-baron/index.html">Les <strong>Créateurs</strong></a>
</li>
<li>
<a data-transition-bg="#2A827C" href="{{root}}image-totale/index.html"><strong>Image</strong> Totale<sup>©</sup></a>
</li>
<li>
<span>Le <strong>Catalogue</strong></span>
<ul>

<li><a data-transition-bg="#A70151" href="{{root}}exposition-immersive/imagine-van-gogh/index.html">Imagine Van Gogh</a></li>
<li><a data-transition-bg="#A70151" href="{{root}}exposition-immersive/imagine-monet/index.html">Imagine Monet</a></li>
<li><a data-transition-bg="#A70151" href="{{root}}exposition-immersive/imagine-da-vinci/index.html">Imagine Da Vinci</a></li>
</ul>
</li>
</ul>
</nav>
<aside class="menu_second">

<ul class="menu_credits">
<li>
                    lililillilil<br/>
<a data-prepend="business">@lililillilil.com</a><br/>
                    +33 6 52 40 13 53
                </li>
<li>
                    31D rue du Bourbonnais<br/>
                    69009 Lyon<br/>
                    France
                </li>
<li>
<a data-transition-bg="#FFFFFF" href="{{root}}mentions-legales/index.html">mentions légales</a><br/>
                    © lililillilil 2022<br/>
                    Design de  <a class="type8_open" href="https://type8studio.netlify.app/">type8 studio</a>
</li>
</ul>
<nav class="menu_rs">
<a href="https://www.linkedin.com/company/lililillilil">LinkedIn</a>
</nav>
</aside>
</div>
</div>`;
  var marks = {
    "home": 'href="{{root}}index.html"',
    "createurs": 'href="{{root}}createurs-annabelle-mauger-julien-baron/index.html"',
    "image-totale": 'href="{{root}}image-totale/index.html"',
    "catalogue": "<span>Le <strong>Catalogue</strong></span>"
  };
  if (marks[active]) {
    var i = html.indexOf(marks[active]);
    var j = html.lastIndexOf("<li>", i);
    if (i > -1 && j > -1) html = html.slice(0, j) + '<li class="active">' + html.slice(j + 4);
  }
  document.write(html.split("{{root}}").join(root));
})();
