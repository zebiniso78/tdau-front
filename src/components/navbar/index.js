import { useState, useEffect } from "react";
import {
   Nav,
   NavLink,
   AntdSelect,
   MobileIcon,
   NavMenu,
   NavContainer,
   SelectWrapper,
   LanguageStyled,
   Language,
   LanguageBody
} from "./style";
import { Twirl as Hamburger } from "hamburger-react";
// import "antd/dist/antd.css";
import logoTip from "../../assets/logo/logo.svg";
import { useLocation } from "react-router-dom";
import { Container } from "styles/globalStyle";


export function Navigator() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);
   const location = useLocation()

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   };
   useEffect(() => {
      showButton();
   }, []);
   window.addEventListener("resize", showButton);

   const handleClick = () => {
      setClick(!click);
   };


   return (
      <div>
         <Nav pathName={location.pathname}>
            <NavContainer>
               <NavLink to="/">
                  <img src={logoTip} alt="registon" className="logo-image" />
               </NavLink>
               <MobileIcon onClick={handleClick} click={click}>
                  <Hamburger
                     rounded
                     direction="right"
                     size={24}
                     toggled={click}
                     toggle={setClick}
                  />
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                  <NavLink href="#functions">
                     <button className="nav-btn">University</button>
                  </NavLink>
                  <NavLink href="#customers">
                     <button className="nav-btn">Interactive service</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">International partners</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Admisson</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Contacts</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Eng</button>
                  </NavLink>
               </NavMenu>
            </NavContainer>
         </Nav>
      </div>
   );
}



