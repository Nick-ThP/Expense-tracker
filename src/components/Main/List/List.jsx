import { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, AttachMoney, MoneyOff } from '@material-ui/icons'
import useStyle from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {

  const classes = useStyle()
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            {transaction.type === 'Income' ? <AttachMoney /> : <MoneyOff /> }
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
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