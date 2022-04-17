import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginfireBtn } from "../Redux/auth/action";
import ButtonUnstyled, {
  buttonUnstyledClasses
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { Navigate } from "react-router-dom";
const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2"
};

export const Login = () => {
  const { user, loading, error } = useSelector((store) => store.user);
  const [userDetails, setuserDetails] = useState({ email: "", password: "" });
  const distpatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserDetails({ ...userDetails, [name]: value });
  };
  if (user._id != "") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <p>Login</p>
      <div className="loginbox">
        <p>Email</p>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="..email"
        ></input>
        <p>Password</p>
        <input
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="..password"
        />
        <CustomButtonRoot
          onClick={() => {
            distpatch(authLoginfireBtn(userDetails));
          }}
        >
          Login
        </CustomButtonRoot>
      </div>
    </>
  );
};

export const CustomButtonRoot = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
