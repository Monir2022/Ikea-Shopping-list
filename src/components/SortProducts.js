import React from 'react';



const SortProducts = ({todos, setTodos}) => {

    const OnclickForName = () => {
        const products = [...todos]
            const sortedByName = products.sort((a, b) => {
          if (a.task < b.task) {
            return -1;
          } else if (a.task > b.task) {
            return 1;
          } else {
            return 0;
          }
        });    
        setTodos(sortedByName);
      };

    
      const OnClickForPrice = () => {    
          const products = [...todos]    
        const sortPrice = products.sort((a, b) => {
          return a.price - b.price;
        });
        console.log(sortPrice);
        setTodos(sortPrice);
      };



    return (
        <div>
            <button onClick={OnclickForName} > Sort by Name </button>
            <button onClick={OnClickForPrice}> Sort by Price </button>
        </div>
    );
};

export default SortProducts;