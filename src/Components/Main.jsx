import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addflat, getAllflat } from "../Redux/Flat/action";
import { CustomButtonRoot } from "./Login";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  let { totalPage, flat, loading } = useSelector((store) => store.flat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllflat(page));
  }, []);
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(getAllflat(value));
  };
  const handleChane = (e) => {
    const { value, name } = e.target;
    dispatch(getAllflat(page, name, value));
  };
  const handleSort = (val) => {
    let arr = flat.sort((a, b) => val * (+a.no - +b.no));
    dispatch(addflat({ flat: arr, totalPage }));
  };
  return (
    <>
      <div>
        <div className="flexdiv">
          <button
            onClick={() => {
              handleSort(1);
            }}
          >
            Sort by Flat asc
          </button>
          <button
            onClick={() => {
              handleSort(-1);
            }}
          >
            Sort by Flat des
          </button>
          <select onChange={handleChane} name="type" id="">
            <option value="">Chose type</option>
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
          </select>
          <p>Home</p>
          <p>Page:- {page}</p>
        </div>

        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>Flat No</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Block</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Total residence</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flat.map(({ _id, img, type, block, no, residents }, i) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  component="th"
                  scope="row"
                >
                  {i}
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  align="right"
                >
                  {no}
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  align="right"
                >
                  <img alt="logo" src={img}></img>
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  align="right"
                >
                  {block}
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  align="right"
                >
                  {type}
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/residents/${_id}`);
                  }}
                  align="right"
                >
                  {residents}
                </TableCell>
                <TableCell
                  onClick={() => {
                    navigate(`/editform/${_id}`);
                  }}
                >
                  {"Edit"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </div>
    </>
  );
};
