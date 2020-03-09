import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

export default class Nav extends Component {
    render(){
        return(
            <div>
             <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link href="css/grayscale.min.css" rel="stylesheet"/>
      <link href="css/grayscale.css" rel="stylesheet"/>
      <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
             <Link to="/" class="navbar-brand js-scroll-trigger">Peng Lei</Link>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link to="/about" class="nav-link js-scroll-trigger">About</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/project" class="nav-link js-scroll-trigger">Projects</Link>
                  </li>
                  <li class="nav-item">
                   <Link to="/contact" class="nav-link js-scroll-trigger">Contact</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/img/PengLei.pdf" class="nav-link js-scroll-trigger" target="_blank" download>Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
     )
    }
}