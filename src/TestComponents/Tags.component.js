import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
      
    }
  }
}));



export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(e)=> console.log(e.target.value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tags"
            placeholder="Favorites"
          />
        )}
      />

      
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const tags = [
  "aziz",
  "mounir",
  "hadouma"
  ];
