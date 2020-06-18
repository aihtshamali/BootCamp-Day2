import React from 'react';

function OrderList({list}){
    return (
        <ol>
            {list.map(item => (
          <li key={item}>{item}</li>
        ))}
        </ol>
    )
}

export default OrderList