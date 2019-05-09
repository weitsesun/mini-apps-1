class FinalReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("h2", null, "InfoHandler"), React.createElement("ul", null, React.createElement("li", {
      name: "name"
    }, React.createElement("span", null, "Name:"), this.props.info.name), React.createElement("li", {
      name: "email"
    }, React.createElement("span", null, "Email:"), this.props.info.email)), React.createElement("h2", null, "AddressHandler"), React.createElement("ul", null, React.createElement("li", {
      name: "addressline"
    }, React.createElement("span", null, "Address:"), this.props.info.addressline), React.createElement("li", {
      name: "city"
    }, React.createElement("span", null, "City:"), this.props.info.city), React.createElement("li", {
      name: "zipcode"
    }, React.createElement("span", null, "Zipcode:"), this.props.info.zipcode), React.createElement("li", {
      name: "country"
    }, React.createElement("span", null, "Country:"), this.props.info.country)), React.createElement("h2", null, "PaymentHandler"), React.createElement("ul", null, React.createElement("li", {
      name: "nameOnCard"
    }, React.createElement("span", null, "Card Holder:"), this.props.info.nameOnCard), React.createElement("li", {
      name: "creditCardNum"
    }, React.createElement("span", null, "Card Number:"), this.props.info.creditCardNum), React.createElement("li", {
      name: "cvv"
    }, React.createElement("span", null, "CVV:"), this.props.info.cvv), React.createElement("li", {
      name: "expDate"
    }, React.createElement("span", null, "Exp Date:"), this.props.info.expDate)), React.createElement("button", {
      type: "submit",
      name: "submit",
      value: "CHECKOUT",
      onClick: this.props.sendToData
    }, "Send"));
  }

}

