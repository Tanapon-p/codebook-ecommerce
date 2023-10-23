import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./component/CartEmpty";
import { CartList } from "./component/CartList";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
