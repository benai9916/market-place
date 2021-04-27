import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: 30,
      width: 520,
      height: 350,
      borderRadius: 10,
    },
    txtfield: {
        width: "100%",
        marginTop: 30,
    },
    btnstyle: {
        height: 40,
        minWidth: 90
    }
  }));

export default useStyles;