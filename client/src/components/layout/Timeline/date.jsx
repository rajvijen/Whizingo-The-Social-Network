import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
const year = [
  {
    value: "2006",
    label: "2006"
  },
  {
    value: "2005",
    label: "2005"
  },
  {
    value: "2004",
    label: "2004"
  },
  {
    value: "2003",
    label: "2003"
  },
  {
    value: "2002",
    label: "2002"
  },
  {
    value: "2001",
    label: "2001"
  },
  {
    value: "2000",
    label: "2000"
  },
  {
    value: "1999",
    label: "1999"
  },
  {
    value: "1998",
    label: "1998"
  },
  {
    value: "1997",
    label: "1997"
  },
  {
    value: "1996",
    label: "1996"
  },
  {
    value: "1995",
    label: "1994"
  },
  {
    value: "1993",
    label: "1992"
  },
  {
    value: "1991",
    label: "1991"
  },
  {
    value: "1990",
    label: "1990"
  }
];
const month = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  },
  {
    value: "7",
    label: "7"
  },
  {
    value: "8",
    label: "8"
  },
  {
    value: "9",
    label: "9"
  },
  {
    value: "10",
    label: "10"
  },
  {
    value: "11",
    label: "11"
  },
  {
    value: "12",
    label: "12"
  }
];
const day = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  },
  {
    value: "7",
    label: "7"
  },
  {
    value: "8",
    label: "8"
  },
  {
    value: "9",
    label: "9"
  },
  {
    value: "10",
    label: "10"
  },
  {
    value: "11",
    label: "11"
  },
  {
    value: "12",
    label: "12"
  },
  {
    value: "13",
    label: "13"
  },
  {
    value: "14",
    label: "14"
  },
  {
    value: "15",
    label: "15"
  },
  {
    value: "16",
    label: "16"
  },
  {
    value: "17",
    label: "17"
  },
  {
    value: "18",
    label: "18"
  },
  {
    value: "19",
    label: "19"
  },
  {
    value: "20",
    label: "20"
  },
  {
    value: "21",
    label: "21"
  },
  {
    value: "22",
    label: "22"
  },
  {
    value: "23",
    label: "23"
  },
  {
    value: "24",
    label: "25"
  },
  {
    value: "26",
    label: "26"
  },
  {
    value: "27",
    label: "27"
  },
  {
    value: "28",
    label: "28"
  },
  {
    value: "29",
    label: "29"
  },
  {
    value: "30",
    label: "30"
  },
  {
    value: "31",
    label: "31"
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("1");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Day"
          className={classes.textField}
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {day.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Month"
          className={classes.textField}
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {month.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Year"
          className={classes.textField}
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {year.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
