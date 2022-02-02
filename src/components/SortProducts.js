import React from 'react';
import { Button } from "@material-ui/core";



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
            <Button style={{margin:"20px", borderRadius: "20px", textDecoration: "underline"}} variant="contained" onClick={OnclickForName} > Sort by Name </Button>
            <Button style={{margin:"20px", borderRadius: "20px", textDecoration: "underline"}} variant="contained" onClick={OnClickForPrice}> Sort by Price </Button>
        </div>
    );
};

export default SortProducts;