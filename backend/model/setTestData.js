/////////////////////////////////////////////////////

const seedDatabase = async () => {
  try {
    // Customers
    const customers = [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        address: "123 Main St",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone: "0987654321",
        address: "456 Elm St",
      },
      {
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice.johnson@example.com",
        phone: "1122334455",
        address: "789 Oak St",
      },
      {
        first_name: "Bob",
        last_name: "Brown",
        email: "bob.brown@example.com",
        phone: "6677889900",
        address: "101 Pine St",
      },
      {
        first_name: "Charlie",
        last_name: "Davis",
        email: "charlie.davis@example.com",
        phone: "2233445566",
        address: "202 Maple St",
      },
    ];

    // Save customers
    for (const customerData of customers) {
      const customer = new Customer(customerData);
      await customer.save();
    }

    // Products
    const products = [
      {
        product_name: "Product A",
        category: "Category 1",
        price: 100,
        unit: "pcs",
        stock_quantity: 50,
        imgUrl: "https://example.com/productA.jpg",
      },
      {
        product_name: "Product B",
        category: "Category 2",
        price: 200,
        unit: "pcs",
        stock_quantity: 30,
        imgUrl: "https://example.com/productB.jpg",
      },
      {
        product_name: "Product C",
        category: "Category 1",
        price: 150,
        unit: "pcs",
        stock_quantity: 40,
        imgUrl: "https://example.com/productC.jpg",
      },
      {
        product_name: "Product D",
        category: "Category 3",
        price: 250,
        unit: "pcs",
        stock_quantity: 20,
        imgUrl: "https://example.com/productD.jpg",
      },
      {
        product_name: "Product E",
        category: "Category 2",
        price: 300,
        unit: "pcs",
        stock_quantity: 10,
        imgUrl: "https://example.com/productE.jpg",
      },
    ];

    // Save products
    for (const productData of products) {
      const product = new Product(productData);
      await product.save();
    }

    // Sales
    const customerIds = await Customer.find().select("_id");
    const sales = [
      {
        customer_id: customerIds[0]._id,
        total_amount: 100,
        discount: 10,
        final_amount: 90,
        payment_method: "credit_card",
      },
      {
        customer_id: customerIds[1]._id,
        total_amount: 200,
        discount: 20,
        final_amount: 180,
        payment_method: "cash",
      },
      {
        customer_id: customerIds[2]._id,
        total_amount: 150,
        discount: 15,
        final_amount: 135,
        payment_method: "paypal",
      },
      {
        customer_id: customerIds[3]._id,
        total_amount: 250,
        discount: 25,
        final_amount: 225,
        payment_method: "debit_card",
      },
      {
        customer_id: customerIds[4]._id,
        total_amount: 300,
        discount: 30,
        final_amount: 270,
        payment_method: "credit_card",
      },
    ];

    // Save sales
    for (const saleData of sales) {
      const sale = new Sale(saleData);
      await sale.save();
    }

    // Inventory
    const productIds = await Product.find().select("_id");
    const inventories = [
      {
        product_id: productIds[0]._id,
        quantity_in: 100,
        quantity_out: 50,
        current_stock: 50,
      },
      {
        product_id: productIds[1]._id,
        quantity_in: 50,
        quantity_out: 20,
        current_stock: 30,
      },
      {
        product_id: productIds[2]._id,
        quantity_in: 60,
        quantity_out: 20,
        current_stock: 40,
      },
      {
        product_id: productIds[3]._id,
        quantity_in: 40,
        quantity_out: 20,
        current_stock: 20,
      },
      {
        product_id: productIds[4]._id,
        quantity_in: 20,
        quantity_out: 10,
        current_stock: 10,
      },
    ];

    // Save inventories
    for (const inventoryData of inventories) {
      const inventory = new Inventory(inventoryData);
      await inventory.save();
    }

    // Reports
    const reports = [
      { report_type: "daily", total_sales: 1000, total_income: 900 },
      { report_type: "monthly", total_sales: 5000, total_income: 4500 },
      { report_type: "yearly", total_sales: 60000, total_income: 54000 },
      { report_type: "daily", total_sales: 1200, total_income: 1100 },
      { report_type: "monthly", total_sales: 5500, total_income: 5000 },
    ];

    // Save reports
    for (const reportData of reports) {
      const report = new Report(reportData);
      await report.save();
    }

    console.log("Database seeded!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();

/////////////////////////////////////////////////////
