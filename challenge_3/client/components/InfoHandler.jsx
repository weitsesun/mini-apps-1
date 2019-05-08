
class InfoHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h1>infoHandler</h1>
        <label class="personInfo">Name: </label>
        <input type="text" name="name"></input>
        <br/>
        <br/>
        <label class="personInfo">Email: </label>
        <input type="text" name="email"></input>
        <br/>
        <br/>
        <label class="personInfo">Password: </label>
        <input type="text" name="password"></input>
        <br/>
        <br/>
        <input type="button" name="submit" value="Submit"></input>
      </form>
    )
  }
}
export default InfoHandler;