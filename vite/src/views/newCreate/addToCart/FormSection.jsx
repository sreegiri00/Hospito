import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';


export default function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label="Name"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '50ch' }}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        },
                    }}
                />
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'Price',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Catagory</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Discount %</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'number'}
                        label="Password"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '50ch' }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Stock </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'number'}
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Warranty  </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'number'}
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Shipping  </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'number'}
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '23.7ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Status </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'number'}
                        label="Password"
                    />
                </FormControl>
                <FormControl  variant="outlined">
                    <Button sx={{ m: 1, width: '23.7ch' ,height:'6ch' ,borderRadius:'2ch'}}>SUBMIT</Button>
                </FormControl>
            </div>

        </Box>
    );
}