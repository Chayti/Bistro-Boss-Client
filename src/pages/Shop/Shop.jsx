import React from 'react';
import Banner from '../../components/Shop/Banner/Banner';
import shopData from '../../components/Shop/shopData/shopData';
import Tabs from '../../components/Shop/Tabs/Tabs';


const Shop = () => {
    
    return (
        <div>
           
          <Banner></Banner>
          <Tabs shopData={shopData}></Tabs>
        </div>
    );
};

export default Shop;