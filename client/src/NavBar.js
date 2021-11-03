import girl from './girl.jpg'
import { CgGirl } from 'react-icons/fa';

function NavBar(){




    return(
      <>
      <div className="nav-bar-header">
        <nav>
        <a className="company-logo" href="/">
           Company
        </a> 
        <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
        </nav>
      </div>
      <div className="nav-bar-below">
        <nav className="navbar navbar-default">
       <ul className="nav nav-tabs">
      <li className="active"><a href="home">HOME</a></li>
      <li><a href="#">LIFESTYLE</a></li>
      <li><a href="#">CLOTHING</a></li>
    </ul>
    </nav>
      </div>
      </>
        // <nav className="nav-bar">
        //     {/* NavBar */}
        //     <div>
        //     <a  href="#">
        //     <img src={girl} alt="girl" width="50" height="50"/>
        //     </a> 
        //     <ul >
        // <li >
        //   <a  className="nav-bar" aria-current="page" href="#"> Home </a>
        // </li>
        // <li>
        //   <a className="nav-bar" aria-current="page" href="#"> Lifestyle </a>
        //   </li>
        //   <li >
        //   <a className="nav-bar" aria-current="page" href="#"> Clothing </a>
        // </li>
        // </ul>
        // <button>Signup/Login</button>
        // </div>
        // </nav>
    )
}

export default NavBar;