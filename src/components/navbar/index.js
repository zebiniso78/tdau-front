import { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavContainer,
  NavDropMenuWrapper,
  NavDropMenu,
  WrapperMedia,
  LanguageProvider,
} from './style';
import { Twirl as Hamburger } from 'hamburger-react';
import logoTip from '../../assets/logo/logo.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import LanguageComponent from 'components/languageDropdown';
import { useTranslation } from 'react-i18next';

export function Navigator() {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [openDropdown, setOpenDropdown] = useState(false);

  const location = useLocation();
  let blogID = JSON.parse(localStorage.getItem('blog'));
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
  window.addEventListener('resize', showButton);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <Nav pathName={location.pathname} id={blogID?.id}>
        <NavContainer>
          <Link to="/">
            <img
              src={logoTip}
              alt="www.asadbekazamov.uz"
              className="logo-image"
            />
          </Link>
          <MobileIcon onClick={handleClick} click={click}>
            {/* <MenuFoldOutlined /> */}
            <Hamburger
              rounded
              direction="right"
              size={24}
              toggled={click}
              toggle={setClick}
            />
          </MobileIcon>
          <NavMenu click={click}>
            <WrapperMedia>
              <Row align="middle" justify="space-between">
                <Col>
                  <Link to="/">
                    <img
                      src={logoTip}
                      alt="www.asadbekazamov.uz"
                      className="logo-image"
                    />
                  </Link>
                </Col>
                <Col>
                  <div style={{ paddingRight: '32px' }}>
                    {/* <MenuUnfoldOutlined onClick={() => setClick(false)} />
                     */}
                    <Hamburger
                      rounded
                      direction="right"
                      size={24}
                      toggled={click}
                      toggle={setClick}
                    />
                  </div>
                </Col>
              </Row>
            </WrapperMedia>

            <NavDropMenuWrapper>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="nav-btn"
              >
                {t('university')}
              </button>
              <NavDropMenu dropdowntype={openDropdown}>
                <li onClick={handleClick}>
                  <Link
                    to="/about-university"
                    style={{ textDecoration: 'none', color: '#142F38' }}
                  >
                    {t('about-university')}
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link
                    to="/rectors-message"
                    style={{ textDecoration: 'none', color: '#142F38' }}
                  >
                    {t('rector-message')}
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link
                    to="/vision"
                    style={{ textDecoration: 'none', color: '#142F38' }}
                  >
                    {t('vision-mision')}
                  </Link>
                </li>
                <li onClick={handleClick}>{t('qualty-policy')}</li>
                <li onClick={handleClick}>{t('history-uiversity')}</li>
                <li onClick={handleClick}>
                  <Link
                    to="/university-structure"
                    style={{ textDecoration: 'none', color: '#142F38' }}
                  >
                    {t('structure-uiversity')}
                  </Link>
                </li>

                <li onClick={handleClick}>{t('branches')}</li>
              </NavDropMenu>
            </NavDropMenuWrapper>
            <NavLink to="/university-structure" onClick={handleClick}>
              <button className="nav-btn">
                {t('international-relationship')}
              </button>
            </NavLink>
            <NavLink to="/university-structure" onClick={handleClick}>
              <button className="nav-btn">{t('double-degree')}</button>
            </NavLink>
            <NavLink to="/university-structure" onClick={handleClick}>
              <button className="nav-btn">{t('campus-life')}</button>
            </NavLink>
            <NavLink to="/university-structure" onClick={handleClick}>
              <button className="nav-btn">{t('quick-links')}</button>
            </NavLink>
            <LanguageProvider>
              <LanguageComponent />
            </LanguageProvider>
            {/* <NavLink to="/university-structure" onClick={handleClick}>
              <button className="nav-btn">Eng</button>
            </NavLink> */}
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  );
}
