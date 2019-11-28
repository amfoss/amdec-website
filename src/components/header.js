import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {Button, Icon, Navbar, NavbarBrand, NavbarBurger, NavbarEnd, NavbarItem, NavbarMenu} from 'bloomer';
import { ThemeContext, getOppositeTheme } from '../contexts/theme';
import ASoC from '../images/asoc.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleIsActive = () => setIsActive(!isActive);
  const toggleTheme = () => setTheme(getOppositeTheme(theme));

  return (
      <Navbar className={`is-${theme}`}>
          <NavbarBrand>
              <Link to={`/`} className="navbar-item">
                  <img src={ASoC} alt="ASoC" style={{height: '5vh'}}/>
                  <b style={{ marginLeft: '0.5rem' }}>ASoC</b>
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
                      <a
                          href={`#`}
                          className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                      >
                          Want to be a Mentor ?
                      </a>
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
                  <NavbarItem>
                      <div
                          style={{cursor: 'pointer'}}
                          onClick={()=> scrollTo('#projects')}
                          className={`navbar-item has-text-${getOppositeTheme(theme)}`}
                      >
                          Projects
                      </div>
                  </NavbarItem>
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
