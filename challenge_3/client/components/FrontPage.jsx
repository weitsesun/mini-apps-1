import InfoHandler from './InfoHandler.js'

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <InfoHandler/>
      </div>
    )
  }
}

export default FrontPage;