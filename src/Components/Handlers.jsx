import { useState } from "react";

function useData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    async function getData() {
      try {
        // Fetch all products
        const response = await fetch("https://fakestoreapi.com/products");
    
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
    
        const data = await response.json();
    
        // Filter for fashion-related categories (clothing & jewelry)
        const fashionProducts = data.filter((item) =>
          ["men's clothing", "women's clothing", "jewelery"].includes(item.category)
        );

        setData(fashionProducts);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    }
    
    getData();

    return { data, loading, error };
}

export default useData;
