import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


function DropdownMenu() {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon"><FontAwesomeIcon icon={faBars} /></label>
        <div class="content">
          <div class="logo"><a href="https://www.nuinvest.com.br/">TuInveste</a></div>
          <ul class="links">
            <li><a href="https://www.nuinvest.com.br/">Tesouro Prefixado</a></li>
            <li><a href="https://www.nuinvest.com.br/">Tesouro Selic</a></li>
            <li><a href="https://www.nuinvest.com.br/">Tesouro IPCA+</a></li>
            <li><a href="https://www.nuinvest.com.br/">CDB e LC</a></li>
            <li><a href="https://www.nuinvest.com.br/">LCI e LCA</a></li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon"><FontAwesomeIcon icon={faSearch} /></label>
        <form action="google.com" className="search-box">
          <input type="text" placeholder="Buscar por..." required />
          <button type="submit" className="go-icon"><FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </form>
      </nav>
    </div>
  );
}

export default DropdownMenu;