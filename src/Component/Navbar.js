import React from 'react'
import bike1 from '../Component/Images/bike1.jpg'
import bike2 from '../Component/Images/bike2.jpg'
import bike3 from '../Component/Images/bike3.jpg'
import bike4 from '../Component/Images/bike4.jpg'
import bike5 from '../Component/Images/bike5.jpg'
import bike6 from '../Component/Images/bike6.jpg'
import navimg from '../Component/Images/navimg.svg'
import navimg1 from '../Component/Images/navimg1.svg'
import navimg2 from '../Component/Images/navimg2.svg'
import {
  Link
} from "react-router-dom";



const Navbar = () => {  

  return (

<div>
  <nav class="navbar fixed navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" ><h1><b>Multi Gear Bike</b><sub> & Sport Inc</sub></h1> </span> 
  
    <img src={navimg} alt="logo"  width="4%"/>
    <img src={navimg1} alt="logo"  width="4%"/>
    <img src={navimg2} alt="logo"  width="4%"/>

    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-info" type="submit" color="white">Search</button>
    </form>
  </div>
  
</nav>
<div class="row">
<div class="col-8">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"class="border border-dark bg-secondary" >
  <div class="carousel-inner p-3">
    <div class="carousel-item active">
    <img src={bike1} class="d-block w-100 " alt="Service Center"/>
    </div>
    <div class="carousel-item">
      <img src={bike2} class="d-block w-100" alt="Service Center"/>
    </div>
    <div class="carousel-item">
      <img src={bike3}class="d-block w-100" alt="Service Center"/>
    </div>
    <div class="carousel-item">
      <img src={bike4}class="d-block w-100" alt="Service Center"/>
    </div>
    <div class="carousel-item">
      <img src={bike5}class="d-block w-100" alt="Service Center"/>
    </div>
    <div class="carousel-item">
      <img src={bike6}class="d-block w-100" alt="Service Center"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
  </div>
  
  </div>
  <div class="col-4" align="center">
    <div><h1 align ="center" color="Red" class="text-danger">Book a Service</h1></div>
  <div><br></br></div>
  <div><br></br></div>

  <div><br></br></div>

  <form>
  <div class="mb-3" align="left">
    <label for="exampleInputEmail1" class="form-label" class="text-primary">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" class="text-warning">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3" align="left">
    <label for="exampleInputPassword1" class="form-label" class="text-primary">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3"align="left">
    <label for="exampleInputPhonenumber" class="form-label" class="text-primary">Mobile Number</label>
    <input type="text" class="form-control" id="exampleInputPhonenumber"/>
  </div>
  <div class="mb-3 form-check" align="left">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" class="text-secondary">Receive real-time Services Updates</label>
  </div>
  <Link to ="/second"><button type="submit" class="btn btn-primary btn-lg"> Book Now </button></Link>
</form>
<br></br>

    <img src={navimg2} alt="logo"  width="30%"/>
  </div>

  
  </div>
</div>
  
    )
  
}

export default Navbar






















