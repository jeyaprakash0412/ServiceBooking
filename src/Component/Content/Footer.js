import React from 'react'
import youtube from '../../Component/Images/youtube.svg'
import twitter from '../../Component/Images/twitter.svg'
import facebooksvg from '../../Component/Images/facebook.svg'
import instasvg from '../../Component/Images/insta.svg'
import telegram from '../../Component/Images/telegram.svg'
import gmail from '../../Component/Images/gmail.svg'
import whatsapp from '../../Component/Images/whatsapp.svg'
import linkedin from '../../Component/Images/linkedin.svg'


const Footers = () => {
    return (
        <div>
            <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
            <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="text-light">More in Motorists</div><br></br>
            <div>
           Inside our Station
            </div>
              <div>
            Offers and Competitions
              </div>
              <div>
            Shell Fuel
              </div>

          </div>
          <div class="col-2">
            <div class="text-light">Mortoring tips and advice</div><br></br>
            <div>
           Shell Engine oil & Lubricants
            </div>
              <div>
        Shell CashCard
              </div>
              

          </div>
          <div class="col-2">
            <div class="text-light">Motor Sports</div><br></br>
            <div>
        Project and Sites
            </div>
              <div>
        Careers
              </div>
              <div>
        Take Care of Your Bike
              </div>
              

          </div>
          <div class="col-2">
            <div class="text-light">More about Shell</div><br></br>
            <div>
            Who we are
            </div>
              <div>
            What we do
              </div>
             
              <div>
            Media
              </div>
             
          </div>
          <div class="col-2">
            <div class="text-light">Can we help?</div><br></br>
            <div>
            contact us
            </div>
              <div>
            Job Search for professional</div>
              <div>
            Petrol Pump near me
              </div>
           

          </div>
          <div class="col-2 d-flex flex-row" align="right">
            <div>
           <div class="mr-5 mb-3">
           <a href="https://www.facebook.com/" target="_blank">  <img src={facebooksvg} alt="facebookicone" width="80%"/></a></div>
            <div class="mr-5">
            <a href="https://www.instagram.com/" target="_blank"> <img src={instasvg} alt="instaicone" width="80%"/></a>
          </div></div>
          <div>
          <div class="mr-5 mb-3">
          <a href="https://www.youtube.com/" target="_blank"> <img src={youtube} alt="youtubeicone" width="80%"/></a></div>
            <div class="mr-5">
            <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">  <img src={twitter} alt="twittericone" width="80%"/></a>
          </div>
          </div>
          <div>


          <div class="mr-5 mb-3">
           <a href="https://www.linkedin.com/feed/" target="_blank"><img src={linkedin} alt="linkedinicone" width="65%"  onClick={linkedin} /></a></div>
            <div class="mr-5">
            <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank">  <img src={gmail} alt="gmailicone" width="65%"/></a>
          </div>
          <div>
            
          </div>
          
          </div>
          
          <div>
           <div class="mr-5 mb-3">
           <a href="https://telegram.org/" target="_blank"> <img src={telegram} alt="telegramicone" width="80%"/></a></div>
            <div class="mr-5">
            <a href="https://www.whatsapp.com/" target="_blank"><img src={whatsapp} alt="whatsappicone" width="80%"/></a>
          </div></div>
          
          

          
          
          </div>
         </div>
        <hr></hr>
        <div class="col-lg-12" align="center">Copyright © 2008 - 2021 Company Name.All Rights Reserved</div>
       </div>
       
        
            </footer>
    
       
        </div>
    )
}

export default Footers






















