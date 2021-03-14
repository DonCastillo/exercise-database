import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "./../store";
import "./App.css";

class App extends Component {
	state = {
		exercises,
	};

	render() {
		return (
			<Fragment>
				<Header />
				<Exercises />
				<Footer muscles={muscles}/>
			</Fragment>
		);
	}
}

export default App;
