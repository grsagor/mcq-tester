import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <div>
        //     <Link to='/topics'>Topics</Link>
        //     <Link to='/statistics'>Statistics</Link>
        //     <Link to='/blogs'>Blogs</Link>
        // </div>
        <nav>
            <div className='bg-lime-600 text-white p-4 mb-5 flex justify-between items-center'>
                <div>
                    <h2 className='bg-white text-lime-600 px-12 py-2 text-2xl font-bold'>Title</h2>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mr-4 border-2 p-1'><Link to='/topics'>Topics</Link></li>
                        <li className='mr-4 border-2 p-1'><Link to='/statistics'>Statistics</Link></li>
                        <li className='mr-4 border-2 p-1'><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;