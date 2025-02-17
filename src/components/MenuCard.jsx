import React from 'react'

const MenuCard = ({ name, url }) => {
  return (
    <div
        className="bg-slate-300 px-4 py-4 rounded-lg bg-cover min-h-52 text-xl font-medium leading-tight"
        style={{ backgroundImage: `url(${url})` }}
        >
            {name}
    </div>
  )
}

export default MenuCard