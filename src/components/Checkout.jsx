import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { checkoutOrderAction } from "../actions/orderActions";
import Swal from "sweetalert2";

function Checkout({ toplamfiyat }) {
  const orderState = useSelector((state) => state.checkoutOrderReducer);
  const { success, error, loading } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(checkoutOrderAction(token, toplamfiyat));
    if (!error) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Ödeme Başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        stripeKey="pk_test_51OBEKlDCU5L4vafiPmH2zxgt5XSaIfvvx7v3nAsrBoAIDPY5YPdUmbDrFwwTCevsdm9vHvxx8I3tNsBSz4v59ysg004NKFdWSg"
        currency="TRY"
        shippingAddress
        billingAddress
        token={tokenHandler}
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
