function Header() {

    return (
        <>
            <header className="siteheader">
                <div className="logo">
                    <i className='bx bxs-cat logoicon'></i>
                    Cat<span className="logopart2">Lovers</span>
                </div>
                <nav>
                    <ul className="navmenu">
                        <li><a className="headeranchor" href="#home">Home</a></li>
                        <li><a className="headeranchor" href="#">Services</a></li>
                        <li><a className="headeranchor" href="#products">Products</a></li>
                        <li><a className="headeranchor" href="#about">About</a></li>
                        <li><a className="headeranchor" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <ul className="navicons">
                    <li><a className="navanchor" href="#"><i className='bx bx-search-alt navicon'></i></a></li>
                    <li><a className="navanchor" href="#"><i className='bx bx-menu navicon' ></i></a></li>
                </ul>
            </header>
        </>
    )
}

export default Header
