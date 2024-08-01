import {
  homeicon,
  usericon,
  salesicon,
  reporticon,
  stock,
  dashboard,
  cart,
} from "../assets/index";

export const NavbarItems = [
  {
    link: "/",
    icon: homeicon,
    title: "Home",
  },

  {
    link: "/customer",
    icon: usericon,
    title: "Customer",
  },
  {
    link: "/sales",
    icon: salesicon,
    title: "Sales",
  },
  {
    link: "/inventory",
    icon: stock,
    title: "Inventory",
  },
  {
    link: "/reports",
    icon: reporticon,
    title: "Report",
  },
  {
    link: "/orders",
    icon: cart,
    title: "Orders",
  },
];

export const OrdersData = [
  {
    customerId: "001",
    customerName: "Alice Smith",
    status: "Delivered",
    dateTime: "2024-07-30T10:15:00Z",
    products: [
      {
        productId: "P001",
        productName: "Laptop",
        price: 899.99,
        quantity: 1,
      },
      {
        productId: "P002",
        productName: "Wireless Mouse",
        price: 29.99,
        quantity: 2,
      },
    ],
    total: 959.97,
  },
  {
    customerId: "002",
    customerName: "Bob Johnson",
    status: "Processing",
    dateTime: "2024-07-30T12:00:00Z",
    products: [
      {
        productId: "P003",
        productName: "Keyboard",
        price: 49.99,
        quantity: 1,
      },
    ],
    total: 49.99,
  },
  {
    customerId: "003",
    customerName: "Charlie Brown",
    status: "Cancelled",
    dateTime: "2024-07-29T14:45:00Z",
    products: [
      {
        productId: "P004",
        productName: "Monitor",
        price: 199.99,
        quantity: 1,
      },
      {
        productId: "P005",
        productName: "HDMI Cable",
        price: 15.99,
        quantity: 3,
      },
    ],
    total: 247.96,
  },
  {
    customerId: "004",
    customerName: "Diana Prince",
    status: "Shipped",
    dateTime: "2024-07-31T08:30:00Z",
    products: [
      {
        productId: "P006",
        productName: "Tablet",
        price: 329.99,
        quantity: 1,
      },
    ],
    total: 329.99,
  },
  {
    customerId: "005",
    customerName: "Ethan Hunt",
    status: "Delivered",
    dateTime: "2024-07-31T11:00:00Z",
    products: [
      {
        productId: "P007",
        productName: "Smartphone",
        price: 599.99,
        quantity: 1,
      },
      {
        productId: "P008",
        productName: "Phone Case",
        price: 19.99,
        quantity: 1,
      },
    ],
    total: 619.98,
  },
];

export const discountCodes = [
  {
    code: "SAVE10",
    amount: 10,
  },
  {
    code: "SAVE20",
    amount: 20,
  },
  {
    code: "SAVE30",
    amount: 30,
  },
  {
    code: "SAVE40",
    amount: 40,
  },
  {
    code: "SAVE50",
    amount: 50,
  },
];

export const CustomerTableColumns = [
  "CID",
  "Name",
  "Email",
  "Status",
  "Edit",
  "Delete",
];

export const subFilters = [
  "All",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Meat",
  "Seafood",
  "Bakery",
];
export const Unites = ["KG", "ml", "g", "loaf"];

export const DummySalesRow = [
  {
    productId: 1,
    productName: "Product 1",
    Price: "240",
  },
  {
    productId: 2,
    productName: "Product 2",
    Price: "150",
  },
  {
    productId: 3,
    productName: "Product 3",
    Price: "350",
  },
];

export const customers = [
  {
    name: "Ramisa Sanjana",
    email: "ramisa@gmail.com",
    location: "14 Clifton Down Road, UK",
    orders: 7,
    spent: "$3331.00",
  },
  {
    name: "Mohua Amin",
    email: "mohua@gmail.com",
    location: "405 Kings Road, Chelsea, London",
    orders: 44,
    spent: "$74,331.00",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "123 Elm Street, Springfield, USA",
    orders: 15,
    spent: "$12,450.00",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    location: "456 Maple Avenue, Toronto, Canada",
    orders: 22,
    spent: "$27,600.00",
  },
  {
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    location: "789 Oak Drive, Dubai, UAE",
    orders: 30,
    spent: "$35,120.00",
  },
  {
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    location: "101 Pine Street, Barcelona, Spain",
    orders: 10,
    spent: "$8,750.00",
  },
  {
    name: "Liu Wei",
    email: "liu.wei@example.com",
    location: "202 Birch Road, Beijing, China",
    orders: 18,
    spent: "$19,400.00",
  },
  {
    name: "Elena Petrova",
    email: "elena.petrova@example.com",
    location: "303 Cedar Lane, Moscow, Russia",
    orders: 25,
    spent: "$22,800.00",
  },
  {
    name: "Carlos Mendez",
    email: "carlos.mendez@example.com",
    location: "404 Walnut Street, Mexico City, Mexico",
    orders: 12,
    spent: "$14,500.00",
  },
  {
    name: "Hiroshi Tanaka",
    email: "hiroshi.tanaka@example.com",
    location: "505 Cherry Blossom Road, Tokyo, Japan",
    orders: 9,
    spent: "$6,750.00",
  },
  {
    name: "Sara Johansson",
    email: "sara.johansson@example.com",
    location: "606 Spruce Street, Stockholm, Sweden",
    orders: 14,
    spent: "$13,200.00",
  },
  {
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    location: "707 Pine Cone Avenue, Mumbai, India",
    orders: 20,
    spent: "$17,950.00",
  },
  {
    name: "Fatima Ali",
    email: "fatima.ali@example.com",
    location: "808 Maple Leaf Lane, Cairo, Egypt",
    orders: 28,
    spent: "$24,600.00",
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    location: "909 Oakwood Drive, Sydney, Australia",
    orders: 16,
    spent: "$15,300.00",
  },
  {
    name: "Lucas Martins",
    email: "lucas.martins@example.com",
    location: "1010 Palm Street, Rio de Janeiro, Brazil",
    orders: 11,
    spent: "$9,800.00",
  },
  {
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    location: "1111 Pine Street, Rome, Italy",
    orders: 13,
    spent: "$11,400.00",
  },
  {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    location: "1212 Olive Road, Paris, France",
    orders: 23,
    spent: "$21,900.00",
  },
];
