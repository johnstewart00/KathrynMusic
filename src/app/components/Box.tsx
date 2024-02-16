"use client";

import styled from "styled-components";
import { Color } from "../styles/colors";

export const MuiBox = styled('div')`
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px;
  border-radius: 20px;
  background-color: ${Color.lightOrange};
  width: 500px;
`;
