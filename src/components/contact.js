import React, { Component } from 'react';
import Nav from './nav.js';
import Footer from './foot.js';
import { Link } from "react-router-dom"; 



export default class Contact extends Component {
    render(){
        return(
            <main>
            <header>
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
          <Nav/>      
            </header>
            <body>
    <section id="signup" class="signup-section">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <h2 class="text-white mb-5">Subscribe to not receive any updates about my life!</h2>
          <form class="form-inline d-flex">
            <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..."/>
            <button type="submit" class="btn btn-primary mx-auto">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    </section>
                <section class="contact-section bg-black">
                        <div class="container">
                         <div class="row">
                   <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
        <div class="card-body text-center">
            <i class="fab fa-github"></i>
              <h4 class="text-uppercase m-0">Github</h4>
              <hr class="my-4"></hr>
              <a href="https://github.com/WhitePeachTea">The manual on how to damage my brain.</a>
            </div>
        </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Resume</h4>
              <hr class="my-4"></hr>
              <Link to="/img/PengLei.pdf" class="nav-link js-scroll-trigger" target="_blank" download>Resume Downdload</Link>
            </div>
          </div>
        </div>


        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fa fa-linkedin"></i>
              <h4 class="text-uppercase m-0">Linkedin</h4>
              <hr class="my-4"></hr>
              <a href=" https://www.linkedin.com/in/peng-lei-550956196/">Nothing to see here!</a>
            </div>
          </div>
        </div>
              </div>
            </div>
            </section>
            <Footer/>
        </body>
        </main>
        )
    }
}