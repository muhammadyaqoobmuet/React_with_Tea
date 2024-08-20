import React from 'react'

const Menu = ({items}) => {
  return (
    <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {items.map((menuItem) => {
      const { id, price, img, title, desc } = menuItem;
      return (
        <article
          key={id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            className="object-cover w-full h-48 sm:h-64 md:h-48 lg:h-64"
            src={img}
            alt={title}
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-lg text-gray-600 mt-2">${price}</p>
            <p className="text-gray-700 mt-4">{desc}</p>
          </div>
        </article>
      );
    })}
  </div>
</div>

  )
}

export default Menu
