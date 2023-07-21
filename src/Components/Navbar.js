import { BsSearch} from "react-icons/bs"
import {IoMdArrowDropdown} from "react-icons/io"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";


const Navbar =()=> {

    return (
        <>
        <nav className="w-100 font px-4 py-2 align-center justify-content-between d-none d-lg-flex">
            <h4 className="color my-2">ATG.<span className="text-black">W<img 
            style={{"width":"21px", "height":"21px",marginBottom:"5px"}}
            alt="O" src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689784894/Union_1_ht8zcw.png"/>RLD</span></h4>
            <div className="p-2 d-flex align-center search-container">
            <BsSearch className="search-icon"/>
            <input type="text" className="input w-100 border-0 bg-transparent" placeholder="Search for your favorite groups in ATG"/>
            </div>
            <div className="d-flex align-center px-2 mt-3">
            <p className="create-account-text">Create account. <span className="create-account-text-span">It's free!</span></p>
            <button type="button" className="btn btn-transparent border border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <IoMdArrowDropdown style={{marginTop:"-21px"}}/>
              </button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                                <div style={{backgroundColor:"#ffffff",borderRadius:"15px",paddingBottom:"25px"}}>
                                    <div style={{backgroundColor:"#EFFFF4",height:"46px",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",fontWeight:"600"}} className="d-flex align-center pt-2 px-5 justify-content-between">
                                        <p style={{color:"#008A45",fontSize:"13px",marginTop:"5px"}} className="fonts">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                        <button type="button" style={{fontSize:"13px",marginTop:"5px"}} className="btn-close"  data-bs-dismiss="modal" aria-label="Close" ></button>
                                    </div>  
                                    <div className="d-flex justify-content-between px-5 ">
                                    <h2 className="fonts name"  style={{fontSize:"23px",fontWeight:"600"}} >Create Account</h2>
                                    <p className="fonts post-ans" style={{fontSize:"13px",marginTop:"17px"}}>Already have a acoount? <button className="" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#staticLoginBackdrop" style={{color:"#2F6CE5",fontWeight:"600",border:"0px",backgroundColor:"transparent"}}>Sign In</button></p>
                                    </div>
                                <div className="d-flex">
                                    <div style={{width:"55%"}} className="form-box">
                                    <form>
                                        <div className="inputs-box-names"><input className="inputs-name" type="text" placeholder="First Name" />
                                        <input className="inputs-name" type="text" placeholder="Last Name" /></div>
                                        <div className="inputs-box"><input className="inputs" type="email" placeholder="Email" /></div>
                                        <div className="inputs-box"><input className="inputs" type="password" placeholder="Password" /></div>
                                        <div className="inputs-box"><input className="inputs" type="password" placeholder="Confirm Password"/></div>
                                        <div>
                                        <button type="submit" className="create-account-btn">Create Account</button>
                                        </div>
                                    </form>
                                    <div className="sing-in-btn-box">
                                    <button type="submit" className="sign-in-link-btn">
                                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                                        alt=""   style={{height:"17px",width:"17px",marginRight:"7px"}}/>
                                        Sign Up with Facebook</button>
                                    <button type="submit" className="sign-in-link-btn">
                                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" style={{height:"15px",width:"15px",marginRight:"7px"}}
                                        />
                                        Sign Up with Google</button>
                                    </div>
                                    </div>
                                    <div>
                                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689859236/atg_illustration_rmmcgr.png"
                                    alt="" />
                                    <p style={{fontSize:"11px",opacity:"0.7"}} className="fonts">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                                </div> 
                            </div>
                            </div>
                </div>

                            <div className="modal fade" id="staticLoginBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                <div style={{backgroundColor:"#ffffff",borderRadius:"15px",paddingBottom:"25px"}}>
                                    <div style={{backgroundColor:"#EFFFF4",height:"46px",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",fontWeight:"600"}} className="d-flex align-center pt-2 px-5 justify-content-between">
                                        <p style={{color:"#008A45",fontSize:"13px",marginTop:"5px"}} className="fonts">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                        <button type="button" style={{fontSize:"13px",marginTop:"5px"}} className="btn-close"  data-bs-dismiss="modal" aria-label="Close" ></button>
                                    </div>  
                                    <div className="d-flex justify-content-between px-5 ">
                                    <h2 className="fonts name"  style={{fontSize:"23px",fontWeight:"600"}} >Sign In</h2>
                                    <p className="fonts post-ans" style={{fontSize:"13px",marginTop:"17px"}}>Do not have a account yet? <button  data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{color:"#2F6CE5",fontWeight:"600",border:"0px",backgroundColor:"transparent"}}>Create new for free!</button></p>
                                    </div>
                                <div className="d-flex">
                                    <div style={{width:"55%"}} className="form-box mt-3">
                                    <form>
                                        <div className="inputs-box"><input className="inputs" type="email" placeholder="Email" /></div>
                                        <div className="inputs-box"><input className="inputs" type="password" placeholder="Password" /></div>
                                        <div>
                                        <button type="submit" className="create-account-btn mt-4">Sign In</button>
                                        </div>
                                    </form>
                                    <div className="sing-in-btn-box">
                                    <button type="submit" className="sign-in-link-btn">
                                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                                        alt=""   style={{height:"17px",width:"17px",marginRight:"7px"}}/>
                                        Sign Up with Facebook</button>
                                    <button type="submit" className="sign-in-link-btn">
                                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" style={{height:"15px",width:"15px",marginRight:"7px"}}
                                        />
                                        Sign Up with Google</button>
                                        <button style={{marginTop:"7px",fontSize:"13px",textAlign:"center",fontFamily:"IBM Plex Sans, sans-serif",fontWeight:"bold",width:"85%",backgroundColor:"transparent",border:"0px",outline:"none"}}>Forget Password?</button>
                                    </div>
                                    </div>
                                    <div>
                                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689859236/atg_illustration_rmmcgr.png"
                                    alt="" />
                                    <p style={{fontSize:"11px",opacity:"0.7"}} className="fonts">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                                </div> 
                            </div>
                            </div>
                            </div>
        </div>
        </nav>
        <div className="d-flex d-lg-none justify-content-end px-3 py-2">
        <img src ="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689915654/Rectangle_1_fmeqnm.png" alt="" style={{width:"15px",height:"15px",marginRight:"15px"}}/>    
        <img src ="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689915534/Oval_vjt3aj.png" alt="" style={{width:"15px",height:"15px",marginRight:"15px"}}/>    
        <img src ="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689915546/Path_de44ey.png" alt="" style={{width:"15px",height:"15px",marginRight:"15px"}}/>    
        </div>
        </>
    )
}
export default Navbar;