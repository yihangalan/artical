import { Link, NavLink, Outlet, Route } from 'react-router-dom';
import Button from './Button';


/**
 * Renders the layout of the page, including a list of pokemon on the left, and a main window on the right.
 * The main window contains an <Outlet> which is intended to render a PokedexPage inside, based on the route.
 */
export default function Layout() {
    return (
        <div>
            <Button></Button>
            <div>
                <Outlet />
            </div>

        </div>
    );
}