export default FinalReview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZpbmFsUmV2aWV3LmpzeCJdLCJuYW1lcyI6WyJGaW5hbFJldmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImluZm8iLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzbGluZSIsImNpdHkiLCJ6aXBjb2RlIiwiY291bnRyeSIsIm5hbWVPbkNhcmQiLCJjcmVkaXRDYXJkTnVtIiwiY3Z2IiwiZXhwRGF0ZSIsInNlbmRUb0RhdGEiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLFdBQU4sU0FBMEJDLEtBQUssQ0FBQ0MsU0FBaEMsQ0FBMEM7QUFDeENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRSxpQ0FDRSw4Q0FERixFQUVFLGdDQUNFO0FBQUksTUFBQSxJQUFJLEVBQUM7QUFBVCxPQUFnQiwwQ0FBaEIsRUFBbUMsS0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCQyxJQUFuRCxDQURGLEVBRUU7QUFBSSxNQUFBLElBQUksRUFBQztBQUFULE9BQWlCLDJDQUFqQixFQUFxQyxLQUFLSCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JFLEtBQXJELENBRkYsQ0FGRixFQVFFLGlEQVJGLEVBU0UsZ0NBQ0U7QUFBSSxNQUFBLElBQUksRUFBQztBQUFULE9BQXVCLDZDQUF2QixFQUE2QyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JHLFdBQTdELENBREYsRUFFRTtBQUFJLE1BQUEsSUFBSSxFQUFDO0FBQVQsT0FBZ0IsMENBQWhCLEVBQW1DLEtBQUtMLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkksSUFBbkQsQ0FGRixFQUdFO0FBQUksTUFBQSxJQUFJLEVBQUM7QUFBVCxPQUFtQiw2Q0FBbkIsRUFBeUMsS0FBS04sS0FBTCxDQUFXRSxJQUFYLENBQWdCSyxPQUF6RCxDQUhGLEVBSUU7QUFBSSxNQUFBLElBQUksRUFBQztBQUFULE9BQW1CLDZDQUFuQixFQUF5QyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLE9BQXpELENBSkYsQ0FURixFQWdCRSxpREFoQkYsRUFpQkUsZ0NBQ0U7QUFBSSxNQUFBLElBQUksRUFBQztBQUFULE9BQXNCLGlEQUF0QixFQUFnRCxLQUFLUixLQUFMLENBQVdFLElBQVgsQ0FBZ0JPLFVBQWhFLENBREYsRUFFRTtBQUFJLE1BQUEsSUFBSSxFQUFDO0FBQVQsT0FBeUIsaURBQXpCLEVBQW1ELEtBQUtULEtBQUwsQ0FBV0UsSUFBWCxDQUFnQlEsYUFBbkUsQ0FGRixFQUdFO0FBQUksTUFBQSxJQUFJLEVBQUM7QUFBVCxPQUFlLHlDQUFmLEVBQWlDLEtBQUtWLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQlMsR0FBakQsQ0FIRixFQUlFO0FBQUksTUFBQSxJQUFJLEVBQUM7QUFBVCxPQUFtQiw4Q0FBbkIsRUFBMEMsS0FBS1gsS0FBTCxDQUFXRSxJQUFYLENBQWdCVSxPQUExRCxDQUpGLENBakJGLEVBdUJFO0FBQVEsTUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixNQUFBLElBQUksRUFBQyxRQUEzQjtBQUFvQyxNQUFBLEtBQUssRUFBQyxVQUExQztBQUFxRCxNQUFBLE9BQU8sRUFBRSxLQUFLWixLQUFMLENBQVdhO0FBQXpFLGNBdkJGLENBREY7QUEyQkQ7O0FBakN1Qzs7QUFvQzFDLGVBQWVqQixXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBGaW5hbFJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5JbmZvSGFuZGxlcjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgbmFtZT1cIm5hbWVcIj48c3Bhbj5OYW1lOjwvc3Bhbj57dGhpcy5wcm9wcy5pbmZvLm5hbWV9PC9saT5cbiAgICAgICAgICA8bGkgbmFtZT1cImVtYWlsXCI+PHNwYW4+RW1haWw6PC9zcGFuPnt0aGlzLnByb3BzLmluZm8uZW1haWx9PC9saT5cbiAgICAgICAgICB7LyogPGxpIG5hbWU9XCJwYXNzd29yZFwiPlBhc3N3b3JkOiB7dGhpcy5wcm9wcy5pbmZvLnBhc3N3b3JkfTwvbGk+ICovfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxoMj5BZGRyZXNzSGFuZGxlcjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgbmFtZT1cImFkZHJlc3NsaW5lXCI+PHNwYW4+QWRkcmVzczo8L3NwYW4+e3RoaXMucHJvcHMuaW5mby5hZGRyZXNzbGluZX08L2xpPlxuICAgICAgICAgIDxsaSBuYW1lPVwiY2l0eVwiPjxzcGFuPkNpdHk6PC9zcGFuPnt0aGlzLnByb3BzLmluZm8uY2l0eX08L2xpPlxuICAgICAgICAgIDxsaSBuYW1lPVwiemlwY29kZVwiPjxzcGFuPlppcGNvZGU6PC9zcGFuPnt0aGlzLnByb3BzLmluZm8uemlwY29kZX08L2xpPlxuICAgICAgICAgIDxsaSBuYW1lPVwiY291bnRyeVwiPjxzcGFuPkNvdW50cnk6PC9zcGFuPnt0aGlzLnByb3BzLmluZm8uY291bnRyeX08L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxoMj5QYXltZW50SGFuZGxlcjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgbmFtZT1cIm5hbWVPbkNhcmRcIj48c3Bhbj5DYXJkIEhvbGRlcjo8L3NwYW4+e3RoaXMucHJvcHMuaW5mby5uYW1lT25DYXJkfTwvbGk+XG4gICAgICAgICAgPGxpIG5hbWU9XCJjcmVkaXRDYXJkTnVtXCI+PHNwYW4+Q2FyZCBOdW1iZXI6PC9zcGFuPnt0aGlzLnByb3BzLmluZm8uY3JlZGl0Q2FyZE51bX08L2xpPlxuICAgICAgICAgIDxsaSBuYW1lPVwiY3Z2XCI+PHNwYW4+Q1ZWOjwvc3Bhbj57dGhpcy5wcm9wcy5pbmZvLmN2dn08L2xpPlxuICAgICAgICAgIDxsaSBuYW1lPVwiZXhwRGF0ZVwiPjxzcGFuPkV4cCBEYXRlOjwvc3Bhbj57dGhpcy5wcm9wcy5pbmZvLmV4cERhdGV9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ0hFQ0tPVVRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNlbmRUb0RhdGF9PlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5hbFJldmlldzsiXX0=