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
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "City: "), React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "Zipcode: "), React.createElement("input", {
      type: "text",
      name: "zipcode",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "addrInfo"
    }, "Country: "), React.createElement("input", {
      type: "text",
      name: "country",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "NEXT"
    })));
  }

}

export default AddressHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FkZHJlc3NIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJBZGRyZXNzSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsY0FBTixTQUE2QkMsS0FBSyxDQUFDQyxTQUFuQyxDQUE2QztBQUMzQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUdEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQU0sTUFBQSxLQUFLLEVBQUMsTUFBWjtBQUFtQixNQUFBLFFBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdFO0FBQXhDLE9BQ0Usc0NBQ0UscURBREYsRUFFRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsbUJBRkYsRUFHRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsYUFBeEI7QUFBc0MsTUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztBQUEzRCxNQUhGLEVBSUUsK0JBSkYsRUFLRSwrQkFMRixFQU1FO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixnQkFORixFQU9FO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixNQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBQXBELE1BUEYsRUFRRSwrQkFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG1CQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFNBQXhCO0FBQWtDLE1BQUEsUUFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0c7QUFBdkQsTUFYRixFQVlFLCtCQVpGLEVBYUUsK0JBYkYsRUFjRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsbUJBZEYsRUFlRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsTUFBQSxRQUFRLEVBQUUsS0FBS0gsS0FBTCxDQUFXRztBQUF2RCxNQWZGLEVBZ0JFLCtCQWhCRixFQWlCRSwrQkFqQkYsRUFrQkU7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsSUFBSSxFQUFDLFFBQTFCO0FBQW1DLE1BQUEsS0FBSyxFQUFDO0FBQXpDLE1BbEJGLENBREYsQ0FERjtBQXdCRDs7QUEvQjBDOztBQWlDN0MsZUFBZVAsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQWRkcmVzc0hhbmRsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzcz1cImFkZHJcIiBvblN1Ym1pdD17dGhpcy5wcm9wcy5uZXh0UGFnZX0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPkFkZHJlc3NIYW5kbGVyPC9sZWdlbmQ+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkckluZm9cIj5BZGRyZXNzOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzbGluZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+Q2l0eTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+WmlwY29kZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+Q291bnRyeTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiTkVYVFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzSGFuZGxlcjsiXX0=