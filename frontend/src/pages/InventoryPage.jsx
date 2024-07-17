import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CustomInputField from "../components/CustomInputField";
import axios from "axios";
import Button from "../components/Button";
import { plus, refresh } from "../assets";

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/product");
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <section className="w-full h-full flex flex-col bg-parimary-gray">
      <h1 className="my-5 mx-5 font-semibold text-2xl">InventoryPage</h1>
      <div className="w-full h-[700px] flex flex-row">
        <div className="w-1/2 h-full bg-white mx-3 rounded-lg">
          <form className="max-w-sm mx-auto  px-5 py-3">
            <CustomInputField
              lableText="Product Name"
              inputType="text"
              inputId="productName"
              placeholder="example product"
              isRequired={true}
            />
            <CustomInputField
              lableText="Category"
              inputType="text"
              inputId="category"
              placeholder="example category"
              isRequired={true}
            />
            <CustomInputField
              lableText="Image Link"
              inputType="text"
              inputId="link"
              placeholder="https://example.com/productA.jpg"
              isRequired={true}
            />
            <CustomInputField
              lableText="Price"
              inputType="number"
              inputId="price"
              placeholder="0.00"
              isRequired={true}
            />
            <CustomInputField
              lableText="Unit"
              inputType="text"
              inputId="unit"
              placeholder="KG / g / L / ml "
              isRequired={true}
            />
            <CustomInputField
              lableText="Quantity"
              inputType="number"
              inputId="quantity"
              placeholder="10"
              isRequired={true}
            />
            <div className="w-full flex flex-row gap-4">
              <Button
                icon={plus}
                isIcon={true}
                text="Add New"
                width="w-full"
                invertIcon
                customSytles="bg-green-500 text-white font-semibold"
              />
              <Button
                icon={refresh}
                isIcon={true}
                text="Update"
                width="w-full"
                invertIcon
                customSytles="bg-orange-500 text-white font-semibold"
              />
            </div>
          </form>
        </div>
        <div className="w-full p-3">
          <div className="grid grid-cols-4 overflow-y-scroll overflow-x-hidden h-[648px] gap-4 px-2 no-scrollbar">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                title={product.product_name}
                image={product.imgUrl}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryPage;
