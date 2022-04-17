import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getAllresidence } from "../Redux/Residence/action";

export const Residents = () => {
  const { id } = useParams();

  let { residence, loading, error } = useSelector((store) => store.residence);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllresidence(id));
  }, []);

  return (
    <>
      <div>
        <div className="flexdiv">
          <p>Residents</p>
        </div>

        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {residence.map(({ _id, name, gender, age }, i) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i}
                </TableCell>
                <TableCell align="right">{name}</TableCell>

                <TableCell align="right">{gender}</TableCell>

                <TableCell align="right">{age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
