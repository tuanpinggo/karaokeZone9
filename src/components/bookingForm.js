import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DateTimePicker } from "@mui/x-date-pickers";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#FCDCA7',
      border: '1px solid',
      borderColor: '#FCDCA7',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      width: '100%',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
}));

export default function BookingForm(){
    return(
        <Box bgcolor={'#C19D60'} width={'100%'} height={'100%'} px={2} borderRadius={1}>
            <Typography variant="h2" component={"h2"} textAlign={"center"} color="#000" fontSize={20} fontWeight={900} pt={3} pb={2}>THÔNG TIN ĐẶT PHÒNG HÁT</Typography>
            <Stack spacing={1} pb={4}>
                <BootstrapInput 
                    placeholder="Họ tên" 
                    id="bootstrap-input" 
                />
                <BootstrapInput 
                    placeholder="Điện thoại liên hệ" 
                    id="bootstrap-input" 
                />

                <DateTimePicker 
                    hiddenLabel 
                    size="medium"
                    sx={{
                        bgcolor: '#fcdca7!important',
                        borderRadius: 1,
                        '& input': {
                            padding: '13px'
                        }
                    }}
                />

                <BootstrapInput 
                    placeholder="Số người tham gia" 
                    id="bootstrap-input" 
                    type="number"
                />
                <BootstrapInput 
                    placeholder="Lưu ý cho nhân viên" 
                    id="bootstrap-input" 
                    multiline
                    rows={3}
                />
                <Button variant="contained" size="large">ĐẶT PHÒNG NGAY</Button>
            </Stack>
        </Box>
    )
}