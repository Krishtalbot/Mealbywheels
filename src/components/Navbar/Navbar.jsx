import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import down from "../../assets/down_arrow.png";
import up from "../../assets/up_arrow.png";
import burgerIcon from "../../assets/burger_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 692); // State for mobile view
  const [rotate, setRotate] = useState(false); // State for rotating the burger icon
  const location = useLocation();
  const navigate = useNavigate();
  let timeoutId;

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId);
    setTransparent(false);
    timeoutId = setTimeout(() => {
      setTransparent(true);
    }, 2500);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 692);
    };

    const handleScroll = () => {
      setSticky(true);
    };

    const handleMouseMove = () => {
      resetTimer();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (transparent && sticky) {
      setIsClicked(false);
    }
  }, [transparent, sticky]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setRotate(!rotate);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setRotate(false);
  };

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <nav
      className={`container ${sticky ? "dark-nav" : ""} ${
        transparent ? "transparent" : ""
      }`}
    >
      <img src={logo} alt="Logo" className="logo" onClick={handleNavigate} />
      <div
        className={`menu-icon ${rotate ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <img src={burgerIcon} alt="Menu Icon" className="burger_icon" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li
          className={`${isActive("/home")} ${
            location.pathname === "/" ? "default-active" : ""
          }`}
        >
          <Link to="/home" onClick={closeMenu}>
            {" "}
            HOME{" "}
          </Link>
        </li>
        <li className={isActive("/menu")}>
          <Link to="/menu" onClick={closeMenu}>
            {" "}
            MENU{" "}
          </Link>
        </li>
        {!isMobile && (
          <li>
            <Link to="#" className="more" onClick={handleClick}>
              MORE
              <img
                src={isClicked ? up : down}
                alt={isClicked ? "Up arrow" : "Down arrow"}
                className="arrow"
              />
            </Link>
            {isClicked && (
              <ul
                className={`dropdown ${sticky ? "dark-nav" : ""} ${
                  transparent ? "transparent" : ""
                }`}
              >
                <li className={isActive("/about")}>
                  <Link to="/about" onClick={closeMenu}>
                    {" "}
                    ABOUT US
                  </Link>
                </li>
                <li className={isActive("/career")}>
                  <Link to="/career" onClick={closeMenu}>
                    CAREERS
                  </Link>
                </li>
                <li className={isActive("/charity")}>
                  <Link to="/charity" onClick={closeMenu}>
                    CHARITY
                  </Link>
                </li>
                <li className={isActive("/contact")}>
                  <Link to="/contact" onClick={closeMenu}>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            )}
          </li>
        )}
        {isMobile && (
          <>
            <li className={isActive("/about")}>
              <Link to="/about" onClick={closeMenu}>
                {" "}
                ABOUT US
              </Link>
            </li>
            <li className={isActive("/career")}>
              <Link to="/career" onClick={closeMenu}>
                CAREERS
              </Link>
            </li>
            <li className={isActive("/charity")}>
              <Link to="/charity" onClick={closeMenu}>
                CHARITY
              </Link>
            </li>
            <li className={isActive("/contact")}>
              <Link to="/contact" onClick={closeMenu}>
                CONTACT US
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
