import Logo from "./Logo.jsx"
import NavBar from "./NavBar.jsx"
import "./header.css"

function Header() {
    return (
        <>
            <div className = "bg-blue-900 w-screen p-5 flex justify-between items-center gap-4">
                <a href="/" className="flex gap-8 items-center home-link">
                    <Logo />
                    <p>Sam Lev</p>
                </a>
                <NavBar />
            </div>
        </>
    )
}

export default Header