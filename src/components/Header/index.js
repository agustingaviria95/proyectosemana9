import "./header.css";
import img from "../../assets/img/logo.png"
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
         <header>
            <span><Link to="/"><img src={img} alt="Logo del proyecto"></img></Link></span>
            <span><Link to="/contact">{props.contact}</Link></span>
           </header>)
}
  