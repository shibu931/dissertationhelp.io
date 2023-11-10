import React from 'react'

export default function Navbar() {
  return (
    <header>
    <nav class="navbar navbar-expand-lg px-lg-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./assets/img/dissertationhelp-logo.svg" width="150px" alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-column" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb- mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="me-1"><i class="fa-solid fa-book"></i></span>Study Material
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Tutoring</a></li>
                  <li><a class="dropdown-item" href="#">Writing</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"> <span class="me-1"><i class="fa-solid fa-user"></i></span>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><span class="me-1"><i class="fa-solid fa-blog"></i></span>Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><span class="me-1"><i class="fa-solid fa-dollar-sign"></i></span>Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><span class="me-1"><i class="fa-solid fa-tag"></i></span>Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><span class="me-1"><i class="fa-solid fa-headphones"></i></span>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</header>
  )
}
