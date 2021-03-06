
class PaymentHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  // nameOnCard: "",
  //     creditCardNum: "",
  //     cvv: "",
  //     expDate: ""

  render() {
    return (
      <form class="payment" onSubmit={this.props.nextPage}>
        <fieldset>
          <legend>PaymentHandler</legend>
          <label class="paymentInfo">Name On Card: </label>
          <input type="text" name="nameOnCard" onChange={this.props.changeInfo}></input>
          <br/>
          <br/>
          <label class="paymentInfo">Credit Card Number: </label>
          <input type="text" name="creditCardNum" onChange={this.props.changeInfo}></input>
          <br/>
          <br/>
          <label class="paymentInfo">CVV: </label>
          <input type="text" name="cvv" onChange={this.props.changeInfo}></input>
          <br/>
          <br/>
          <label class="paymentInfo">Exp Date: </label>
          <input type="text" name="expDate" onChange={this.props.changeInfo}></input>
          <br/>
          <br/>
          <input type="submit" name="submit" value="NEXT"></input>
        </fieldset>
      </form>
    )
  }
}
export default PaymentHandler;