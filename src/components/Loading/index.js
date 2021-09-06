import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const LinearProgressStyled = withStyles({
  root: {
    height: 10
  },
  barColorPrimary: {
    backgroundColor: "var(--gray)"
  }
})(LinearProgress);

export default function Loading({ loading }) {
  return loading && (
    <LinearProgressStyled />
  )
}