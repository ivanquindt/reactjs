import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.css";
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <FaShoppingCart />
      <span>0</span>
    </Link>
  );
};
