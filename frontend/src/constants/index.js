import { homeicon, usericon, salesicon, reporticon } from "../assets/index";
import {
  apple,
  banana,
  bread,
  butter,
  carrots,
  cheese,
  chicken,
  eggs,
  milk,
  oranges,
  pasta,
  potatoes,
  rice,
  spinach,
  tomato,
} from "../assets/products/index";

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
    link: "/reports",
    icon: reporticon,
    title: "Report",
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
  "all",
  "vegies",
  "fruites",
  "dairy",
  "meat",
  "other",
];

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

export const DummyProductData = [
  {
    id: 1,
    title: "Eggs",
    price: 50,
    image: eggs,
    category: "dairy",
  },
  {
    id: 2,
    title: "Milk",
    price: 30,
    image: milk,
    category: "dairy",
  },
  {
    id: 3,
    title: "Bread",
    price: 20,
    image: bread,
    category: "other",
  },
  {
    id: 4,
    title: "Butter",
    price: 45,
    image: butter,
    category: "dairy",
  },
  {
    id: 5,
    title: "Cheese",
    price: 60,
    image: cheese,
    category: "dairy",
  },
  {
    id: 6,
    title: "Apples",
    price: 35,
    image: apple,
    category: "fruites",
  },
  {
    id: 7,
    title: "Oranges",
    price: 40,
    image: oranges,
    category: "fruites",
  },
  {
    id: 8,
    title: "Chicken",
    price: 150,
    image: chicken,
    category: "meat",
  },
  {
    id: 9,
    title: "Rice",
    price: 25,
    image: rice,
    category: "other",
  },
  {
    id: 10,
    title: "Pasta",
    price: 28,
    image: pasta,
    category: "other",
  },
  {
    id: 11,
    title: "Bananas",
    price: 20,
    image: banana,
    category: "fruites",
  },
  {
    id: 12,
    title: "Tomatoes",
    price: 22,
    image: tomato,
    category: "vegies",
  },
  {
    id: 13,
    title: "Potatoes",
    price: 15,
    image: potatoes,
    category: "vegies",
  },
  {
    id: 14,
    title: "Carrots",
    price: 18,
    image: carrots,
    category: "vegies",
  },
  {
    id: 15,
    title: "Spinach",
    price: 25,
    image: spinach,
    category: "vegies",
  },
];
