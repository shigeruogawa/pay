import { NextApiRequest, NextApiResponse } from 'next';

export default async function payment(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe = require('stripe')(
    'sk_test_51PXNpvH5rAnlsV3sDnS3XObngBfXkEPUwP5sOQ6wKSWrgrJpPsdRT0HWwYLN4t1BLqdmEyk1mYKHluvPzEE2rlMT00npsWgaVk',
  );
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1PXNubH5rAnlsV3sQP3QfyyN',
        quantity: 5,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/payment/success',
    cancel_url: 'http://localhost:3000/payment/cancel',
  });
  res.json({ id: session.id });
}
