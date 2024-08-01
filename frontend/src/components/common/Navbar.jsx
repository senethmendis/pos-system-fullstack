import { NavbarItems } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[80px] h-full py-2 flex flex-col gap-5 border-r-2 border-gray-200/20">
      {NavbarItems.map((item, i) => (
        <Link to={item.link} key={i}>
          <div className="h-[60px] flex flex-col items-center justify-center rounded-md  hover:bg-gray-100 transition-all duration-100">
            <img src={item.icon} alt="icon" className="w-4" />
            <span className="text-[10px]">{item.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
