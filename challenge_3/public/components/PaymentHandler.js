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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BheW1lbnRIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJQYXltZW50SGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyIsIm5hbWVPbkNhcmQiLCJjcmVkaXRDYXJkTnVtIiwiY3Z2IiwiZXhwRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsY0FBTixTQUE2QkMsS0FBSyxDQUFDQyxTQUFuQyxDQUE2QztBQUMzQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNELEdBSDBDLENBSzNDO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFNLE1BQUEsS0FBSyxFQUFDLFNBQVo7QUFBc0IsTUFBQSxRQUFRLEVBQUUsS0FBS0QsS0FBTCxDQUFXRTtBQUEzQyxPQUNFLHNDQUNFLHFEQURGLEVBRUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLHdCQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFlBQXhCO0FBQXFDLE1BQUEsUUFBUSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csVUFBMUQ7QUFBc0UsTUFBQSxLQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSTtBQUF4RixNQUhGLEVBSUUsK0JBSkYsRUFLRSwrQkFMRixFQU1FO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYiw4QkFORixFQU9FO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxlQUF4QjtBQUF3QyxNQUFBLFFBQVEsRUFBRSxLQUFLSixLQUFMLENBQVdHLFVBQTdEO0FBQXlFLE1BQUEsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0s7QUFBM0YsTUFQRixFQVFFLCtCQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsZUFWRixFQVdFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxLQUF4QjtBQUE4QixNQUFBLFFBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdHLFVBQW5EO0FBQStELE1BQUEsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV007QUFBakYsTUFYRixFQVlFLCtCQVpGLEVBYUUsK0JBYkYsRUFjRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsb0JBZEYsRUFlRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsTUFBQSxRQUFRLEVBQUUsS0FBS04sS0FBTCxDQUFXRyxVQUF2RDtBQUFtRSxNQUFBLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdPO0FBQXJGLE1BZkYsRUFnQkUsK0JBaEJGLEVBaUJFLCtCQWpCRixFQWtCRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxJQUFJLEVBQUMsUUFBMUI7QUFBbUMsTUFBQSxLQUFLLEVBQUM7QUFBekMsTUFsQkYsQ0FERixDQURGO0FBd0JEOztBQW5DMEM7O0FBcUM3QyxlQUFlWCxjQUFmIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBQYXltZW50SGFuZGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy8gbmFtZU9uQ2FyZDogXCJcIixcbiAgLy8gICAgIGNyZWRpdENhcmROdW06IFwiXCIsXG4gIC8vICAgICBjdnY6IFwiXCIsXG4gIC8vICAgICBleHBEYXRlOiBcIlwiXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzcz1cInBheW1lbnRcIiBvblN1Ym1pdD17dGhpcy5wcm9wcy5uZXh0UGFnZX0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPlBheW1lbnRIYW5kbGVyPC9sZWdlbmQ+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGF5bWVudEluZm9cIj5OYW1lIE9uIENhcmQ6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVPbkNhcmRcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5uYW1lT25DYXJkfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXltZW50SW5mb1wiPkNyZWRpdCBDYXJkIE51bWJlcjogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0Q2FyZE51bVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99IHZhbHVlPXt0aGlzLnByb3BzLmNyZWRpdENhcmROdW19PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBheW1lbnRJbmZvXCI+Q1ZWOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdnZcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5jdnZ9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBheW1lbnRJbmZvXCI+RXhwIERhdGU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cERhdGVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5leHBEYXRlfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNIRUNLT1VUXCI+PC9pbnB1dD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRIYW5kbGVyOyJdfQ==