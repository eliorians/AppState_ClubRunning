import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Checkout = () => {
    const [{ isPending }] = usePayPalScriptReducer();

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'Club Membership for 1 Academic Year',
                    amount: {
                        value: "35.00",
                        currency_code: "USD"
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Payment received from ${name}. Welcome to the Club!`);
        });
    }

    return (
        <div>
            {isPending ? <p>Loading Payment...</p> : (
                <PayPalButtons 
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                    shippingPreference="NO_SHIPPING"
                />
            )}
        </div>
    );
}

export default Checkout;