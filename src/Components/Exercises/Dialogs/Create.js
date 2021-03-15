import React, { Component, Fragment } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Button,
	DialogActions,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}



    handleToggle = () => {
        this.setState(state => ({
            open: !state.open
        }))
    }

	render() {
        const {open} = this.state;
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
							Content
						</DialogContentText>
						<form></form>
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
