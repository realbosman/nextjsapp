import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles (required)




export default function Home() {
  return ( 
    
    

<div className="topContainer">
<div className="mainContainer">

        <div className=" header">
          <p className="gradients-button">Pitchable</p>
            <button className="gradient-button">Give us a call</button>
        </div>
        
        <div className="row expertStart">
            <div className="col-6  col-sm-12 expertStart1">
                 <div className="col expertStart11">
                    <p className="consulting">Expert Startup Consulting   </p>
                    
                 </div>
                 <div className="col expertStart12">
                    <p className="unlock">Unlock Your Funding Potential with Tailored 
                         Pitch Deck and Business Plan Services</p>
                         {/* <p className="unlock">
                         Pitch Deck and Business Plan</p>
                          */}
                 </div>
                 <button className="button">Give us a call</button>
            </div>
            <div className="col-6  col-sm-12 expertStart2">
                <Image 
                src="/numpic.png" 
                 alt="" 
                 className="img-fluid numImg"
                width={200}
                height={100}
                 
                />
            </div>
        </div>
       
        </div>

        <div className="another">
          {/* services */}
          <section className="serSce">

             
            <div className="services">
            <p className="seriveHeader ">Services</p>
            {/* <Image
            src="/side_img copy.png"
            alt=""
            width={50}
            height={50}
            className='picsz'
            /> */}
            </div>

         <div className="row services2">
      <div className="col-4 col-sm-12 services21">
          <div className="listheader">
            <Image
            src="/zeros1.png"
            alt=""
            width={50}
            height={50}
            className='pics'
            />
             <h4 className="first">PITCH DECK</h4>
              <Image
            src="/one1.png"
            alt=""
            width={70}
            height={70}
            /> 
            
          </div>
          <p className="serviceText">
                    Pitch deck services typically offer a rarnge of
                    services, including content creation, design, and
                    presentation coaching. Content creation involves
                    developinga compeling story that clearly
                    Communicates the problem that the business is
                    solving, the market opportunity, and the unique
                    value proposition.

                   </p>

                   <button className="buttonServices">Read more</button>
        </div>
        <div className="col-4 col-sm-12 services22">
        <div className="listheader">
        <Image
            src="/twos1.png"
            alt=""
            width={20}
            height={20}
            className='pics'
            />
          <h4 className="first">ADVISORY</h4>
          <Image
            src="/two.png"
            alt=""
            width={70}
            height={70}
            />
        </div>
        <p className="serviceText">
                    Pitch deck services typically offer a rarnge of
                    services, including content creation, design, and
                    presentation coaching. Content creation involves
                    developinga compeling story that clearly
                    Communicates the problem that the business is
                    solving, the market opportunity, and the unique
                    value proposition.
                    
                    </p>
                    <button className="buttonServices">Read more</button>
        </div>

       <div className="col-4 col-lg-4  services23">
        <div className="listheader">
        <Image
            src="/threes1.png"
            alt=""
            width={20}
            height={20}
            className='pics'
            />
       <h4 className='first'>BUSINESS PLAN</h4>
       <Image
            src="/three.png"
            alt=""
            width={70}
            height={70}
            />
        </div>

        <p className="serviceText">
                    Pitch deck services typically offer a rarnge of
                    services, including content creation, design, and
                    presentation coaching. Content creation involves
                    developinga compeling story that clearly
                    Communicates the problem that the business is
                    solving, the market opportunity, and the unique
                    value proposition.
                    
                    </p>
                    <button className="buttonServices">Read more</button>
       </div>
         </div>
         
          </section>

          <div className="Sponsor">
            <div className="sponsor1">
            <h1 className='text'>Our Corporate Sponsor</h1>
                <p className="spornsortext">
                   Pitch deck services typically offer a range of services,inlcuding
                   <br/>content creation,design, and presentation coaching.
                </p>

            </div>
            <div className="sponsor2">
              <div className="row sponsorIcons1">
              <div className="col-3 col-sm-12  fitcontent">

            <Image
            src="/1.png"
            alt=""
            width={150}
            height={70}
            className="sp_icon1"
            />
                </div>

                <div className="col-3 col-sm-12  fitcontent">

<Image
src="/2.png"
alt=""
width={300}
height={20}
className="sp_icon1"
/>
    </div>
    <div className="col-3 col-sm-12  fitcontent">

<Image
src="/3.png"
alt=""
width={70}
height={20}
className="sp_icon1"
/>
    </div>
    <div className="col-3 col-sm-12  fitcontent">

<Image
src="/4.png"
alt=""
width={70}
height={20}
className="sp_icon1"
/>
    </div>

              </div>

 <div className="row sponsorIcons2">
                <div className="col-3 col-sm-12  fitcontent">

            <Image
            src="/gapIcon.png"
            alt=""
            width={70}
            height={20}
            className="sp_icon1"
            />
                </div>

                <div className="col-3 col-sm-12  fitcontent">
                  

<Image
src="/5.png"
alt=""
width={200}
height={70}
className="sp_icon1"
/>
    </div>
    <div className="col-3 col-sm-12  fitcontent">

<Image
src="/6.png"
alt=""
width={200}
height={70}
className="image"
/>
    </div>
    <div className="col-3 col-sm-12  fitcontent">

<Image
src="/gapIcon.png"
alt=""
width={100}
height={70}
className="sp_icon1"
/>
    </div>

              </div>
            </div>

          </div>
{/* webuild */}

<section className="webuild_sec">
<Image
src="/left_img.png"
alt=""
width={70}
height={10}
className="left img-fluid"
/>

  <div className="weBuild">
 
  <div className="webuild1">
  <h1 className='text'>We Build it Fast & Right</h1>
   <p className="weBuildText">
  TLVTech was a refreshing change from other vendors as they were fully in sync with our results and vision for the <br/>
 future.Together we planned,executed and scaled our product.
                </p>

  </div>
  <div className="row weBuild2">
    <div className="col-4 col-sm-12 card1">
    <p id="para">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className="divlist">
      <Image
src="/c1.png"
alt=""
width={90}
height={90}
className='pp'

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras"> CEO of Omni Tech</p>
<Image
src="/star.png"
alt=""
width={100}
height={30}
className='star'

/>

      </div>


    </div>
    <div className="col-4 col-sm-12 card1 borderCard">
    <p id="para">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className="divlist">
      <Image
src="/c2.png"
alt=""
width={90}
height={90}
className='pp'

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras"> CEO of datasoft</p>
<Image
src="/star.png"
alt=""
width={100}
height={30}
className='star'

/>
      </div>
      

    </div>
    <div className="col-4 col-sm-12 card1 ">
    <p id="para">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className="divlist">
      <Image
src="/c3.png"
alt=""
width={90}
height={90}
className='pp'

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras"> CEO of datasoft</p>
<Image
src="/star.png"
alt=""
width={100}
height={30}
className='star'

/>
      </div>
      

    </div>

  </div>

  </div>
  <Image
src="/right_img.png"
alt=""
width={70}
height={10}
className="left img-fluid"
/>

</section>

{/* boot div */}
<div className="boost">
            <div className="headBoost">
                <h1 className='booost'>Looking to boost your <br /> R&D Lets Talk About it.</h1>
                
            </div>
            <div className="boostpara">
                <p className="parat">
                   TLVTech was a refreshing change from other vendors as they were fully in sync <br/>
                   with our results and for the future. Together we planned 
                </p>

                <button className="gradient-buttonz">Give us a call</button>
            </div>
        </div>
        </div>
        {/* get in touch */}
        
<section className=' zUpper'>
  <section  className=' backgroundImgDiv bg-image zz  itemZ'>
        <div className=" getInTouch">
            <h1 className='get'>Get in Touch</h1>
            <span>
            <Image
src="/getin_img.png"
alt=""
width={200}
height={30}
className="img"

/>
</span>
  <p  id="parax">93%   of   traffic  begins with a query. Even with a high number of <br/>
                searches being performed.</p>
</div>

{/* get in touch form */}
<div className="formGetInTouch">
<form action="submit">
              <span className='row'>
              <input className='names'type="text"  placeholder="Name"/>
              <input className='names' type="email"  placeholder="E-Mail"/>
              </span>

              <input type="text"  placeholder="" className='name'/>
              <button className="gradient-form-button">Send</button>
</form>
{/* foollow div */}
<div className="follow">
<h2 className='followme'>Follow Us On</h2>

<div className="iconsFooter_img">
  <div className="fooImg">
  {/* <Image
src="/i1.png"
alt="Twitter"
width={20}
height={20}

/> */}
<FontAwesomeIcon icon={faTwitter} size="2x" />

  </div>

  <div className="fooImg">
  {/* <Image
src="/i2.png"
alt="Twitter"
width={20}
height={20}
/> */}
<FontAwesomeIcon icon={faInstagram} size="2x"/>

  </div>

  <div className="fooImg">
  {/* <Image
src="/i3.png"
alt="Twitter"
width={40}
height={40}

/> */}
<FontAwesomeIcon icon={faFacebook} size="2x"/>


  </div>


</div>
<h3 className='sign'>Sign Up for Newsletter</h3>

</div>


<div className="input_plus_btn">

<input type="text" placeholder="Your Email Here" className="mail"/>
<Image
src="/arrow.jpg"
alt="Twitter"
width={40}
height={40}

/>

</div>
  </div>


  {/* footer */}

  <div className=" footerBottom">
            <ul className=" footerlst ">
                <li className="">About Us</li>
                <li className="">Disclaimer</li>
                <li className="">Privacy policy</li>
                <li className="">Affiliate policy</li>
            </ul>

           <div className="line">
            
           </div>
          </div>

          {/* copyright */}
          <div className="copyright">
            <ul className="footerlst">
                <li>Bangadesh Office Address:</li>
                <li>House #449,Road #31, New DOHS Mohakhali, Dhaka-1206</li>
               
            </ul>

            <p>copyright@blogsite</p>


          </div>
          </section>

       

       <div className="row bgg  itemZ">
        <div className="col-12 bgg1">
        
        <Image 
                src="/footerbgs.png" 
                 alt="" 
                
                 width={2000}
                 height={2000}
                 className="img-fluid "
                />
          
        
        </div>
       </div>

</section>










       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       </div>
      

);

}; 