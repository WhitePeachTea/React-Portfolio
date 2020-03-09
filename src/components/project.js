import React, { Component } from 'react';
import Nav from './nav.js';
import Footer from './foot.js';
import img1 from './img/Nounify.png';
import img2 from './img/buckeatlist.png';
import img3 from './img/team.png';
import img4 from './img/git.gif';
import img5 from './img/management.gif';
import img6 from './img/note.png';
import './grayscale.css';
import './grayscale.min.css';

export default class Project extends Component {
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
   <section id="projects" class="projects-section">
    
    <div class="container">
    <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
          <img class="img-fluid" src={img1} alt="Nounify"></img>
        </div>
        <div class="col-lg-6">
          <div class="bg-grey text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Nounify</h4>
                <h6><a href = 'https://ninjagirl2018.github.io/Nounify/'>Deploy on Github Page</a></h6>
                <p class="mb-0 text-white">Nounify is a simple application which will help parents read and visually enrich stories with their children.</p>
              </div>
            </div>
          </div>
        </div>
        </div>



      <div class="row justify-content-center no-gutters">
      <div class="col-lg-6"><img class="img-fluid" src={img2} alt=""></img></div> 
      <div class="col-lg-6 order-lg-first">
  <div class="bg-grey text-center h-100 project">
    <div class="d-flex h-100">
      <div class="project-text w-100 my-auto text-center text-lg-right">
        <h4 class="text-white">BuckEatList</h4>
        <h6><a href = "https://buckeatlist.herokuapp.com/">Deploy on Heroku</a></h6>
        <p class="mb-0 text-white">An application that allows the user to search and save different resturants that they want to try to their buckEATlist. Also the user is able to review and rate the resturants that they have tried in their "NOMs" list. The user is able to upload pictures from their resturant experience.</p>
      </div>
    </div>
  </div>
</div>
</div>


       <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
       <div class="col-lg-6">
       <img class="img-fluid" src={img3} alt="team"></img></div>
       <div class="col-lg-6">
          <div class="bg-grey text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Team Profile Generator</h4>
                <h6><a href = "https://github.com/WhitePeachTea/team-profile-update">More Info Here</a></h6>
                <p class="mb-0 text-white">This application will save information of team members and generate a chart to demonstrate the contact information and role in this team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div class="row justify-content-center no-gutters">
       <div class="col-lg-6">
          <img class="img-fluid" src={img4} alt=""></img></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-grey text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Github Profile Generator</h4>
                <h6><a href = "https://github.com/WhitePeachTea/Developer-Profile-Generator">More Info Here</a></h6>
                <p class="mb-0 text-white">This application uses inquirer and axios to request information from the input github page to generate a pdf/html profile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     


       <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
       <div class="col-lg-6">
          <img class="img-fluid" src={img5} alt=""></img> </div>
        <div class="col-lg-6">
          <div class="bg-grey text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Employee Management</h4>
                <h6><a href = "https://github.com/WhitePeachTea/Employee_Management">More Info Here</a></h6>
                <p class="mb-0 text-white">This application will save information of team members and generate a chart to demonstrate the contact information and role in this team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div class="row justify-content-center no-gutters">
          <div class="col-lg-6">
            <img class="img-fluid" src={img6} alt=""></img></div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-grey text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                  <h4 class="text-white">Note Taker</h4>
                  <h6><a href = "https://note-taker2123.herokuapp.com/">Play It On Heroku</a></h6>
                  <p class="mb-0 text-white">An application is designed to allow user create, save, and delete notes. This application uses express backend. It save and retrieve data from a JSON file.</p>
                </div>
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
            