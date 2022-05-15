import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
        paddingTop: '10px;'
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
        paddingTop: '10px;'
    },
    number: {
        marginTop: '20px'
    }
}))