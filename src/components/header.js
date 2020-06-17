import React, { Component } from 'react';
import {Link} from 'gatsby'
import "materialize-css/dist/css/materialize.min.css";



import headerStyles from './header.module.scss'
// import {SideNavItem, SideNav, Button}from 'react-materialize'


class Header extends Component {

  

  render() {
    return (
        <header className={headerStyles.nav}>
      <div className="navbar-fixed" style={{ height: "8vh", marginBottom: '10px' }}>
        <nav className=" teal">
          <div className="nav-wrapper"
          >
            <Link to='/'
            className={headerStyles.logo}
            >
              The Hope Barometer
            </Link>

            <a
              href="/"
              data-target="mobile-demo"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <div className="right">
              <ul className=" hide-on-med-and-down row-flex">
                <li>
                <Link to='/about/'>About</Link>
                </li>
                <li>
                  <Link to='/survey/'>Survey</Link>
                </li>
                <li>
                  <Link to='/results/'>Results</Link>
                </li>
                <li>
                  <Link to='/blog/'>Blog</Link>
                </li>
                <li>
                <Link to='/contact/'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        
        </nav>
      </div>

      <div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  {/* <SideNav
  className="show-on-medium-and-down"
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button node="button">SIDE NAV DEMO</Button>}
  >
    
    <SideNavItem
    >
     <Link to='/about/'>About</Link>
    </SideNavItem>
  
    <SideNavItem divider />
  
    <SideNavItem
    >
    <Link to='/survey/'>Survey</Link>
    </SideNavItem> 
    <SideNavItem
    >
    <Link to='/results/'>Results</Link>
    </SideNavItem>
    <SideNavItem
    >
      <Link to='/blog/'>Blog</Link>
    </SideNavItem>
    <SideNavItem
    >
  <Link to='/contact/'>Contact</Link>
    </SideNavItem>
  </SideNav> */}
</div>

</header>
    );
  }
}


export default Header;
