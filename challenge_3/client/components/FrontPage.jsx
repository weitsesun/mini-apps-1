import ProcessCheckout from './ProcessCheckout.js';
import InfoHandler from './InfoHandler.js';
import AddressHandler from './AddressHandler.js';
import PaymentHandler from './PaymentHandler.js';
import FinalReview from './FinalReview.js';


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
      expDate: "",
      currentlyDisplayedForm: 0
    }
    this.changeInfo = this.changeInfo.bind(this);
    this.changeDisplayedForm = this.changeDisplayedForm.bind(this);
    this.postToDatabase = this.postToDatabase.bind(this);
  }

  changeInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeDisplayedForm(e) {
    e.preventDefault();
    var curForm = this.state.currentlyDisplayedForm;
    curForm = (curForm + 1) % 5;
    this.setState({
      currentlyDisplayedForm: curForm
    })
  }

  postToDatabase(e) {
    e.preventDefault();
    console.log(this.state);
    console.log("postTodatabase invoked");
    axios.post("http://localhost:3000", this.state)
      .then((res)=>{
        console.log('Success: ', res);
      })
      .catch((err)=>{
        console.log('Err: ', err);
      })
  }

  pageRender() {
    switch(this.state.currentlyDisplayedForm) {
      case 0:
        return <ProcessCheckout nextPage={this.changeDisplayedForm}/>
      case 1:
        return <InfoHandler changeInfo={this.changeInfo} nextPage={this.changeDisplayedForm}/>
        break;
      case 2:
        return <AddressHandler changeInfo={this.changeInfo} nextPage={this.changeDisplayedForm}/>
        break;
      case 3:
        return <PaymentHandler changeInfo={this.changeInfo} nextPage={this.changeDisplayedForm}/>
        break;
      case 4:
        return <FinalReview info={this.state} sendToData={this.postToDatabase}/>
        break;
      default:
        return <InfoHandler changeInfo={this.changeInfo} nextPage={this.changeDisplayedForm}/>
    }
  }

  render() {
    return (
      <div>
        <h1>Checking out...</h1>
        {this.pageRender()}
      </div>
    )
  }
}

export default FrontPage;