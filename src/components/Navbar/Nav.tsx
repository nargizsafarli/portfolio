
import {FaGithub } from "react-icons/fa"
import logo from "./assets/sn logo add.jpeg"
import { FaLinkedinIn } from "react-icons/fa6"
 
function Nav() {
   
  return (
    <div>
        <div>
<img src={logo} alt="logo"/>
<div>
 <FaLinkedinIn/>
<FaGithub/>

</div>
        </div> 
        <div>

        </div>
    </div>
  )
}

export default Nav