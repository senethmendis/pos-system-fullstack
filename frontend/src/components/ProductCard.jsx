import { testImage } from "../assets";

const ProductCard = ({ image, title, price, onClick }) => {
  return (
    // add height
    <div
      onClick={onClick}
      className={` bg-white w-full h-[200px] border rounded-lg flex flex-col  items-center hover:scale-105 transition-all duration-150`}
    >
      <div className={`${image == "" ? "p-3 " : ""} w-full h-1/2`}>
        {image == "" ? (
          <img src={testImage} className="w-[30px] h-[30px] object-cover " />
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
    </div>
  );
};

export default ProductCard;
