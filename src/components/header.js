import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {Button, Icon, Navbar, NavbarBrand, NavbarBurger, NavbarEnd, NavbarItem, NavbarMenu} from 'bloomer';
import { ThemeContext, getOppositeTheme } from '../contexts/theme';
import amDeCLight from '../images/amdec_white.png';
import amDeCDark from '../images/amdec_black.png';

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
      <Navbar className={`is-${theme}`}>
          <NavbarBrand>
              <Link to={`/`} className="navbar-item">
                  {theme === 'dark' ? <img src={amDeCLight} alt="ASoC" style={{height: '5vh'}}/>: <img src={amDeCDark} alt="ASoC" style={{height: '5vh'}}/>}
              </Link>
              <NavbarBurger isActive={isActive} onClick={toggleIsActive} />
          </NavbarBrand>
          <NavbarMenu
              isActive={isActive}
              onClick={toggleIsActive}
              className={`has-background-${theme}`}
          >
              <NavbarEnd>
                  <NavbarItem>
                      <Link
                          to="/registrations/project-registration"
                          className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                      >
                          Want to be a mentor ?
                      </Link>
                  </NavbarItem>
                  {url === 'https://asoc.netlify.com/' ?
                    <>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#about')}
                                className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                            >
                                About
                            </div>
                        </NavbarItem>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#why')}
                                className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                            >
                                Why amDeC ?
                            </div>
                        </NavbarItem>
                        <NavbarItem>
                            <div
                                style={{cursor: 'pointer'}}
                                onClick={()=> scrollTo('#timeline')}
                                className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                            >
                                Timeline
                            </div>
                        </NavbarItem>
                    </>
                  :null}
                  {/*<NavbarItem>*/}
                  {/*    <div*/}
                  {/*        style={{cursor: 'pointer'}}*/}
                  {/*        onClick={()=> scrollTo('#projects')}*/}
                  {/*        className={`navbar-item has-text-${getOppositeTheme(theme)}`}*/}
                  {/*    >*/}
                  {/*        Projects*/}
                  {/*    </div>*/}
                  {/*</NavbarItem>*/}
                  <NavbarItem>
                      <Button
                          isColor={theme}
                          onClick={toggleTheme}
                          title="Toggle Dark Theme"
                      >
                          <Icon
                              className="fas fa-moon"
                              hasTextColor={theme === 'light' ? 'dark' : 'warning'}
                          />
                      </Button>
                  </NavbarItem>
              </NavbarEnd>
          </NavbarMenu>
      </Navbar>
  );
};

export default Header;
