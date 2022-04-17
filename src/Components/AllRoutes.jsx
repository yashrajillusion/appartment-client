import { Route, Routes } from "react-router-dom";
import { EditForm } from "./EditForm";
import { Login } from "./Login";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { Residents } from "./Resident";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/residents/:id"} element={<Residents />}></Route>
        <Route path={"/editform/:id"} element={<EditForm />}></Route>
      </Routes>
    </>
  );
};
