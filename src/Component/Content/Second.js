import React from 'react'
import Footer from '../../Component/Content/Footer'
import {
    Link
  } from "react-router-dom";
import navimg from '../../Component/Images/navimg.svg'
import navimg1 from '../../Component/Images/navimg1.svg'
import navimg2 from '../../Component/Images/navimg2.svg'
import { useHistory } from "react-router-dom"


const Second = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  let history = useHistory();
    return (
        <div>
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
<marquee bgcolor="blue"style={{ color: 'white',fontSize:"150%", }}><b>Booking Service Available only on every Monday</b></marquee>

</div>
<div class="container"  >
    <div class="row">
<div class="col-12" align="center"  >
    <div class="p-3 mb-2 bg-danger text-white">
    <img src={navimg} alt="logo"  width="4%"/>
    
    <h1>Online Bike Service </h1>
    <img src={navimg} alt="logo"  width="4%"/>
   
    </div>
    
    
    
    </div></div>
<div class="container">
    <div class="row">
<div class="col-4">
<ul class="list-group">
  <li class="list-group-item bg-dark text-white" >
    <input class="form-check-input me-1 " type="checkbox" value="" aria-label="..."/>
    Complete General Service
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Brakes Check and Clean
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Engine Oil Change
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Clutch Play Adjustment
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Chain Lubrication and Adjustment
  </li>
</ul>

</div>
<div class="col-4">
<ul class="list-group">
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    First checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Second checkbox
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Third checkbox
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fourth checkbox
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fifth checkbox
  </li>
</ul>

</div>
<div class="col-4">
<ul class="list-group">
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Spark Plug Clean
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Electrical Wiring Check
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Exterior Foam Wash
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Water Wash
  </li>
  <li class="list-group-item bg-dark text-white">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Front and rear brake shoes Changing
  </li>
</ul>

</div>
</div>
</div>
        </div>
        <br></br>
        <div class="row">
            <div  class="col-2" align="right">
            <Link to ="/Second"><button type="submit" class="btn btn-info btn-lg">Edit  </button></Link> </div>
            <div  class="col-2" align="left">
            <Link to ="/Second"><button type="reset" class="btn btn-info btn-lg" onClick={refreshPage}>Reset</button></Link> </div>
            <div  class="col-4" align="center">
            <Link to ="/Third"><button type="submit" class="btn btn-warning btn-lg ">Sumbit  </button></Link> </div>
            <div  class="col-2" align="right">
            <Link to ="/Second"><button type="submit" class="btn btn-primary btn-lg">Delete  </button></Link> </div>
            <div  class="col-2" align="left">
            <Link to ="/Second"><button type="submit" class="btn btn-primary btn-lg " onClick={history.goBack}>Cancel </button></Link> </div> 
            </div>
            <Footer/>
        </div>
    )
}
export default Second










