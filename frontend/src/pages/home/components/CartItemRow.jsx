import { cancel } from "../../../assets";

const CartItemRow = ({ title, price, id, count, onClickRemove }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-2 rounded-md bg-primary-gray hover:bg-slate-100">
      <div className="flex flex-row items-center">
        <p className="px-2 text-[14px] font-semibold">{count}</p>
        <p className="text-[13px]">{title}</p>
      </div>

      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-row gap-3">
          <p>Rs: {price}</p>
          <button onClick={onClickRemove}>
            <img src={cancel} alt="cancel icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemRow;
