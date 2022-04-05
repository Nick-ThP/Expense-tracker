import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'

const Main = () => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">
                Total balance €500
            </Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                {/* InfoCard */}
                Try saying: Add income of 300€ in category salary for monday...
            </Typography>
            <Divider />
            {/* Form */}
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* List */}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main