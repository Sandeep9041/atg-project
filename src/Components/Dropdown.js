import {BsThreeDots,BsFillShareFill} from "react-icons/bs"
import "./Home/home.css"

import "./Posts/post.css"
const Dropdown =() => {
    return (
      <div class="btn-group dropstart">
          <button type="button" className="btn btn-transparent mb-0 border border-0"  data-bs-toggle="dropdown" aria-expanded="false">
          <BsThreeDots style={{fontSize:"25px",marginTop:"-25px"}} />
          </button>
          <ul class="dropdown-menu">
          <li><button className="dropdown-item">Edit</button></li>
          <li><button className="dropdown-item">Report</button></li>
          <li><button className="dropdown-item">Option 3</button></li>
          </ul>
      </div>
    )
}
export default Dropdown;