import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AsideItems } from "./AsideItems";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import HeaderContext from "context/HeaderContext"
export const AsideMenu = () => {
  const [asideLang, setAsideLang] = React.useState("EN");
  const {handleAside, asideActive} = React.useContext(HeaderContext)
  

  return (
    <aside  id="aside-menu">
      <div className={`aside-area${ asideActive ? " show-aside" : " "}`}>
        <div className="aside-header">
          MENU
          <GrFormClose size={25} id="close-aside" onClick={handleAside} />
        </div>
        <div className="p-3 aside-category-tree">
          <ul className="tree-main">
            <AsideItems 
            
            />
          </ul>
        </div>
        <div className="aside-nav ">
          <ul className="aside-nav-inner my-4">
            <li className="aside-nav-item">
              <Link to="/" className="aside-nav-link">
                My Account
              </Link>
            </li>
            <li className="aside-nav-item">
              <Link to="/" className="aside-nav-link">
                About Us
              </Link>
            </li>
            <li className="aside-nav-item">
              <Link to="/" className="aside-nav-link">
                Contact Us
              </Link>
            </li>
            <li className="aside-nav-item">
              <Link to="/" className="aside-nav-link">
                FAQs
              </Link>
            </li>
          </ul>
          <div className="aside-login text-center">
            <span className="aside-login-btn">
              <FiUser size={25} color="#666" /> Sign in
            </span>
          </div>
          <div className="aside-lang">
            <div className="aside-lang-area">
              <span
                onClick={() => setAsideLang("EN")}
                className={`lang${asideLang === "EN" ? " use-lang" : ""}`}
              >
                EN
              </span>
              <span
                onClick={() => setAsideLang("ES")}
                className={`lang${asideLang === "ES" ? " use-lang" : ""}`}
              >
                ES
              </span>
              <span
                onClick={() => setAsideLang("FR")}
                className={`lang${asideLang === "FR" ? " use-lang" : ""}`}
              >
                FR
              </span>
              <span
                onClick={() => setAsideLang("DE")}
                className={`lang${asideLang === "DE" ? " use-lang" : ""}`}
              >
                DE
              </span>
              <span
                onClick={() => setAsideLang("IT")}
                className={`lang${asideLang === "IT" ? " use-lang" : ""}`}
              >
                IT
              </span>
              <span
                onClick={() => setAsideLang("ND")}
                className={`lang${asideLang === "ND" ? " use-lang" : ""}`}
              >
                ND
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
