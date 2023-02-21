import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";

interface PasswordProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  placeholder: string;
  name: string
}

const PasswordField: FC<PasswordProps> = (props) => {
  const { label, value, onChange, error, helperText, placeholder, name } = props;

  const [visible, setVisibilty] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-start gap-2 text-white font-medium">
      <span>{label}</span>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={error ? helperText : ""}
        type={visible ? "text" : "password"}
        InputProps={{
          sx: {
            "& input": {
              color: "white",
            },
          },
          startAdornment: (
            <InputAdornment position="start">
              <img src="/bulk/key.svg" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="start"
              onClick={() => setVisibilty((prev) => !prev)}
              className="cursor-pointer"
            >
              <img src="/bulk/frame.svg" />
            </InputAdornment>
          ),
        }}
        required
        fullWidth
        name={name}
      />
    </div>
  );
};

export default PasswordField;
