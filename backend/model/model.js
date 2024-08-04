import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Customers schema
const customerSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  cust_img_link: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  registration_date: { type: Date, default: Date.now },
});

// Sales schema
const salesSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: "Customer" },
  sale_date: { type: Date, default: Date.now },
  total_amount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  final_amount: { type: Number, required: true },
  payment_method: { type: String },
});

// Products schema
const productSchema = new Schema({
  product_name: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  unit: { type: String },
  imgUrl: { type: String },
  stock_quantity: { type: Number, default: 0 },
  product_code: { type: String, required: true },
});

// Inventory schema
const inventorySchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity_in: { type: Number, default: 0 },
  quantity_out: { type: Number, default: 0 },
  current_stock: { type: Number, default: 0 },
  last_updated: { type: Date, default: Date.now },
});

// Reports schema
const reportSchema = new Schema({
  report_type: { type: String, required: true },
  total_sales: { type: Number, required: true },
  total_income: { type: Number, required: true },
  generated_date: { type: Date, default: Date.now },
});

// Create models based on the schemas
const Customer = mongoose.model("Customer", customerSchema);
const Sale = mongoose.model("Sale", salesSchema);
const Product = mongoose.model("Product", productSchema);
const Inventory = mongoose.model("Inventory", inventorySchema);
const Report = mongoose.model("Report", reportSchema);

export { Customer, Sale, Product, Inventory, Report };
