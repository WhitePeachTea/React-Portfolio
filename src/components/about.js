import React, { Component } from 'react';
import Nav from './nav.js';
import Footer from './foot.js';
import img1 from './img/me.jpg';


export default class About extends Component {
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
          <section id="about" class="about-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">About Me</h2>
            <p class="text-white-50">My name is Peng Lei. The character "Peng" in Chinese is the name of one legendary bird in Chinese mythology. Peng has been recorded in many ancient legends. Nowdays, it mostly associates with Buddhist culture. The image of Peng mixed with the legendary bird creature Garuda from Buddhist mythology when the religion was introduced into China.I studied History in University of Toronto. Why do people need to study history? For me, history could provide me a different angle to view the world.
            </p>
          </div>
        </div>
        <img src={img1} class="img-fluid" alt = ""></img>
      </div>
    </section>
  <Footer/>
        </body>
        </main>
        )
    }
}