import NavItem from "./NavItem.jsx"

function NavBar() {
    return (
        <nav className="flex gap-4">
            <NavItem title="About" dest="/about" />
            <NavItem title="Projects" dest="/projects" />
            <NavItem title="Adventures" dest="/adventures" />
            <NavItem title="Contact" dest="/contact" />
        </nav>
    )
}

export default NavBar