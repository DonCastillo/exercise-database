import React, { Component, Fragment } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Button,
	DialogActions,
	TextField,
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			exercise: {
				title: "",
				description: "",
				muscles: "",
			},
		};
	}

	handleToggle = () => {
		this.setState((state) => ({
			open: !state.open,
		}));
	};

	handleChange = (name) => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value,
			},
		});
	};

	render() {
		const {
			open,
			exercise: { title, description, muscles },
		} = this.state;
		return (
			<Fragment>
				<Button variant="contained" onClick={this.handleToggle}>
					<AddIcon></AddIcon>
				</Button>
				<Dialog
					open={open}
					onClose={this.handleToggle}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						Create a New Exercise
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Please fill out the form below.
						</DialogContentText>
						<form>
							<TextField
								label="Title"
								value={title}
								onChange={this.handleChange("title")}
								margin="normal"
							/>
							<br />
							<FormControl>
								<InputLabel htmlFor="muscles">Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange("muscles")}>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
								</Select>
							</FormControl>
							<br />
							<TextField
								multiline
								rows="4"
								label="Description"
								value={description}
								onChange={this.handleChange("description")}
								margin="normal"
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button color="primary" variant="contained">
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
