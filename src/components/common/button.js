import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const CustomButton = styled(Button)({
  background: "linear-gradient(45deg, #be93c5 30%, #7bc6cc 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

export default function StyledComponents(props) {
  return <CustomButton>{props.text}</CustomButton>;
}
