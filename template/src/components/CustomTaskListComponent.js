import React from "react";

const taskListStyles = {
  padding: "10px",
  margin: "0px",
  color: "#fff",
  background: "#000"
};

const imgStyles = {
  height: "2em",
  width: "2em",
  verticalAlign: "middle"
};

export class CustomTaskListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }
  async componentDidMount(){
    fetch("/api/demoTime").then(async resp => this.setState({text: `loaded at: ${await resp.text()}`}));
  }
  render() {
    return (
      <div style={taskListStyles}>
        <p>This is a demo component {this.state.text}</p>
        <p>Powered by: <img style={imgStyles} src="/assets/backend-logo.svg" alt="No backend" /></p>
      </div>
    );
  }
}

// // Below uses React hooks which are not currently supported by flex-ui React version
// const CustomTaskListComponent = (props) => {
//   const [text, setText] = useState("");
//   useEffect(
//     const fetchText = async () => {
//       fetch("/api/demoTime").then(async resp => setText(`loaded at: ${resp.text()}`));
//     }
//     fetchText();
//   }, []);
//   return (<div style={taskListStyles}>
//     <p>This is a demo component {text}</p>
//     <p>Powered by: <img style={imgStyles} src="/assets/backend-logo.svg" alt="No backend"/></p>
//   </div>);
// };
//
export default CustomTaskListComponent;
