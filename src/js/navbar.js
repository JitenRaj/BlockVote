let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">
  <img src="./img/eci.png" width="150px" loading="lazy"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="/"><b>Home </b><span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./how-it-works.html"><b>How it Works</b></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./vote.html"><b>Cast Vote</b></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./blockvote-card.html"><b>My BlockVote Card</b></a>
    </li>

  </ul>
</div>
</nav>`
