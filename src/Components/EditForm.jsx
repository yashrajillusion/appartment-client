import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomButtonRoot } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Editflattodb } from "../Redux/Flat/action";

export const EditForm = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const distpatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://appartmentserver.herokuapp.com/flat/${id}`)
      .then(({ data }) => {
        setData({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChane = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <form>
      <input
        value={data.block}
        name="block"
        onChange={handleChane}
        type="text"
        placeholder="block"
      />
      <input
        value={data.no}
        name="no"
        onChange={handleChane}
        type="number"
        placeholder="flat number"
      />
      <select
        value={data.type}
        name="type"
        onChange={handleChane}
        name="type"
        id=""
      >
        <option value="">Chose type</option>
        <option value="tenant">Tenant</option>
        <option value="owner">Owner</option>
      </select>
      <CustomButtonRoot onClick={distpatch(Editflattodb(data, id))}>
        Edit
      </CustomButtonRoot>
    </form>
  );
};
