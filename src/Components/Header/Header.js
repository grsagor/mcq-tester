import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        // <div>
        //     <Link to='/topics'>Topics</Link>
        //     <Link to='/statistics'>Statistics</Link>
        //     <Link to='/blogs'>Blogs</Link>
        // </div>
        <nav>
            <div className='bg-lime-600 text-white p-4 mb-5 flex justify-between items-center z-10'>
                <div>
                    <Link to='/'><button className='bg-white text-lime-600 px-12 py-2 text-2xl font-bold rounded'>MCQ Tester</button></Link>
                </div>
                <div>
                    <ul className={`md:flex absolute md:static duration-500 ${open ? 'top-[80px] right-5 bg-lime-600	' : 'top-[-200px]'}`}>
                        <li><Link to='/topics'><button className='my-2 md:mx-2 px-3 md:border-2 md:p-1 rounded'>Topics</button></Link></li>
                        <li><Link to='/statistics'><button className='my-2 md:mx-2 px-3 md:border-2 md:p-1 rounded'>Statistics</button></Link></li>
                        <li><Link to='/blogs'><button className='my-2 md:mx-2 px-3 md:border-2 md:p-1 rounded'>Blogs</button></Link></li>
                    </ul>
                    <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden">
                        {
                            open ? <XMarkIcon/> : <Bars3Icon/>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;