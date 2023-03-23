import React, { useState, useEffect } from "react";
import {Card} from '../../shared/Card/Card'
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
             <Card>
                 {menuItem}
             </Card>
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
