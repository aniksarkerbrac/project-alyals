import React from 'react';
import {Link} from 'react-router-dom';
import * as mdb from 'mdb-ui-kit';
import '../Header/Header.css';
import '../MegaMenu/MegaMenu.css';
import logo from '../../images/14-08.png';
import SearchBar from '../SearchBar/SearchBar';
import MegaMenu from '../MegaMenu/MegaMenu';

const TopNavbar = () => {
    return (
        <div className="container top-nav d-flex justify-content-center">
            <nav>
                <Link to="/">BRAND</Link>
                <Link class="dropdown-toggle dropdown dropdown-hover position-static" href="#" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">SKIN CARE</Link>
                <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" >
                    <MegaMenu></MegaMenu>
                </div>
                <Link to="/">NEW ARRIVAL</Link>
                <Link to="/">SALE</Link>
                <Link to="/">ROUTINE</Link>
                <Link to="/">GIFT VOUCHER</Link>
            </nav>
            {/* <nav>
                <SearchBar></SearchBar>
            </nav> */}
            
        </div>
    );
};

export default TopNavbar;