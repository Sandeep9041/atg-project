import {MdGroupAdd} from "react-icons/md"
import {IoMdArrowDropdown} from "react-icons/io"
import {SlLocationPin} from "react-icons/sl"
import {FaPen} from "react-icons/fa"
import {BiErrorCircle} from "react-icons/bi"
import {AiOutlineArrowLeft} from "react-icons/ai"


import "./home.css"
import "../Posts/post.css"
import Posts from "../Posts/post"
const Home =()=>{
    return (
        <div className="w-100">
            <div className="home-image-bg p-lg-5  d-flex flex-column justify-content-between justify-content-lg-end">
                <div className="d-flex mt-4 px-5 justify-content-between d-lg-none">
                    <AiOutlineArrowLeft style={{color:"white",fontSize:"24px"}}/>
                    <button type="button" className="btn btn-transparent fonts" style={{color:"white",border:"1px solid white",fontSize:"13px",fontWeight:"bold"}} data-bs-toggle="modal" data-bs-target="#a">
                        Join Group
                    </button>
                    <div className="modal fade" id="a" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                <div style={{backgroundColor:"#ffffff",borderRadius:"15px",paddingBottom:"25px"}}>
                    <div className="mt-3 d-flex justify-content-between px-5">
                        <h2 className="fonts name"  style={{fontSize:"23px",fontWeight:"600"}} >Create Account</h2>
                        <button type="button" style={{fontSize:"13px",marginTop:"17px",borderRadius:"100%"}} className="btn-close"  data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>                                    
                <div className="mt-3">
                    <div style={{width:"100%"}} className="form-box">
                    <div>
                        <div className="inputs-box-names" style={{width:"100%"}}><input className="inputs-name" type="text" placeholder="First Name" />
                        <input className="inputs-name"  type="text" placeholder="Last Name" /></div>
                        <div className="inputs-box" style={{width:"100%"}}><input className="inputs" type="email" placeholder="Email" /></div>
                        <div className="inputs-box" style={{width:"100%"}}><input className="inputs" type="password" placeholder="Password" /></div>
                        <div className="inputs-box" style={{width:"100%"}}><input className="inputs" type="password" placeholder="Confirm Password"/></div>
                        <div className="d-flex justify-content-between">
                        <button  className="create-account-btn" style={{width:"35%"}}>Create Account</button>
                        <button className="" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#b" style={{fontSize:"13px",textDecoration:"underline",color:"#495057",fontWeight:"600",border:"0px",backgroundColor:"transparent"}}>or, Sign In</button>
                        </div>
                    </div>
                        <div className="sing-in-btn-box">
                            <button type="submit" style={{width:"100%"}} className="sign-in-link-btn">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                            alt=""   style={{height:"17px",width:"17px",marginRight:"7px"}}/>
                            Sign Up with Facebook</button>
                            <button type="submit" style={{width:"100%"}} className="sign-in-link-btn">
                            <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" style={{height:"15px",width:"15px",marginRight:"7px"}}
                            />
                            Sign Up with Google</button>
                        </div>
                    </div>
                    <p style={{fontSize:"11px",opacity:"0.7",textAlign:"center",width:"100%"}} className="fonts">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div> 
                </div>  
                </div>
                </div>

            <div className="modal fade" id="b" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                <div style={{backgroundColor:"#ffffff",borderRadius:"15px",paddingBottom:"25px"}}>
                    <div className="mt-3 d-flex justify-content-between px-5">
                    <h2 className="fonts name"  style={{fontSize:"23px",fontWeight:"600"}} >Welcome back!</h2>
                    <button type="button" style={{fontSize:"13px",marginTop:"17px",borderRadius:"100%"}} className="btn-close"  data-bs-dismiss="modal" aria-label="Close" ></button>
                    
                    </div>                                    

                <div className="mt-3">
                    <div style={{width:"100%"}} className="form-box">
                    <div>
                      
                        <div className="inputs-box" style={{width:"100%"}}><input className="inputs" type="email" placeholder="Email" /></div>
                        <div className="inputs-box" style={{width:"100%"}}><input className="inputs" type="password" placeholder="Password" /></div>
                        <div className="d-flex justify-content-between">
                        <button  className="create-account-btn" style={{width:"35%"}}>Sign In</button>
                        <button className="" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#a" style={{fontSize:"13px",textDecoration:"underline",color:"#495057",fontWeight:"600",border:"0px",backgroundColor:"transparent"}}>or, Create Account</button>
                        </div>
                    </div>
                    <div className="sing-in-btn-box">
                    <button type="submit" style={{width:"100%"}} className="sign-in-link-btn">
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                        alt=""   style={{height:"17px",width:"17px",marginRight:"7px"}}/>
                        Sign Up with Facebook</button>
                    <button type="submit" style={{width:"100%"}} className="sign-in-link-btn">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" style={{height:"15px",width:"15px",marginRight:"7px"}}
                        />
                        Sign Up with Google</button>
                    </div>
                    </div>
                    
                    <p style={{marginTop:"11px",fontSize:"13px",opacity:"0.7",textAlign:"center",width:"100%"}} className="fonts">Forget Password?</p>
                </div>
                </div> 
            </div>  
                            </div>
                            </div>
              
                </div>
                <div className="home-image-content d-flex flex-column">
                    <h2 className="fw-bold sm">Computer Engineering</h2>
                    <p className="text">142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className="w-100 home-content-margin">
                <div className="home-content-width mx-auto" >
                    <div className="w-100 mx-auto bordering align-center justify-content-between d-none d-lg-flex">
                     <ul className="d-flex justify-content-between my-2">
                        <li style={{opacity:"1",color:"#000000",fontWeight:"600"}} title="Posts">All Posts(32)</li>
                        <li>Articles</li>
                        <li>Events</li>
                        <li>Education</li>
                        <li>Job</li>
                     </ul>
                     <div className="d-flex mb-2">
                     <button type="button" className="button one" >Write a Post<IoMdArrowDropdown style={{marginLeft:"11px",fontWeight:"bold"}}/></button>
                     <button type="button" className="button two"><MdGroupAdd style={{marginRight:"11px",fontSize:"21px",marginBottom:"5px"}}/>Join Group</button>
                     </div>
                     </div> 
                     <div className="d-flex d-lg-none justify-content-between mt-0 px-4">
                        <p className="fonts mt-3" style={{color:"#000000",fontWeight:"bold",fontSize:"15px"}}>Posts(368)</p>
                        <div class="btn-group dropstart">
  <button type="button" className="btn btn-transparent mb-0 border border-0 fonts" style={{color:"#000000",fontWeight:"bold",fontSize:"15px"}} data-bs-toggle="dropdown" aria-expanded="false">
  Filter: All<IoMdArrowDropdown style={{fontSize:"21px",marginBottom:"0px"}} />
  </button>
  <ul class="dropdown-menu">
  <li><button className="dropdown-item">Article</button></li>
          <li><button className="dropdown-item">Events</button></li>
          <li><button className="dropdown-item">Education</button></li>
          <li><button className="dropdown-item">Job</button></li>
  </ul>
</div>
                        
             
                     </div>
                     <div className="mt-lg-5 mt-2 d-flex justify-content-between">
                        <div className="d-flex home-post" style={{borderRadius:"7px"}}>
                            <Posts/>
                        </div>
                        <div  style={{width:"25%"}} className="d-none d-lg-flex flex-column">
                        <div  className="d-flex  justify-content-between" style={{marginBottom:"0px"}} >
                        <div  className="d-flex">
                            <SlLocationPin style={{fontSize:"15px",marginRight:"5px",marginTop:"4px"}}/> 
                            <p className="fonts" style={{fontSize:"15px",fontWeight:"bold"}} >Noida, India</p>
                        </div>
                        <FaPen />
                        </div>
                        <hr  style={{marginTop:"0px"}} />
                        <div className="d-flex">
                            <BiErrorCircle  style={{fontSize:"25px",opacity:"0.7",marginRight:"4px",marginTop:"-2px"}}/>
                            <p className="fonts" style={{fontSize:"13px",opacity:"0.7"}}>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}
export default Home;