import { Card, CardHeader, CardContent, Typography, ThemeProvider } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../useTransactions'
import useStyles from './styles'

const Details = ({ title, testTheme }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title)

  return (
    <ThemeProvider theme={testTheme}>
      <Card className={title === 'Income' ? classes.income : classes.expense}>
          <CardHeader align="center" title={
            <Typography variant="h5">
              <strong>{title}</strong>
            </Typography>
          } />
          <CardContent>
              <Doughnut  align="center" data={chartData} />
              <Typography align="center" className={classes.number} variant="h6">{total} kr</Typography>
          </CardContent>
      </Card>
    </ThemeProvider>
  )
}
export default Details