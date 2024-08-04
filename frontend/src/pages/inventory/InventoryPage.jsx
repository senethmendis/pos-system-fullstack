import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import CustomInputField from "../../components/common/CustomInputField";
import axios from "axios";
import Button from "../../components/common/Button";
import { clear, plus, refresh } from "../../assets";
import { subFilters, Unites } from "../../constants/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomSelectField from "../../components/common/CustomSelectField";

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    product_name: "",
    category: "",
    price: 0.0,
    unit: "",
    stock_quantity: 0,
    product_code: "",
    image_url: "",
  });

  const notify = (text) => toast(text);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : "",
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/products", product);
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
      unit: "",
      stock_quantity: 0,
      product_code: "",
      image_url: "",
    });
  };

  const handleUploadClick = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/products/${id}`, product);
      notify("Product Updated!");
      fetchAllProducts();
    } catch (error) {
      notify("Error updating product");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      notify("Product Deleted!");
      fetchAllProducts();
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
      <ToastContainer newestOnTop closeOnClick theme="dark" />
      <h1 className="my-5 mx-5 font-semibold text-2xl">InventoryPage</h1>
      <div className="w-full h-[700px] flex flex-row">
        <div className="w-1/2 h-full bg-white mx-3 rounded-lg">
          <form className="max-w-sm mx-auto px-5 py-3">
            <CustomInputField
              lableText="Product Name"
              inputType="text"
              inputId="productName"
              name="product_name"
              placeholder="example product"
              isRequired={true}
              onChange={handleChange}
              value={product.product_name || ""}
              min={false}
            />
            <CustomSelectField
              isRequired={true}
              lableText="Category"
              inputId="category"
              name="category"
              value={product.category || ""}
              onChange={handleChange}
              itemArry={subFilters}
              isCapitalize
              min={false}
            />
            <CustomSelectField
              isRequired={true}
              lableText="Unit"
              inputId="unit"
              name="unit"
              itemArry={Unites}
              value={product.unit || ""}
              onChange={handleChange}
              min={false}
            />
            <CustomInputField
              lableText="Price"
              inputType="number"
              inputId="price"
              name="price"
              placeholder="0.00"
              isRequired={true}
              onChange={handleChange}
              value={product.price || 0}
              min={1}
            />
            <CustomInputField
              lableText="Image Link"
              inputType="text"
              inputId="link"
              name="image_url"
              placeholder="https://example.com/productA.jpg"
              isRequired={true}
              onChange={handleChange}
              value={product.image_url || ""}
              min={false}
            />
            <CustomInputField
              lableText="Quantity"
              inputType="number"
              inputId="quantity"
              name="stock_quantity"
              placeholder="10"
              onChange={handleChange}
              isRequired={true}
              value={product.stock_quantity || 1}
              min={1}
            />
            <CustomInputField
              lableText="Product Code"
              inputType="text"
              inputId="productCode"
              name="product_code"
              placeholder="P001"
              onChange={handleChange}
              isRequired={true}
              min={false}
              value={product.product_code || ""}
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
                onClick={(e) => handleUploadClick(e, product.product_id)}
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
                key={i}
                title={product.product_name}
                image={product.image_url}
                price={product.price}
                category={product.category}
                options={true}
                onClickDelete={() => handleDeleteClick(product.product_id)}
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
