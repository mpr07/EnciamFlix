<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EnciamFlix!</title>
  <link rel="icon" type="image/png" href="Imatges/enciamet.png" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="stylesheet" type="text/css" href="footer.css" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="https://kit.fontawesome.com/02232aa1a7.js" crossorigin="anonymous"></script>
</head>

<body class="menu-base">
  <nav class="navbar navbar-expand-lg fons-teal-400">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src="Imatges/enciamflix_logo.png" width="auto" height="50px"
          alt="logo de la companyia" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <a class="nav-link active" aria-current="page" href="anime.html">Anime</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="series.html">Series</a>
          </li>
          <li class="nav-item me-3 dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pel·lícules
            </a>
            <ul class="dropdown-menu fons-teal-200">
              <li>
                <a class="dropdown-item" href="pelis_anime.html">Pel·lícules Anime</a>
              </li>
              <li>
                <a class="dropdown-item" href="pelis_animacio.html">Pel·lícules Animació</a>
              </li>
              <li><a class="dropdown-item" href="pelis.html">Altres pelis</a></li>
            </ul>
          </li>
          <li class="nav-item me-3 dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Més
            </a>
            <ul class="dropdown-menu fons-teal-200">
              <li>
                <a class="dropdown-item" href="animacio.html">Animació</a>
              </li>
              <li>
                <a class="dropdown-item" href="agraiments.html">Agraïments</a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Cerca alguna cosa" aria-label="Search" />
          <button class="btn btn-success" type="submit">Cercar</button>
        </form>
      </div>
    </div>
  </nav>