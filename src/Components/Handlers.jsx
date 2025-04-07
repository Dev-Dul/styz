async function getData() {
  let result;
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

    result = fashionProducts;
  }catch(error) {
    return error;
  }finally{
    return result;
  }
}

export default getData;
