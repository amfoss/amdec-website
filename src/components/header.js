import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {Button, Icon, Navbar, NavbarBrand, NavbarBurger, NavbarEnd, NavbarItem, NavbarMenu} from 'bloomer';
import { ThemeContext, getOppositeTheme } from '../contexts/theme';
import amDeCLight from '../images/amdec_white.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleIsActive = () => setIsActive(!isActive);
  const toggleTheme = () => setTheme(getOppositeTheme(theme));
  const [url, setURL] = useState('');

  useEffect(() => {
      setURL(window.location.href);
      console.log(window.location.href);
  });

  return (
      <Navbar className={`is-black`}>
          <NavbarBrand>
              <Link to={`/`} className="navbar-item">
                  <img src={amDeCLight} alt="ASoC" style={{height: '5vh'}}/>
              </Link>
              <NavbarBurger isActive={isActive} onClick={toggleIsActive} />
          </NavbarBrand>
          <NavbarMenu
              isActive={isActive}
              onClick={toggleIsActive}
              className={`has-background-black`}
          >
              <NavbarEnd>
                  <NavbarItem>
                      <Link
                          to="/guidelines"
                          className={`navbar-item has-text-light`}
                      >
                          Guidelines
                      </Link>
                  </NavbarItem>
                  <NavbarItem>
                      <Link
                          to="/registrations/project-registration"
                          className={`navbar-item has-text-light`}
                      >
                          Want to be a mentor ?
                      </Link>
                  </NavbarItem>
                  {url === 'http://localhost:8000/' ?
                    <>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#about')}
                                className={`navbar-item has-text-light`}
                            >
                                About
                            </div>
                        </NavbarItem>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#why')}
                                className={`navbar-item has-text-light`}
                            >
                                Why amDeC ?
                            </div>
                        </NavbarItem>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#timeline')}
                                className={`navbar-item has-text-light`}
                            >
                                Timeline
                            </div>
                        </NavbarItem>
                    </>
                  :null}
              </NavbarEnd>
          </NavbarMenu>
      </Navbar>
  );
};

export default Header;
