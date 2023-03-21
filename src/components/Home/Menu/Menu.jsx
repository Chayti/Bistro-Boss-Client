import React, { useState, useEffect } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);
  console.log(menuItems)
  return (
    <div >
      <div className="flex justify-center">
      <h1 className="text-5xl text-center my-10 border-t-4 border-b-4 border-black py-5 w-5/12">FROM OUR MENU</h1>
      </div>
      <div class="grid grid-cols-2 gap-5 px-10">
        
          {menuItems.map((menuItem) => (
            <div className="flex space-x-4">
              <img style={{borderRadius:"0 50% 50%"}} src={menuItem.image} alt="" />
              <div className="items-center ">
              <h1 className="uppercase font-serif">{menuItem.name} ------------------</h1>
              <p className="text-gray-500">{menuItem.recipe}</p>
              </div>
              <p className="text-yellow-700">${menuItem.price}</p>
            </div>
          ))}
        
      </div>
      <div className="flex justify-center mt-10">
      <button className="btn btn-outline uppercase border-0 px-14 border-b-4 ">View full menu</button>
      </div>
    </div>
  );
};

export default Menu;
