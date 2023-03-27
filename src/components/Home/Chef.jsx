import React from 'react';
import Card2 from '../shared/Card/Card2';
const Chef = ({special}) => {
    
    return (
        <div>
             <Card2>
                {special}
             </Card2>
        </div>
    );
};

export default Chef;