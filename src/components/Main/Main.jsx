import { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context'
import useStyles from './styles'

const Main = ({ testTheme }) => {

  const classes = useStyles()
  const { balance } = useContext(ExpenseTrackerContext)

  return (<>
    <Card className={classes.root}>
        <CardContent>
            <CardHeader align="center" title={
                <Typography variant="h4">
                    Balance: {balance} kr
                </Typography>
            } />
            <Divider className={classes.divider} />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  </>)
}

export default Main