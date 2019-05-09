
class ProcessCheckout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="ProcessCheckout">
        <button name="processToCheckout" onClick={this.props.nextPage}>PROCESS TO CHECKOUT</button>
      </div>
    )
  }
}
export default ProcessCheckout;