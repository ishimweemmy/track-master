import { InputAdornment, TextField } from "@mui/material"
import type { FC } from 'react'

interface PasswordProps {
    label: string,
    value?: string,
    onChange?: FC
    error?: string,
    helperText?: string,
    placeholder?: string
}

const PasswordField: FC<PasswordProps> = (props) => {
    const {
        label,
        value,
        onChange,
        error,
        helperText,
        placeholder
    } = props
    return (
        <div className="w-full h-full flex flex-col justify-start gap-2 text-white font-medium">
            <span>{label}</span>
            <TextField
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={helperText}
                type="password"

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
                        <InputAdornment position="start">
                            <img src="/bulk/frame.svg" />
                        </InputAdornment>
                    ),
                }}
                required
                fullWidth
            />
        </div>
    )
}

export default PasswordField