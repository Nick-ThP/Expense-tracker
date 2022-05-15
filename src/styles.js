import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
    },
  },
  last: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '4.5%',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
    
  },
}))