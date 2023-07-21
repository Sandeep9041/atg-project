import {BsThreeDots,BsFillShareFill} from "react-icons/bs"
import {BiCalendarEvent} from "react-icons/bi"
import {PiBagSimpleBold} from "react-icons/pi"
import {SlEye,SlLocationPin} from "react-icons/sl"
import "./post.css"
import Dropdown from "../Dropdown";

const Posts = () => {
    return (
        <div className="posts">
            <div className="post">
                <img alt="" src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689831861/Rectangle_5_lobjm8.png"
                className="w-100 img" />
                <img src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1689832702/%EF%B8%8F_Article_vjjgmk.png"
                alt="" className="m-4 img2"/>
                <div className="mx-3 d-flex align-center justify-content-between">
                    <h4 className="fonts question">What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                    <Dropdown />
                </div>
                <p className="fonts post-ans mx-3">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className="mx-3 mb-4 mt-4 d-flex align-center justify-content-between" style={{width:"95%"}}>
                    <div className="d-flex profile-card kamra">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689831888/Rectangle_3_wtosez.png" alt="" className="profile-img"  />
                    <div className="  sm-profile-card d-flex flex-column align-items-center">
                    <h4 className="fonts name align-self-center kamras-name">Sarthak Kamra</h4>
                    <p className="follows d-flex  d-lg-none" style={{marginLeft:"-13px"}}>1.4k views</p>
                    </div>
                </div>
                <div className="d-flex align-center justify-content-between mt-2" style={{width:"25%"}}>
                    <div className="mt-2 view-card d-none d-lg-flex">
                        <SlEye style={{fontSize:"17px",marginTop:"3px",marginRight:"11px"}}/>
                        <p className="views fonts">1.4k views</p>
                    </div>
                <div className="share d-flex">
                    <BsFillShareFill style={{marginTop:"5px"}}/>
                    <p className="d-flex d-lg-none" style={{marginTop:"18px"}}>Share</p>
                </div>
                </div>
                </div>
            </div>
            <div className="post">
                <img alt="" src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689838564/Rectangle_5_ecz4uv.jpg"
                className="w-100 img" />
                <img src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1689838779/%EF%B8%8F_Education_pgs7cr.png"
                alt="" className="m-4 img-education"/>
                <div className="mx-3 d-flex align-center justify-content-between">
                    <h4 className="fonts question">Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                    <Dropdown />
                </div>
                <p className="fonts post-ans mx-3 mt-2">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className="mx-3 mb-4 mt-4 d-flex align-center justify-content-between" style={{width:"95%"}}>
                    <div className="d-flex profile-card">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689838855/Rectangle_3_bciyvx.png" alt="" className="profile-img" />
                    <div className="d-flex flex-column align-items-center  sm-profile-card">
                    <h4 className="fonts name align-self-center kamra-name">Sarah West</h4>
                    <p className="follows d-flex d-lg-none">4.8k views</p>
                    </div>
                </div>
                <div className="d-flex align-center justify-content-between mt-2" style={{width:"25%"}}>
                    <div className="mt-2  d-none d-lg-flex">
                        <SlEye style={{fontSize:"17px",marginTop:"3px",marginRight:"11px"}}/>
                        <p className="views fonts">1.4k views</p>
                    </div>
                <div className="share d-flex">
                    <BsFillShareFill style={{marginTop:"5px"}}/>
                    <p className="d-flex d-lg-none" style={{marginTop:"18px"}}>Share</p>
                </div>
                </div>
                </div>
            </div> 
            <div className="post">
                <img alt="" src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689838789/Rectangle_5_rkauhu.png"
                className="w-100 img" />
                <img src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1689839059/%EF%B8%8F_Meetup_kduwtu.png"
                alt="" className="m-4 img2"/>
                <div className="mx-3 d-flex align-center justify-content-between">
                    <h4 className="fonts question">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                    <Dropdown />
                </div>
                <div  className="address">
                    <div className="d-flex fonts name"  style={{fontSize:"15px"}}>
                        <BiCalendarEvent  style={{fontSize:"21px",marginRight:"4px"}}/>
                        <p className="location">Fri, 12 Oct, 2018</p>
                    </div>
                    <div  className="d-flex fonts name" style={{fontSize:"15px"}}>
                        <SlLocationPin className="location-sign"/>
                        <p className="location">Ahmadabad, India</p>
                    </div>
                </div>
                <div className="d-flex w-100">
                <button style={{color:"#E56135",borderRadius:"10px",backgroundColor:"transparent",marginInline:"auto",fontSize:"13px",fontWeight:"600",paddingBlock:"9px",border:"1px solid #A9AEB8"}} className="fonts profile-btn">Visit Website</button>
                </div>
                <div className="mx-3 mb-4 mt-4 d-flex align-center justify-content-between" style={{width:"95%"}}>
                    <div className="d-flex profile-card">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689839302/Rectangle_3_1_wbrrkf.png" alt="" className="profile-img" />
                    <div className="d-flex flex-column align-items-center  sm-profile-card">
                    <h4 className="fonts name align-self-center kamra-name">Ronal Jonas</h4>
                    <p className="follows d-flex  d-lg-none">800 views</p>
                    </div>
                </div>
                <div className="d-flex align-center justify-content-between mt-2" style={{width:"25%"}}>
                    <div className="mt-2  d-none d-lg-flex">
                        <SlEye style={{fontSize:"17px",marginTop:"3px",marginRight:"11px"}}/>
                        <p className="views fonts">1.4k views</p>
                    </div>
                <div className="share d-flex">
                    <BsFillShareFill style={{marginTop:"5px"}}/>
                    <p className="d-flex d-lg-none " style={{marginTop:"18px"}}>Share</p>
                </div>
                </div>
                </div>
            </div>
            <div className="post">
                <img src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1689842488/%EF%B8%8F_Job_o0hgt0.png"
                alt="" className="m-4 img-jobs"/>
                <div className="mx-3 d-flex align-center justify-content-between">
                    <h4 className="fonts question">Software Developer</h4>
                    <Dropdown />
                </div>
                <div  className="address">
                    <div className="d-flex fonts name"  style={{fontSize:"15px"}}>
                        <PiBagSimpleBold  style={{fontSize:"21px",marginRight:"4px"}}/>
                        <p className="location">Innovaccer Analytics Private Ltd.</p>
                    </div>
                    <div  className="d-flex fonts name" style={{fontSize:"15px"}}>
                        <SlLocationPin className="location-sign"/>
                        <p className="location">Noida, India</p>
                    </div>
                </div>
                <div className="d-flex w-100">
                <button  style={{color:"#02B875",borderRadius:"10px",backgroundColor:"transparent",marginInline:"auto",fontSize:"13px",fontWeight:"600",paddingBlock:"9px",border:"1px solid #A9AEB8"}} className="fonts profile-btn">Apply on Timejobs</button>
                </div>
                <div className="mx-3 mb-4 mt-4 d-flex align-center justify-content-between" style={{width:"95%"}}>
                    <div className="d-flex profile-card">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1689842971/Rectangle_3_2_snxmlx.png" alt="" className="profile-img" />
                    <div className=" sm-profile-card d-flex flex-column align-items-center">
                    <h4 className="fonts name align-self-center kamra-name">Joseph Gay</h4>
                    <p className="follows d-flex  d-lg-none">1.7k views</p>
                    </div>
                </div>
                <div className="d-flex align-center justify-content-between mt-2" style={{width:"25%"}}>
                    <div className="mt-2  d-none d-lg-flex">
                        <SlEye style={{fontSize:"17px",marginTop:"3px",marginRight:"11px"}}/>
                        <p className="views fonts">1.4k views</p>
                    </div>
                <div className="share d-flex">
                    <BsFillShareFill style={{marginTop:"5px"}}/>
                    <p className="d-flex d-lg-none" style={{marginTop:"18px"}}>Share</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Posts