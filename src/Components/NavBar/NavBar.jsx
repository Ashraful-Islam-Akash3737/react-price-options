import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);


    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
    ]

    return (
        <nav className="bg-yellow-200 p-6">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open ? <IoMdClose></IoMdClose> : <HiMenuAlt1></HiMenuAlt1>
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6 
             ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>



        </nav>
    );
};

export default NavBar;