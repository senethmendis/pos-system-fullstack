import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CustomInputField from "../components/CustomInputField";
import axios from "axios";
import Button from "../components/Button";
import { clear, plus, refresh } from "../assets";
import { subFilters, Unites } from "../constants/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomSelectField from "../components/CustomSelectField";

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    product_name: "",
    category: "", // Corrected spelling
    price: 0,
    imgUrl: "",
    unit: "",
    stock_quantity: 0,
    product_code: "",
  });

  const notify = (text) => toast(text);

  //fetch all products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/product");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //handle input fields
  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //post request add new products
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/product", product);
      notify("New Product Added!");
      fetchAllProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const clearProduct = () => {
    setProduct({
      product_name: "",
      category: "",
      price: 0,
      imgUrl: "",
      unit: "",
      stock_quantity: 0,
      product_code: "",
    });
  };

  // const handleUpdateChange = (e) => {
  //   setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  //get update details for the backend

  const handleUploadClick = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/product/${id}`, product);
      notify("Product Updated!");
      fetchAllProducts();
    } catch (error) {
      notify("Error updating product");
    }
  };

  //handle delete request
  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/product/${id}`);
      notify("Product Deleted!");
      fetchAllProducts();
      //window.location.reload();
    } catch (error) {
      console.log(error);
      notify("Error deleting product");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <section className="w-full h-full flex flex-col bg-parimary-gray">
      <ToastContainer newestOnTop closeOnClick />
      <h1 className="my-5 mx-5 font-semibold text-2xl">InventoryPage</h1>
      <div className="w-full h-[700px] flex flex-row">
        <div className="w-1/2 h-full bg-white mx-3 rounded-lg">
          <form className="max-w-sm mx-auto  px-5 py-3">
            <CustomInputField
              lableText="Product Name"
              inputType="text"
              inputId="productName"
              name="product_name"
              placeholder="example product"
              isRequired={true}
              onChange={handleChange}
              value={product.product_name}
            />
            <CustomSelectField
              isRequired={true}
              lableText="Category"
              inputId="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              itemArry={subFilters}
              isCapitalize
            />
            <CustomSelectField
              isRequired={true}
              lableText="Unit"
              inputId="unit"
              name="unit"
              itemArry={Unites}
              value={product.unit}
              onChange={handleChange}
            />
            <CustomInputField
              lableText="Price"
              inputType="number"
              inputId="price"
              name="price"
              placeholder="0.00"
              isRequired={true}
              onChange={handleChange}
              value={product.price}
            />
            <CustomInputField
              lableText="Image Link"
              inputType="text"
              inputId="link"
              name="imgUrl"
              placeholder="https://example.com/productA.jpg"
              isRequired={true}
              onChange={handleChange}
              value={product.imgUrl}
            />
            <CustomInputField
              lableText="Quantity"
              inputType="number"
              inputId="quantity"
              name="stock_quantity"
              placeholder="10"
              onChange={handleChange}
              isRequired={true}
              value={product.stock_quantity}
            />
            <CustomInputField
              lableText="Product Code"
              inputType="text"
              inputId="productCode"
              name="product_code"
              placeholder="P001"
              onChange={handleChange}
              isRequired={true}
              value={product.product_code}
            />
            <div className="w-full flex flex-row gap-4">
              <Button
                icon={plus}
                isIcon={true}
                text="Add New"
                width="w-full"
                invertIcon
                customSytles="bg-green-500 text-white font-semibold"
                onClick={handleClick}
              />
              <Button
                icon={refresh}
                isIcon
                text="Update"
                width="w-full"
                invertIcon
                customSytles="bg-orange-400 text-white font-semibold"
                onClick={(e) => handleUploadClick(e, product._id)}
              />
              <Button
                icon={clear}
                isIcon
                text="Clear"
                width="w-full"
                invertIcon
                customSytles="bg-red-400 text-white font-semibold"
                onClick={clearProduct}
              />
            </div>
          </form>
        </div>
        <div className="w-full p-3">
          <div className="grid grid-cols-4 overflow-y-scroll overflow-x-hidden h-[648px] gap-4 px-2 no-scrollbar">
            {products.map((product, i) => (
              <ProductCard
                key={product._id}
                title={product.product_name}
                image={product.imgUrl}
                price={product.price}
                category={product.category}
                options
                onClickDelete={() => handleDeleteClick(product._id)}
                onClick={() => {
                  setProduct(product);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryPage;
