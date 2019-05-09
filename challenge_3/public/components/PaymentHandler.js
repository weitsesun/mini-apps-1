class PaymentHandler extends React.Component {
  constructor(props) {
    super(props);
  } // nameOnCard: "",
  //     creditCardNum: "",
  //     cvv: "",
  //     expDate: ""


  render() {
    return React.createElement("form", {
      class: "payment",
      onSubmit: this.props.nextPage
    }, React.createElement("fieldset", null, React.createElement("legend", null, "PaymentHandler"), React.createElement("label", {
      class: "paymentInfo"
    }, "Name On Card: "), React.createElement("input", {
      type: "text",
      name: "nameOnCard",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "Credit Card Number: "), React.createElement("input", {
      type: "text",
      name: "creditCardNum",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "CVV: "), React.createElement("input", {
      type: "text",
      name: "cvv",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "paymentInfo"
    }, "Exp Date: "), React.createElement("input", {
      type: "text",
      name: "expDate",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "NEXT"
    })));
  }

}

export default PaymentHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BheW1lbnRIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJQYXltZW50SGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsY0FBTixTQUE2QkMsS0FBSyxDQUFDQyxTQUFuQyxDQUE2QztBQUMzQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNELEdBSDBDLENBSzNDO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFNLE1BQUEsS0FBSyxFQUFDLFNBQVo7QUFBc0IsTUFBQSxRQUFRLEVBQUUsS0FBS0QsS0FBTCxDQUFXRTtBQUEzQyxPQUNFLHNDQUNFLHFEQURGLEVBRUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLHdCQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFlBQXhCO0FBQXFDLE1BQUEsUUFBUSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0c7QUFBMUQsTUFIRixFQUlFLCtCQUpGLEVBS0UsK0JBTEYsRUFNRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsOEJBTkYsRUFPRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsZUFBeEI7QUFBd0MsTUFBQSxRQUFRLEVBQUUsS0FBS0gsS0FBTCxDQUFXRztBQUE3RCxNQVBGLEVBUUUsK0JBUkYsRUFTRSwrQkFURixFQVVFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixlQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLE1BQUEsUUFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0c7QUFBbkQsTUFYRixFQVlFLCtCQVpGLEVBYUUsK0JBYkYsRUFjRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsb0JBZEYsRUFlRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsTUFBQSxRQUFRLEVBQUUsS0FBS0gsS0FBTCxDQUFXRztBQUF2RCxNQWZGLEVBZ0JFLCtCQWhCRixFQWlCRSwrQkFqQkYsRUFrQkU7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsSUFBSSxFQUFDLFFBQTFCO0FBQW1DLE1BQUEsS0FBSyxFQUFDO0FBQXpDLE1BbEJGLENBREYsQ0FERjtBQXdCRDs7QUFuQzBDOztBQXFDN0MsZUFBZVAsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgUGF5bWVudEhhbmRsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vIG5hbWVPbkNhcmQ6IFwiXCIsXG4gIC8vICAgICBjcmVkaXRDYXJkTnVtOiBcIlwiLFxuICAvLyAgICAgY3Z2OiBcIlwiLFxuICAvLyAgICAgZXhwRGF0ZTogXCJcIlxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3M9XCJwYXltZW50XCIgb25TdWJtaXQ9e3RoaXMucHJvcHMubmV4dFBhZ2V9PlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5QYXltZW50SGFuZGxlcjwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBheW1lbnRJbmZvXCI+TmFtZSBPbiBDYXJkOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lT25DYXJkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGF5bWVudEluZm9cIj5DcmVkaXQgQ2FyZCBOdW1iZXI6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdENhcmROdW1cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXltZW50SW5mb1wiPkNWVjogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGF5bWVudEluZm9cIj5FeHAgRGF0ZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwRGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiTkVYVFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYXltZW50SGFuZGxlcjsiXX0=