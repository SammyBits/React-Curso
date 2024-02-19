import { Link } from "react-router-dom";
import { NavItemProps } from "./NavItemProps";
import './NavItem.css';

function NavItem({ title, icon, route }: NavItemProps) {
    return (
        <Link to={route} className="nv-item">
            <div className='nv-itemInfo'>
                <i className='nv-itemIcon'>{icon}</i> 
                <span className='nv-itemTitle'>{title}</span>
            </div>
        </Link>
    );
}

export default NavItem;
