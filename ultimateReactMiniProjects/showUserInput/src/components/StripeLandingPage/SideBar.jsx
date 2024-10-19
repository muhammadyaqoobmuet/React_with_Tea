import React from 'react';
import { useStripe } from './stripeContext/stripeContext';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';

function SideBar() {
  const { isSideBarOpen, closeSideBar } = useStripe();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${isSideBarOpen ? 'block' : 'hidden'} absolute w-[95%]  top-3 left-0 mx-4  rounded-4xl h-screen bg-white shadow-lg z-50 sm:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-6 bg-zinc-100">
          <h3 className="text-2xl font-bold">Stripe</h3>
          <button onClick={closeSideBar} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="px-4 py-6 rounded-lg">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="mb-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">{page}</h4>
                <ul className="space-y-2 flex gap-4 flex-wrap rounded-lg ">
                  {links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <li key={index} className="flex items-center space-x-3 gap-5 flex-wrap text-gray-700 rounded-lg">
                        <Icon className="text-2xl text-indigo-600" />
                        <a href={link.url} className="hover:text-indigo-500 text-xl font-semibold tracking-widest">
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </aside>

      {/* Background Overlay */}
      <div
        className={`${isSideBarOpen ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-50 z-40 sm:hidden`}
        onClick={closeSideBar}
      ></div>
    </>
  );
}

export default SideBar;
