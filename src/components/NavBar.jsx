/** @format */

import React from "react";

export default function NavBar() {
  return (
    <div className='navbar shadow-lg bg-black h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <a
        href='/'
        className='pl-9 btn btn-ghost normal-case font-mono text-gray-300 text-2xl'>
        Air Quality
      </a>
    </div>
  );
}
