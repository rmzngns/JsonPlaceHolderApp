const menuHtml=` <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="/page/index.html">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/page/index.html">Anasayfa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/page/article.html">Makaleler</a>
      </li>
    </ul>
  </div>
</div>
<!--Navbar Sonu-->
</nav>`


const menuDiv=document.getElementById("menu");
menuDiv.innerHTML=menuHtml;