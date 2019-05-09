
class FinalReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>InfoHandler</h2>
        <ul>
          <li name="name"><span>Name:</span>{this.props.info.name}</li>
          <li name="email"><span>Email:</span>{this.props.info.email}</li>
          {/* <li name="password">Password: {this.props.info.password}</li> */}
        </ul>

        <h2>AddressHandler</h2>
        <ul>
          <li name="addressline"><span>Address:</span>{this.props.info.addressline}</li>
          <li name="city"><span>City:</span>{this.props.info.city}</li>
          <li name="zipcode"><span>Zipcode:</span>{this.props.info.zipcode}</li>
          <li name="country"><span>Country:</span>{this.props.info.country}</li>
        </ul>

        <h2>PaymentHandler</h2>
        <ul>
          <li name="nameOnCard"><span>Card Holder:</span>{this.props.info.nameOnCard}</li>
          <li name="creditCardNum"><span>Card Number:</span>{this.props.info.creditCardNum}</li>
          <li name="cvv"><span>CVV:</span>{this.props.info.cvv}</li>
          <li name="expDate"><span>Exp Date:</span>{this.props.info.expDate}</li>
        </ul>
        <button type="submit" name="submit" value="CHECKOUT" onClick={this.props.sendToData}>Send</button>
      </div>
    )
  }
}

export default FinalReview;