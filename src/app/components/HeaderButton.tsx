"use client";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Color } from "../styles/colors";

export const HeaderButton = styled(Button)`
  margin: 15px;
  background-color: ${Color.lightBlue};
  color: ${Color.black};
  border-radius: 10px;
  :hover {
    background-color: ${Color.turquoiseGreen};
    color: ${Color.white};
  }
`;
