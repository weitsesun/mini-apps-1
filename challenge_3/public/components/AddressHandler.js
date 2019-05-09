class AddressHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", {
      class: "addr",
      onSubmit: this.props.nextPage
    }, React.createElement("fieldset", null, React.createElement("legend", null, "AddressHandler"), React.createElement("label", {
      class: "addrInfo"
    }, "Address: "), React.createElement("input", {
      type: "text",
      name: "addressline",
      onChange: this.props.changeInfo,
      value: this.props.addressline
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "City: "), React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.props.changeInfo,
      value: this.props.city
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "Zipcode: "), React.createElement("input", {
      type: "text",
      name: "zipcode",
      onChange: this.props.changeInfo,
      value: this.props.zipcode
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "Country: "), React.createElement("input", {
      type: "text",
      name: "country",
      onChange: this.props.changeInfo,
      value: this.props.country
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "NEXT"
    })));
  }

}

export default AddressHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FkZHJlc3NIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJBZGRyZXNzSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyIsImFkZHJlc3NsaW5lIiwiY2l0eSIsInppcGNvZGUiLCJjb3VudHJ5Il0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxjQUFOLFNBQTZCQyxLQUFLLENBQUNDLFNBQW5DLENBQTZDO0FBQzNDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0Q7O0FBR0RDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFBTSxNQUFBLEtBQUssRUFBQyxNQUFaO0FBQW1CLE1BQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBeEMsT0FDRSxzQ0FDRSxxREFERixFQUVFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixtQkFGRixFQUdFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxhQUF4QjtBQUFzQyxNQUFBLFFBQVEsRUFBRSxLQUFLRixLQUFMLENBQVdHLFVBQTNEO0FBQXVFLE1BQUEsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBekYsTUFIRixFQUlFLCtCQUpGLEVBS0UsK0JBTEYsRUFNRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsZ0JBTkYsRUFPRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsTUFBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXRyxVQUFwRDtBQUFnRSxNQUFBLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdLO0FBQWxGLE1BUEYsRUFRRSwrQkFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG1CQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFNBQXhCO0FBQWtDLE1BQUEsUUFBUSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0csVUFBdkQ7QUFBbUUsTUFBQSxLQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXTTtBQUFyRixNQVhGLEVBWUUsK0JBWkYsRUFhRSwrQkFiRixFQWNFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixtQkFkRixFQWVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxTQUF4QjtBQUFrQyxNQUFBLFFBQVEsRUFBRSxLQUFLTixLQUFMLENBQVdHLFVBQXZEO0FBQW1FLE1BQUEsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV087QUFBckYsTUFmRixFQWdCRSwrQkFoQkYsRUFpQkUsK0JBakJGLEVBa0JFO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLElBQUksRUFBQyxRQUExQjtBQUFtQyxNQUFBLEtBQUssRUFBQztBQUF6QyxNQWxCRixDQURGLENBREY7QUF3QkQ7O0FBL0IwQzs7QUFpQzdDLGVBQWVYLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFkZHJlc3NIYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3M9XCJhZGRyXCIgb25TdWJtaXQ9e3RoaXMucHJvcHMubmV4dFBhZ2V9PlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5BZGRyZXNzSGFuZGxlcjwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+QWRkcmVzczogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc2xpbmVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5hZGRyZXNzbGluZX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkckluZm9cIj5DaXR5OiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuY2l0eX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkckluZm9cIj5aaXBjb2RlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuemlwY29kZX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkckluZm9cIj5Db3VudHJ5OiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3VudHJ5XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuY291bnRyeX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJORVhUXCI+PC9pbnB1dD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NIYW5kbGVyOyJdfQ==