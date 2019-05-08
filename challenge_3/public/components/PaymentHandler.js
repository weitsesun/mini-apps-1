class PaymentHandler extends React.Component {
  constructor(props) {
    super(props);
  } // nameOnCard: "",
  //     creditCardNum: "",
  //     cvv: "",
  //     expDate: ""


  render() {
    return React.createElement("form", {
      class: "payment"
    }, React.createElement("fieldset", null, React.createElement("legend", null, "PaymentHandler"), React.createElement("label", {
      class: "paymentInfo"
    }, "Name On Card: "), React.createElement("input", {
      type: "text",
      name: "nameOnCard",
      onChange: this.props.changeInfo,
      value: this.props.nameOnCard
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "Credit Card Number: "), React.createElement("input", {
      type: "text",
      name: "creditCardNum",
      onChange: this.props.changeInfo,
      value: this.props.creditCardNum
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "CVV: "), React.createElement("input", {
      type: "text",
      name: "cvv",
      onChange: this.props.changeInfo,
      value: this.props.cvv
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "Exp Date: "), React.createElement("input", {
      type: "text",
      name: "expDate",
      onChange: this.props.changeInfo,
      value: this.props.expDate
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "CHECKOUT"
    })));
  }

}

export default PaymentHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BheW1lbnRIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJQYXltZW50SGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNoYW5nZUluZm8iLCJuYW1lT25DYXJkIiwiY3JlZGl0Q2FyZE51bSIsImN2diIsImV4cERhdGUiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLGNBQU4sU0FBNkJDLEtBQUssQ0FBQ0MsU0FBbkMsQ0FBNkM7QUFDM0NDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRCxHQUgwQyxDQUszQztBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFBTSxNQUFBLEtBQUssRUFBQztBQUFaLE9BQ0Usc0NBQ0UscURBREYsRUFFRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsd0JBRkYsRUFHRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsWUFBeEI7QUFBcUMsTUFBQSxRQUFRLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxVQUExRDtBQUFzRSxNQUFBLEtBQUssRUFBRSxLQUFLRixLQUFMLENBQVdHO0FBQXhGLE1BSEYsRUFJRSwrQkFKRixFQUtFLCtCQUxGLEVBTUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLDhCQU5GLEVBT0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLGVBQXhCO0FBQXdDLE1BQUEsUUFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsVUFBN0Q7QUFBeUUsTUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXSTtBQUEzRixNQVBGLEVBUUUsK0JBUkYsRUFTRSwrQkFURixFQVVFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixlQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLE1BQUEsUUFBUSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0UsVUFBbkQ7QUFBK0QsTUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXSztBQUFqRixNQVhGLEVBWUUsK0JBWkYsRUFhRSwrQkFiRixFQWNFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixvQkFkRixFQWVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxTQUF4QjtBQUFrQyxNQUFBLFFBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdFLFVBQXZEO0FBQW1FLE1BQUEsS0FBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV007QUFBckYsTUFmRixFQWdCRSwrQkFoQkYsRUFpQkUsK0JBakJGLEVBa0JFO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLElBQUksRUFBQyxRQUExQjtBQUFtQyxNQUFBLEtBQUssRUFBQztBQUF6QyxNQWxCRixDQURGLENBREY7QUF3QkQ7O0FBbkMwQzs7QUFxQzdDLGVBQWVWLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFBheW1lbnRIYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICAvLyBuYW1lT25DYXJkOiBcIlwiLFxuICAvLyAgICAgY3JlZGl0Q2FyZE51bTogXCJcIixcbiAgLy8gICAgIGN2djogXCJcIixcbiAgLy8gICAgIGV4cERhdGU6IFwiXCJcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzPVwicGF5bWVudFwiPlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5QYXltZW50SGFuZGxlcjwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBheW1lbnRJbmZvXCI+TmFtZSBPbiBDYXJkOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lT25DYXJkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMubmFtZU9uQ2FyZH0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGF5bWVudEluZm9cIj5DcmVkaXQgQ2FyZCBOdW1iZXI6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdENhcmROdW1cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5jcmVkaXRDYXJkTnVtfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXltZW50SW5mb1wiPkNWVjogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuY3Z2fT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXltZW50SW5mb1wiPkV4cCBEYXRlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBEYXRlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuZXhwRGF0ZX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJDSEVDS09VVFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYXltZW50SGFuZGxlcjsiXX0=