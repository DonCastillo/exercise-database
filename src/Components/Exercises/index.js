import {
	Grid,
	List,
	ListItem,
	Paper,
	Typography,
	ListItemText,
} from "@material-ui/core";
import React, { Fragment } from "react";

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
        height: 500, 
        overflowY: "auto"
	},
};

export default ({ exercises }) => (
	<Grid container>
		<Grid item sm>
			<Paper style={styles.Paper}>
				{exercises.map(([group, exercises], index) => {
					return (
						<Fragment key={index}>
							<Typography
								variant="h6"
								style={{ textTransform: "capitalize" }}
							>
								{group}
							</Typography>
							<List component="ul">
								{exercises.map(({title}, index) => {
									return (
										<ListItem button key={index}>
											<ListItemText primary={title} />
										</ListItem>
									);
								})}
							</List>
						</Fragment>
					);
				})}
			</Paper>
		</Grid>
		<Grid item sm>
			<Paper style={styles.Paper}>
                <Typography variant="h3">
                    Welcome
                </Typography>
                <Typography variant="subtitle1" style={{marginTop: 30}}>
                    Please select an exercise from the list on the left.
                </Typography>
            </Paper>
		</Grid>
	</Grid>
);
