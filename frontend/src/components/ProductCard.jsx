import { bin, refresh, testImage } from "../assets";

const ProductCard = ({
  image,
  title,
  price,
  category,
  onClick,
  options,
  onClickDelete,
}) => {
  return (
    // add height
    <div
      className={` bg-white w-full max-h-[290px] border rounded-lg flex flex-col shadow-xl  items-center hover:scale-105 transition-all duration-150`}
    >
      <div
        onClick={onClick}
        className={`${image == "" ? "p-3 " : ""} w-full h-1/2`}
      >
        {image == "" ? (
          <div className="flex gap-3 items-center">
            <img src={testImage} className="w-[30px] h-[30px] object-cover " />
            <p className="text-[10px]">No Product Image</p>
          </div>
        ) : (
          <img
            src={image}
            alt="procut img"
            className="w-full  h-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="flex flex-col gap-1 w-full h-full p-4">
        <h3 className="text-[15px] font-semibold ">{title}</h3>
        <h4 className="text-[15px] capitalize bg-orange-500 font-medium py-1 px-2 rounded-md text-white">
          {category}
        </h4>
        <h4 className="text-[15px]">{price} Rs</h4>
        {options ? (
          <button
            className="bg-red-400 p-2 rounded-full hover:bg-red-600 flex items-center justify-center"
            onClick={onClickDelete}
          >
            <img src={bin} alt="bin" className="w-4 invert" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
