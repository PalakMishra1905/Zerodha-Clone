import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
    <div class="container p-2">
      <Link class="navbar-brand" to="/">
        <img src="images/logo.svg" alt="logo" style={{width:"30%"}}/>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-lg-0">
             {isAuthenticated ? 
              ( <li class="nav-item nav-link active" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logout
                </li>):
              (<li class="nav-item nav-link active" onClick={() => loginWithRedirect()}>
                  Login
                </li>)}
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
