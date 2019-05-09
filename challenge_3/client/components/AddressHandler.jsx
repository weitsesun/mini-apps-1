
class AddressHandler extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <form class="addr" onSubmit={this.props.nextPage}>
        <fieldset>
          <legend>AddressHandler</legend>
          <label class="addrInfo">Address: </label>
          <input type="text" name="addressline" onChange={this.props.changeInfo} value={this.props.addressline}></input>
          <br/>
          <br/>
          <label class="addrInfo">City: </label>
          <input type="text" name="city" onChange={this.props.changeInfo} value={this.props.city}></input>
          <br/>
          <br/>
          <label class="addrInfo">Zipcode: </label>
          <input type="text" name="zipcode" onChange={this.props.changeInfo} value={this.props.zipcode}></input>
          <br/>
          <br/>
          <label class="addrInfo">Country: </label>
          <input type="text" name="country" onChange={this.props.changeInfo} value={this.props.country}></input>
          <br/>
          <br/>
          <input type="submit" name="submit" value="NEXT"></input>
        </fieldset>
      </form>
    )
  }
}
export default AddressHandler;