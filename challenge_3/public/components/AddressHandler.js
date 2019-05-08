class AddressHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", {
      class: "addr"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FkZHJlc3NIYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJBZGRyZXNzSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNoYW5nZUluZm8iLCJhZGRyZXNzbGluZSIsImNpdHkiLCJ6aXBjb2RlIiwiY291bnRyeSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsY0FBTixTQUE2QkMsS0FBSyxDQUFDQyxTQUFuQyxDQUE2QztBQUMzQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUdEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQU0sTUFBQSxLQUFLLEVBQUM7QUFBWixPQUNFLHNDQUNFLHFEQURGLEVBRUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG1CQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLGFBQXhCO0FBQXNDLE1BQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsVUFBM0Q7QUFBdUUsTUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztBQUF6RixNQUhGLEVBSUUsK0JBSkYsRUFLRSwrQkFMRixFQU1FO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixnQkFORixFQU9FO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixNQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdFLFVBQXBEO0FBQWdFLE1BQUEsS0FBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0k7QUFBbEYsTUFQRixFQVFFLCtCQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsbUJBVkYsRUFXRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsTUFBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXRSxVQUF2RDtBQUFtRSxNQUFBLEtBQUssRUFBRSxLQUFLRixLQUFMLENBQVdLO0FBQXJGLE1BWEYsRUFZRSwrQkFaRixFQWFFLCtCQWJGLEVBY0U7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG1CQWRGLEVBZUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLFNBQXhCO0FBQWtDLE1BQUEsUUFBUSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsVUFBdkQ7QUFBbUUsTUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXTTtBQUFyRixNQWZGLEVBZ0JFLCtCQWhCRixFQWlCRSwrQkFqQkYsRUFrQkU7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsSUFBSSxFQUFDLFFBQTFCO0FBQW1DLE1BQUEsS0FBSyxFQUFDO0FBQXpDLE1BbEJGLENBREYsQ0FERjtBQXdCRDs7QUEvQjBDOztBQWlDN0MsZUFBZVYsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQWRkcmVzc0hhbmRsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzcz1cImFkZHJcIj5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsZWdlbmQ+QWRkcmVzc0hhbmRsZXI8L2xlZ2VuZD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJhZGRySW5mb1wiPkFkZHJlc3M6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NsaW5lXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMuYWRkcmVzc2xpbmV9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+Q2l0eTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99IHZhbHVlPXt0aGlzLnByb3BzLmNpdHl9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+WmlwY29kZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99IHZhbHVlPXt0aGlzLnByb3BzLnppcGNvZGV9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImFkZHJJbmZvXCI+Q291bnRyeTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99IHZhbHVlPXt0aGlzLnByb3BzLmNvdW50cnl9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiTkVYVFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzSGFuZGxlcjsiXX0=