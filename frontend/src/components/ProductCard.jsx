import { bin, refresh, testImage } from "../assets";

const ProductCard = ({
  image,
  title,
  price,
  onClick,
  options,
  onClickDelete,
  onClickUpdate,
}) => {
  return (
    // add height
    <div
      onClick={onClick}
      className={` bg-white w-full max-h-[250px] border rounded-lg flex flex-col shadow-xl  items-center hover:scale-105 transition-all duration-150`}
    >
      <div className={`${image == "" ? "p-3 " : ""} w-full h-1/2`}>
        {image == "" ? (
          <div className="flex gap-3 items-center">
            <img src={testImage} className="w-[30px] h-[30px] object-cover " />
            <p className="text-[10px]">No Product Image</p>
          </div>
        ) : (
          <img
            src={image}
            alt="procut img"
            className="w-full h-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="w-full h-full p-4">
        <h3 className="text-[15px] font-semibold ">{title}</h3>
        <h4 className="text-[15px]">{price}Rs</h4>
      </div>
      {options ? (
        <div className="w-full flex items-center py-2 px-2 justify-between">
          <button
            className="bg-red-400 p-2 rounded-full hover:bg-red-600"
            onClick={onClickDelete}
          >
            <img src={bin} alt="bin" className="w-4 invert" />
          </button>
          <button
            className="bg-orange-400 p-2 rounded-full hover:bg-orange-600"
            onClick={onClickUpdate}
          >
            <img src={refresh} alt="bin" className="w-4 invert" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
