class InfoHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", {
      class: "info",
      onSubmit: this.props.nextPage
    }, React.createElement("fieldset", null, React.createElement("legend", null, "InfoHandler"), React.createElement("label", {
      class: "personInfo"
    }, "Name: "), React.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.props.changeInfo,
      value: this.props.name
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Email: "), React.createElement("input", {
      type: "text",
      name: "email",
      onChange: this.props.changeInfo,
      value: this.props.email
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Password: "), React.createElement("input", {
      type: "text",
      name: "password",
      onChange: this.props.changeInfo,
      value: this.props.password
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "NEXT"
    })));
  }

}

export default InfoHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0luZm9IYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJJbmZvSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxXQUFOLFNBQTBCQyxLQUFLLENBQUNDLFNBQWhDLENBQTBDO0FBQ3hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFBTSxNQUFBLEtBQUssRUFBQyxNQUFaO0FBQW1CLE1BQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBeEMsT0FDRSxzQ0FDRSxrREFERixFQUVFO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixnQkFGRixFQUdFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixNQUFBLFFBQVEsRUFBRSxLQUFLRixLQUFMLENBQVdHLFVBQXBEO0FBQWdFLE1BQUEsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBbEYsTUFIRixFQUlFLCtCQUpGLEVBS0UsK0JBTEYsRUFNRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsaUJBTkYsRUFPRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsT0FBeEI7QUFBZ0MsTUFBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXRyxVQUFyRDtBQUFpRSxNQUFBLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdLO0FBQW5GLE1BUEYsRUFRRSwrQkFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG9CQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFVBQXhCO0FBQW1DLE1BQUEsUUFBUSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0csVUFBeEQ7QUFBb0UsTUFBQSxLQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXTTtBQUF0RixNQVhGLEVBWUUsK0JBWkYsRUFhRSwrQkFiRixFQWNFO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLElBQUksRUFBQyxRQUExQjtBQUFtQyxNQUFBLEtBQUssRUFBQztBQUF6QyxNQWRGLENBREYsQ0FERjtBQW9CRDs7QUEzQnVDOztBQTZCMUMsZUFBZVYsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgSW5mb0hhbmRsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzcz1cImluZm9cIiBvblN1Ym1pdD17dGhpcy5wcm9wcy5uZXh0UGFnZX0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPkluZm9IYW5kbGVyPC9sZWdlbmQ+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVyc29uSW5mb1wiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5uYW1lfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJzb25JbmZvXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuZW1haWx9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5QYXNzd29yZDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VJbmZvfSB2YWx1ZT17dGhpcy5wcm9wcy5wYXNzd29yZH0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJORVhUXCI+PC9pbnB1dD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZm9IYW5kbGVyOyJdfQ==