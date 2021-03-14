import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

function Footer({ muscles }) {
	return (
		<Paper>
			<Tabs
				value={0}
				indicatorColor="primary"
				textColor="primary"
				centered
				muscles={muscles}
			>
				{muscles.map((group) => {
					return <Tab label={group} />;
				})}
			</Tabs>
		</Paper>
	);
}

export default Footer;
