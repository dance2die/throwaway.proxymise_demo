import React from "react";
import ReactDOM from "react-dom";
import proxymise from "proxymise";

import "./styles.css";

class App extends React.Component {
  state = { posts: [] };
  static defaultProps = { posts: [] };

  componentDidMount = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    // fetch(url)
    //   .then(response => response.json())
    //   .then(posts => console.log("posts1", posts));

    // const posts2 = await fetch(url).then(response => response.json());
    // console.log("posts2", posts2);

    const posts3 = await proxymise(fetch(url)).json();
    console.log("posts3", posts3);
  };

  render() {
    return <div>hi</div>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
