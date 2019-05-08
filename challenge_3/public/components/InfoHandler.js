class InfoHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", null, React.createElement("h1", null, "infoHandler"), React.createElement("label", {
      class: "personInfo"
    }, "Name: "), React.createElement("input", {
      type: "text",
      name: "name"
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Email: "), React.createElement("input", {
      type: "text",
      name: "email"
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("label", {
      class: "personInfo"
    }, "Password: "), React.createElement("input", {
      type: "text",
      name: "password"
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "button",
      name: "submit",
      value: "Submit"
    }));
  }

}

export default InfoHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0luZm9IYW5kbGVyLmpzeCJdLCJuYW1lcyI6WyJJbmZvSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBTixTQUEwQkMsS0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFLGtDQUNFLDhDQURGLEVBRUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLGdCQUZGLEVBR0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BSEYsRUFJRSwrQkFKRixFQUtFLCtCQUxGLEVBTUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLGlCQU5GLEVBT0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BUEYsRUFRRSwrQkFSRixFQVNFLCtCQVRGLEVBVUU7QUFBTyxNQUFBLEtBQUssRUFBQztBQUFiLG9CQVZGLEVBV0U7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BWEYsRUFZRSwrQkFaRixFQWFFLCtCQWJGLEVBY0U7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsSUFBSSxFQUFDLFFBQTFCO0FBQW1DLE1BQUEsS0FBSyxFQUFDO0FBQXpDLE1BZEYsQ0FERjtBQWtCRDs7QUF4QnVDOztBQTBCMUMsZUFBZUwsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgSW5mb0hhbmRsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxoMT5pbmZvSGFuZGxlcjwvaDE+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5OYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcnNvbkluZm9cIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCI+PC9pbnB1dD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVyc29uSW5mb1wiPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIj48L2lucHV0PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmZvSGFuZGxlcjsiXX0=