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
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Email: "), React.createElement("input", {
      type: "text",
      name: "email",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Password: "), React.createElement("input", {
      type: "password",
      name: "password",
      onChange: this.props.changeInfo
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      name: "submit",
      value: "NEXT"
    })));
  }

}

export default InfoHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0luZm9IYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJJbmZvSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm5leHRQYWdlIiwiY2hhbmdlSW5mbyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBTixTQUEwQkMsS0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQU0sTUFBQSxLQUFLLEVBQUMsTUFBWjtBQUFtQixNQUFBLFFBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdFO0FBQXhDLE9BQ0Usc0NBQ0Usa0RBREYsRUFFRTtBQUFPLE1BQUEsS0FBSyxFQUFDO0FBQWIsZ0JBRkYsRUFHRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsTUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztBQUFwRCxNQUhGLEVBSUUsK0JBSkYsRUFLRSwrQkFMRixFQU1FO0FBQU8sTUFBQSxLQUFLLEVBQUM7QUFBYixpQkFORixFQU9FO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQyxPQUF4QjtBQUFnQyxNQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBQXJELE1BUEYsRUFRRSwrQkFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG9CQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxVQUFaO0FBQXVCLE1BQUEsSUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUEsUUFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0c7QUFBNUQsTUFYRixFQVlFLCtCQVpGLEVBYUUsK0JBYkYsRUFjRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxJQUFJLEVBQUMsUUFBMUI7QUFBbUMsTUFBQSxLQUFLLEVBQUM7QUFBekMsTUFkRixDQURGLENBREY7QUFvQkQ7O0FBM0J1Qzs7QUE2QjFDLGVBQWVQLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEluZm9IYW5kbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3M9XCJpbmZvXCIgb25TdWJtaXQ9e3RoaXMucHJvcHMubmV4dFBhZ2V9PlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5JbmZvSGFuZGxlcjwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVyc29uSW5mb1wiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUluZm99PjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5QYXNzd29yZDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSW5mb30+PC9pbnB1dD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJORVhUXCI+PC9pbnB1dD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZm9IYW5kbGVyOyJdfQ==