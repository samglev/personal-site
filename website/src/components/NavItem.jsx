function NavItem({ title, dest }) {
    return (
        <a href= {dest} className="hover:underline">{title}</a>
    )
}

export default NavItem