function NavItem({ title, dest }) {
    return (
        <a href= {dest} className="hover:underline text-xl">{title}</a>
    )
}

export default NavItem