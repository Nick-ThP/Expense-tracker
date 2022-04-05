import { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import useStyle from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {

  const classes = useStyle()
  const { deleteTransaction } = useContext(ExpenseTrackerContext)

  const transactions = [
      { 
        id: 1,
        type: 'Income',
        category: 'Salary',
        amount: 4000,
        date: "Tue April 5"
      },
      { 
        id: 2,
        type: 'Expense',
        category: 'Pets',
        amount: 120,
        date: "Tue April 2"
      },
      { 
        id: 3,
        type: 'Income',
        category: 'Investments',
        amount: 300,
        date: "Tue April 1"
      }
  ]

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick="">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}
export default List