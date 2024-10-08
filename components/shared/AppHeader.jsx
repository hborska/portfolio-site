import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [logoSvg, setLogoSvg] = useState("");

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  const getLogoSvg = (textColor, inverseTextColor) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.2 68" width="322.2" height="68">
    <rect rx="4" ry="4" width="68" height="68" fill="${textColor}" />
    <text x="34" y="43" font-family="sans-serif" font-size="32" text-anchor="middle" fill="${inverseTextColor}">HB</text>
    <text x="157.5" y="43" font-family="sans-serif" font-size="24" text-anchor="middle" fill="${textColor}" class="hidden sm:block">Henry Borska</text>
  </svg>
`;

  useEffect(() => {
    setLogoSvg(
      getLogoSvg(
        activeTheme === "light" ? "#FFFFFF" : "#000000",
        activeTheme === "light" ? "#000000" : "#FFFFFF"
      )
    );
  }, [activeTheme]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="lg:container lg:mx-auto"
    >
      {/* Header */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl flex justify-between lg:items-center py-6 px-4 lg:px-0">
        {/* Logo div */}
        <div className="flex-1">
          <Link href="/">
            <div
              className="w-36 cursor-pointer"
              dangerouslySetInnerHTML={{
                __html: logoSvg,
              }}
            ></div>
          </Link>
        </div>

        {/* Header menu links and small screen hamburger menu */}
        <div className="flex items-center w-full lg:w-auto justify-end">
          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="block lg:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
          {/* Small screen hamburger menu */}
          <div className="lg:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 lg:ml-4 lg:mt-3 flex flex-col px-5 py-3 lg:p-0 justify-between items-start shadow-lg lg:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2 border-t-2 pt-3 lg:pt-2 lg:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/projects" aria-label="Projects">
              Projects
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2 border-t-2 pt-3 lg:pt-2 lg:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/contact" aria-label="Contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 lg:ml-4 mt-5 lg:mt-3 lg:flex p-5 lg:p-0 justify-center items-center shadow-lg lg:shadow-none">
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2"
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  lg:mx-4 mb-2 lg:py-2"
            aria-label="Contact"
          >
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden lg:flex justify-between items-center flex-col md:flex-row">
          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
