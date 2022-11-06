import React, { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { UsarCarritoCompras } from "../context/ShoppingCartContext.tsx"
import { unfCLPtounfUSD} from "../utilidades/FormatoPlata.ts";
import { CarritoItem } from "../components/CarritoItem.tsx"
// This values are the props in the UI

const currency = "USD";
const style = {"layout":"vertical"};

const ButtonWrapper = ({ currency, showSpinner }) => {
  const [amount, setAmount] = useState(1);
  const {itemsCarrito} = UsarCarritoCompras()
  const [storeItems, setItems] = useState([]);
  const formio = 'https://hzfcvewuipmupiw.form.io/items/submission';
  function pullJson() {
      fetch(formio)
      .then(response => response.json())
      .then(data => {
          setItems(data);
      })
  }

  useEffect(() => {
    pullJson();

  }, [])

  var new_amount=(
    itemsCarrito.reduce((total, CarritoItem) => {
      const item = storeItems.find(i => i.data.id === CarritoItem.id)
       return total + (item?.data.precio || 0) * CarritoItem.cantidad
    }, 0)
  )
  function change_amount(amount) {
    new_amount=unfCLPtounfUSD(amount)
    setAmount(new_amount)}
  

  useEffect(() => 
  change_amount(new_amount)  
  )


  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={{layout:"horizontal"}}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      // Your code here after capture the order
                  });
              }}
          />
      </>
  );
}

export const  Paypal = () => {
	return (
		<div style={{ maxWidth: "5%", minHeight: "10%" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}