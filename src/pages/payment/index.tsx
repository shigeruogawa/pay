/* eslint-disable prettier/prettier */
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(
    'pk_test_51PXNpvH5rAnlsV3sPek6lpddC9144Do28ymK4lYXYF1Dxx9io9EIQBqIFXmg8fkGUCUV9E1OPOhg3b2Qwog7Yqqy00VvfC3xMU',
);

function Payment() {
    const session1 = async () => {
        const stripe = await stripePromise;
        if (stripe) {
            const res = await axios.post('/api/payment/session');
            const result = await stripe.redirectToCheckout({
                sessionId: res.data.id,
            });
            if (result.error) {
                alert(result.error.message);
            }
        }
    };

    return (
        <div>
            <section>
                <div>
                    <h2>鞄</h2>
                    <p>5000円</p>
                </div>
                <div>
                    <button onClick={session1}>購入</button>
                </div>
            </section>
        </div>
    );
}

export default Payment;
