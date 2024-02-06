import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";

export default function ContactForm(){
    return(
        <Stack spacing={1.5}>
            <TextField 
                id="name" 
                label="Họ tên bạn" 
                variant="outlined" 
                size="small"
            />
            <TextField 
                id="phone" 
                label="Số điện thoại liên hệ" 
                variant="outlined" 
                size="small"
            />
            <TextField 
                id="subject" 
                label="Tiêu đề" 
                variant="outlined" 
                size="small"
            />
            <TextField 
                id="content" 
                label="Nội dung liên hệ" 
                variant="outlined" 
                size="small"
                multiline
                rows={3}
            />
            <LoadingButton variant="contained">Gửi liên hệ</LoadingButton>
        </Stack>
    )
}