class InfoHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", {
      class: "info"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0luZm9IYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJJbmZvSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNoYW5nZUluZm8iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBTixTQUEwQkMsS0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQU0sTUFBQSxLQUFLLEVBQUM7QUFBWixPQUNFLHNDQUNFLGtEQURGLEVBRUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLGdCQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLE1BQXhCO0FBQStCLE1BQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsVUFBcEQ7QUFBZ0UsTUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztBQUFsRixNQUhGLEVBSUUsK0JBSkYsRUFLRSwrQkFMRixFQU1FO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixpQkFORixFQU9FO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxPQUF4QjtBQUFnQyxNQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdFLFVBQXJEO0FBQWlFLE1BQUEsS0FBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0k7QUFBbkYsTUFQRixFQVFFLCtCQVJGLEVBU0UsK0JBVEYsRUFVRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsb0JBVkYsRUFXRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsVUFBeEI7QUFBbUMsTUFBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXRSxVQUF4RDtBQUFvRSxNQUFBLEtBQUssRUFBRSxLQUFLRixLQUFMLENBQVdLO0FBQXRGLE1BWEYsRUFZRSwrQkFaRixFQWFFLCtCQWJGLEVBY0U7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsSUFBSSxFQUFDLFFBQTFCO0FBQW1DLE1BQUEsS0FBSyxFQUFDO0FBQXpDLE1BZEYsQ0FERixDQURGO0FBb0JEOztBQTNCdUM7O0FBNkIxQyxlQUFlVCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBJbmZvSGFuZGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5JbmZvSGFuZGxlcjwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMubmFtZX0+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVyc29uSW5mb1wiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99IHZhbHVlPXt0aGlzLnByb3BzLmVtYWlsfT48L2lucHV0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJzb25JbmZvXCI+UGFzc3dvcmQ6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30gdmFsdWU9e3RoaXMucHJvcHMucGFzc3dvcmR9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiTkVYVFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmZvSGFuZGxlcjsiXX0=