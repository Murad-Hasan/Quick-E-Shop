import React from 'react';
import { Link} from 'react-router-dom';
import { BsFillGrid3X3GapFill, BsPlusCircleFill, BsPencilSquare} from "react-icons/bs";

const Sidebar = ({active, match}) => {
   
    return (
        <div className="sidebar">
        <Link className="sidebar__logo" to="/">Mobile Garage</Link>
        <nav className="sidebar__nav">
            <Link
                className={`sidebar__link ${active === 'manage' ? 'active' : ''}`}
                to={`${match.path}/manage`}>
                <span><BsFillGrid3X3GapFill/> <strong className='m-2'>Manage Product</strong></span>
            </Link>

            <Link
                className={`sidebar__link ${active === 'add' ? 'active' : ''}`}
                to={`${match.path}/add`}>
                <span><BsPlusCircleFill/><strong className='m-2'>Add Product</strong></span>
            </Link>

            <Link
                className={`sidebar__link ${active === 'edit' ? 'active' : ''}`}
                to={`${match.path}/edit`}>
                <span><BsPencilSquare/> <strong className='m-2'>Edit Product</strong></span>
            </Link>
        </nav>
    </div>
    );
};

export default Sidebar;