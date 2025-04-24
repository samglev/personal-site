import Logo from "./Logo.jsx"
import NavBar from "./NavBar.jsx"

function Header() {
    return (
        <>
            <div className = "bg-blue-900 w-screen p-5 flex justify-between items-center gap-4">
                <a href="/" className="flex gap-8 items-center">
                    <Logo />
                    <h1>Sam Lev</h1>
                </a>
                <NavBar />
            </div>
        </>
    )
}

export default Header