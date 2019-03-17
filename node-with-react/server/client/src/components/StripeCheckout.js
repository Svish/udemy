import React from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { newPayment } from '../actions';

class StripeCheckout extends React.Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        currency="USD"
        token={token => this.props.newPayment(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default connect(
  null,
  { newPayment },
)(StripeCheckout);
