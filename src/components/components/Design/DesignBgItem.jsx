import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  red,
  pink,
  purple,
  indigo,
  blue,
  green,
  yellow,
  orange,
  brown,
  grey,
} from "@material-ui/core/colors";
import useAxios from "axios-hooks";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    height: "180px",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
}));
function DesignBgItem({ data, onNewData }) {
  const colors = [
    red,
    pink,
    purple,
    indigo,
    blue,
    green,
    yellow,
    orange,
    brown,
    grey,
  ];
  const values = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    "A100",
    "A200",
    "A400",
    "A700",
  ];
  const classes = useStyles();
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (data) setUser(data);
  }, [data]);
  const [
    { },
    updateData,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const handlePickColor = (color) => {
    user["bgColorLink"] = color;
    updateData({ data: user }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
      }
    });
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {colors.map((color) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {values.map((value) => (
                  <TableCell
                    onClick={() => handlePickColor(color[value])}
                    style={{
                      background: color[value],
                      border: "1px solid #fff",
                    }}
                  ></TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DesignBgItem;
