import React, { Component } from 'react';
import Nav from './nav.js';
import Footer from './foot.js';
import { Link } from "react-router-dom"; 
export default class Front extends Component {
  render() {
    return (
        <main>
            <head>
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
            </head>
            <body>
        <header class="masthead">
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">Hello World</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">An Extant Member of The Subtribe Hominina Built This Page</h2>
        <Link to="/project" class="btn btn-primary js-scroll-trigger">My Projects</Link>
      </div>
    </div>
  </header>
  </body>
  <Footer/>
  </main>
    )
  }
}