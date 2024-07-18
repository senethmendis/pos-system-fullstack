import Button from "./Button";
import { dashboard, search } from "../assets/index";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <header className="w-full flex border-b-2 border-gray-200/20">
      <div className="px-4 w-full flex flex-row items-center gap-8 justify-between pb-2">
        <div className="w-full flex flex-row gap-9 items-center px-4">
          <h1 className="text-2xl font-bold">POS 24</h1>
          <div className="flex gap-2 items-center bg-white px-3 rounded-md border">
            <label htmlFor="searchbar">
              <img src={search} alt="search" className="w-5" />
            </label>
            <input
              type="search"
              name="searchbar"
              className="w-[400px] px-2 py-2 outline-none"
              placeholder="Search Products..."
            />
          </div>
        </div>

        <Link to={"/dash"}>
          <img src={dashboard} alt="" className="w-8 h-8" />
        </Link>
        <Button
          customSytles="bg-orange-500 text-white"
          text="Check Stats"
          width={"w-[150px]"}
        />
      </div>
    </header>
  );
};

export default HeaderBar;
