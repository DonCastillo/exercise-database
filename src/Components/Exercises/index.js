import { Grid, Paper } from "@material-ui/core"
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"
import React from "react"

const styles = {
    Paper: {
        padding:20,
        marginTop:10, 
        marginBottom:10
    }
}

export default props => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                Left Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                Right Pane
            </Paper>
        </Grid>
    </Grid>