import ToggleThemeButton from "./components/toggle-theme-button/ToggleThemeButton"
import "./navbar.css"

const Navbar = () => {
    const navbarProps = {
        className: "navbar_wrapper",
        "aria-label": "Navbar", }

    return  <nav { ...navbarProps } >
                <ToggleThemeButton />
            </nav> }

export default Navbar