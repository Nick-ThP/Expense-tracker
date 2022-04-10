import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import { createTheme } from "@material-ui/core/styles";

const App = () => {
  
  const classes = useStyles()

  const testTheme = createTheme({
    typography: {
      fontFamily: [
        'Yantramanav',
        'sans-serif'
      ].join(",")
    }
  });

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh'
    }}>
        <div style={{
            display: 'flex',
            juistifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '20vh', 
        }}>
            <h1 style={{
                textAlign: 'center',
                margin: '0 auto',
            }}>
                Expense Tracker
            </h1>
        </div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ margin: '0 auto', verticalAlign: 'center' }}>
            <Grid item xs={12} sm={3} className={classes.mobile}>
                <Details title="Income" theme={testTheme} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.main}>
                <Main theme={testTheme} />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.desktop}>
                <Details title="Income" theme={testTheme} />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.last}>
                <Details title="Expense" theme={testTheme} />
            </Grid>
        </Grid>
    </div>
  )
}

export default App