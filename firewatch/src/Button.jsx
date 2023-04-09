import './button.css';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
export default function Button() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
            <NavLink className={location.pathname == "/moon" ? 'font' : 'button'}
             to={location.pathname == "/moon" ? '/firewatch' : '/moon'}>
                {() => location.pathname == "/moon" ? "firewatch" : "moon"}
            </NavLink>
        </>

    );
}
