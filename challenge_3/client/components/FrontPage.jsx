import InfoHandler from './InfoHandler.js'
import AddressHandler from './AddressHandler.js'
import PaymentHandler from './PaymentHandler.js'

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      addressline: "",
      city: "",
      zipcode: "",
      country: "",
      nameOnCard: "",
      creditCardNum: "",
      cvv: "",
      expDate: ""
    }
  }

  changeInfo(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Checking out...</h1>
        <InfoHandler changeInfo={this.changeInfo.bind(this)}/>
        <br/>
        <AddressHandler changeInfo={this.changeInfo.bind(this)}/>
        <br/>
        <PaymentHandler changeInfo={this.changeInfo.bind(this)}/>
      </div>
    )
  }
}

export default FrontPage;