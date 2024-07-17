import '../index.css'
import '../index.scss'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className="bg-slate-800 rounded-lg text-slate-100 mx-0.5"><Link to="/">Home</Link></li>
                    <li className="bg-slate-800 rounded-lg text-slate-100 mx-0.5"><Link to="/blogs">Blogs</Link></li>
                    <li className="bg-slate-800 rounded-lg text-slate-100 mx-0.5"><Link to="/forms">Forms</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;