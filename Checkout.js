import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sep_2021/JUPITER_21/Phase_2_3/Jupiter_GW-Editorial_1150x323_P3._CB638955217_.jpg"

                    alt="" />
                {basket?.length === 0 ?
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket.To buy one or more items, click "Add to basket" next to the item.</p>

                    </div> :
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    </div>

                }
                <hr />
                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                        price={item.price} />
                ))}
            </div>

            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout;