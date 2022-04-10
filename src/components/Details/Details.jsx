import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../useTransactions'
import useStyles from './styles'

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title)

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader align="center" variant="h4" title={title} />
        <CardContent>
            <Typography align="center" variant="h5">{total} kr</Typography>
            <Doughnut data={chartData} />
        </CardContent>
    </Card>
  )
}
export default Details