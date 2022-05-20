import { useState, useEffect } from "react";
import {
   Nav,
   NavLink,
   AntdSelect,
   MobileIcon,
   NavMenu,
   SelectWrapper,
   LanguageStyled,
   Language,
   LanguageBody
} from "./style";
import { Twirl as Hamburger } from "hamburger-react";
// import "antd/dist/antd.css";
import logoTip from "../../assets/logo/logo.svg";


export function Navigator() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

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
         <Nav>
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
               {/* <NavLink to="/sign-up">
            <SelectWrapper>
              <LanguageStyled>
                <li>
                  <LanguageBody>
                    <Language>
                      {language.map(
                        (lan) =>
                          currentLanguage === lan.value && (
                            <div>
                              <span style={{ marginRight: "20px" }}>
                                {lan.label}
                              </span>
                            </div>
                          )
                      )}
                    </Language>
                  </LanguageBody>
                  <ol>
                    {language.map((lan) => (
                      <li
                        className={
                          currentLanguage === lan.value ? "active" : ""
                        }
                        onClick={() => handlChangeLanguage(lan.value)}
                      >
                        <span style={{ marginRight: "20px" }}>{lan.label}</span>
                      </li>
                    ))}
                  </ol>
                </li>
              </LanguageStyled>
              <span className="chevron-down">
                <i className="fa fa-chevron-down"></i>
              </span>
            </SelectWrapper>
          </NavLink> */}
            </NavMenu>
         </Nav>
      </div>
   );
}



