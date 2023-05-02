import React from 'react';
import './SideNav.css';

export default function SideNav() {
  return (
    <div>
       {/* <Events /> */}
       {/* <ProjectList /> */}
       {/* <Users /> */}
 {/* <!--Main Navigation--> */}
 <header>
        {/* <!-- Sidebar --> */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
                <a href="/admin" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                </a>
                <a href="/projectlist" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Projects</span></a>
                <a href="/eventlist" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fas fa-calendar fa-fw me-3"></i><span>Events</span></a>
                <a href="/userlist" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
            </div>
            </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            
            <div className="container-fluid">
            
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>

            
            <a className="navbar-brand" href="#">
                <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="25"
                alt="MDB Logo"
                loading="lazy"
                />
            </a>
            
            <form className="d-none d-md-flex input-group w-auto my-auto">
                <input
                autocomplete="off"
                type="search"
                className="form-control rounded"
                placeholder='Search (ctrl + "/" to focus)'
                style={{minWidth: '225px'}}
                />
                <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
            </form>

            
            <ul className="navbar-nav ms-auto d-flex flex-row">
                
                <li className="nav-item dropdown">
                <a
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                    <li>
                    <a className="dropdown-item" href="#">Some news</a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">Another news</a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                </ul>
                </li>
                {/* <!-- Avatar --> */}
                <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    class="rounded-circle"
                    height="22"
                    alt="Avatar"
                    loading="lazy"
                    />
                </a>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                    <li>
                    <a class="dropdown-item" href="#">My profile</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">Settings</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">Logout</a>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
            {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
        </header>
        {/* <!--Main Navigation--> */}

        {/* <!--Main layout--> */}
        <main style={{marginTop: '58px'}}>
        <div class="container pt-4"></div>
        </main>
        {/* <!--Main layout--> */}       
    </div>
  )
}
