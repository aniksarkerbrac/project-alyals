import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3 text-black">
            <h6>{props.title?props.title: " "}</h6>
            <ul className="list-unstyled">
                {
                    props.items.map(item => <li><Link to={item.link} style={{textDecoration: 'none',color:'#6c757d'}}>{item.name}</Link></li>)
                }
            </ul>
            {props.children}
        </div>
    );
};

export default FooterCol;