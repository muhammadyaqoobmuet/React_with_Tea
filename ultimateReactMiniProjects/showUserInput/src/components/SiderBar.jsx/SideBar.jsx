import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from './context/AppContext';
import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
} from 'react-icons/fa';
import './SideBar.css';

const links = [
    { id: 1, url: '/', text: 'home', icon: <FaHome /> },
    { id: 2, url: '/team', text: 'team', icon: <FaUserFriends /> },
    { id: 3, url: '/projects', text: 'projects', icon: <FaFolderOpen /> },
    { id: 4, url: '/calendar', text: 'calendar', icon: <FaCalendarAlt /> },
    { id: 5, url: '/documents', text: 'documents', icon: <FaWpforms /> },
];

const social = [
    { id: 1, url: 'https://www.facebook.com', icon: <FaFacebook /> },
    { id: 2, url: 'https://www.twitter.com', icon: <FaTwitter /> },
    { id: 3, url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
    { id: 4, url: 'https://www.behance.net', icon: <FaBehance /> },
    { id: 5, url: 'https://www.sketch.com', icon: <FaSketch /> },
];

function SideBar() {
    const { sideBar, closeSideBar } = useAppContext();

    return (
        <aside className={`sideBar fixed top-0 bottom-0 ${sideBar ? 'active' : '-left-6'} bg-white border-r px-3 py-2`}>
            <div className='w-full flex items-center justify-between'>
                <img className='w-[200px]' src={logo} alt='logo' />
                <button onClick={closeSideBar}><FaTimes className='text-2xl hover:rotate-45 transition-all text-black' /></button>
            </div>
            <ul className='flex flex-col gap-2 mt-10'>
                {links.map(link => (
                    <li key={link.id} className='cursor-pointer'>
                        <a href={link.url} className='flex gap-4 items-center font-medium transition-all tracking-wider rounded-md hover:bg-[#d1d1d1] px-3 bg-[#f5f5f5] py-2 text-[1.26rem]'>
                            {link.icon}
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;
