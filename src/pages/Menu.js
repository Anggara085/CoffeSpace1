import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <Fragment>
               <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2">
                        <div className="logo">
                            <a>
                                <Link to="/" ></Link>
                            <img src="assets/img/logo/logo.png" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                        <div className="main-menu d-none d-lg-block">
                            <nav>
                            <ul id="navigation">
                                <li className="active">
                                <Link to="/">Beranda</Link>
                                </li>
                                <li>
                                <Link to="/About">Tentang</Link>
                                </li>
                                <li>
                                <Link to=" ">Galeri</Link>
                                <ul className="submenu">
                                    <li>
                                    <Link to="/Galeri">Kopi Enak</Link>
                                    </li>
                                    <li>
                                    <a href="blog_details.html">Seduh Kopi</a>
                                    </li>
                                    <li>
                                    <a href="elements.html">Kedai Kopi</a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link to="/Contact">Kontak</Link>
                                </li>
                                <li className="button-header margin-left ">
                                <a href="register.html" className="btn">
                                    Gabung
                                </a>
                                </li>
                                <li className="button-header">
                                <a href="login.html" className="btn btn3">
                                    Masuk
                                </a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </Fragment>
    )
}


export default Menu;