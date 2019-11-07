import { useState } from "react";

const useInput = val => {
  const [value, setValue] = useState(val),
    handleChange = e => {
      setValue(e.target.value);
    };

  return [value, handleChange];
};

export default useInput;
