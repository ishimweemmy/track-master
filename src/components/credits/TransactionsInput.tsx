import { InputAdornment, TextField } from "@mui/material"
import type { FC } from 'react'

interface TransactionsProps {
    label: string,
    value?: string,
    onChange?: FC
    error?: string,
    helperText?: string,
    placeholder?: string
}

const TransactionsInput: FC<TransactionsProps> = (props) => {
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

                InputProps={{
                    sx: {
                        "& input": {
                            color: "gray",
                            borderRadius: "10px"
                        },
                    }
                }}
                required
                fullWidth
            />
        </div>
    )
}

export default TransactionsInput
