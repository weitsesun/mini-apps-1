
class InfoHandler extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form class="info">
        <fieldset>
          <legend>InfoHandler</legend>
          <label class="personInfo">Name: </label>
          <input type="text" name="name" onChange={this.props.changeInfo} value={this.props.name}></input>
          <br/>
          <br/>
          <label class="personInfo">Email: </label>
          <input type="text" name="email" onChange={this.props.changeInfo} value={this.props.email}></input>
          <br/>
          <br/>
          <label class="personInfo">Password: </label>
          <input type="text" name="password" onChange={this.props.changeInfo} value={this.props.password}></input>
          <br/>
          <br/>
          <input type="submit" name="submit" value="NEXT"></input>
        </fieldset>
      </form>
    )
  }
}
export default InfoHandler;