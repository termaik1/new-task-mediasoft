import React from "react";

import InputMask from "react-input-mask";

export const BackingMaskCardNumber = (props) => (
  <InputMask mask="9999 9999 9999 9999" {...props} />
);
