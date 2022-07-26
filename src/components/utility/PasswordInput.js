import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordInput ({password, setPassword}){

    const handleClickShowPassword = () => {
        setPassword({
        ...password,
        showPassword: !password.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    

    return (
        <FormControl variant="outlined" sx={{mb: 1}}>
            <InputLabel  color="secondary" htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={password.showPassword ? 'text' : 'password'}
                value={password.value}
                onChange={({target})=>setPassword(prevState => ({...prevState, value: target.value}))}
                color="secondary"
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    
                    edge="end"
                    >
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
               
            />
        </FormControl>

    )
}