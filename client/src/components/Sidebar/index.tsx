import React from 'react'


const Sidebar = () => {

  const sidebarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;

  return (
    <div className={sidebarClassName}>Sidebar</div>
  )
}

export default Sidebar