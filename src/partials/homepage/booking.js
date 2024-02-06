import BookingForm from "@/components/bookingForm";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function Booking(){
    return(
        <Box minHeight={375} width={'100%'} className="bookingSection" id="dat-phong-hat">
            <Container maxWidth="lg" sx={{position: 'relative', zIndex: 3}}>
                <Grid container spacing={8} >
                    <Grid xs={12} md={8}>
                        <Typography variant="h2" component={"h2"} fontSize={26} fontWeight={900} color={"#fff"} textAlign={"center"} mb={3}>LƯU Ý</Typography>
                        <ul>
                            <li>Quý khách nên đặt phòng trước 30 phút để được hỗ trợ tốt nhất.</li>
                            <li>Chúng tôi sẽ huỷ đặt bàn sau 15 phút nếu không liên lạc được với khách hàng.</li>
                            <li>Giá menu chưa bao gồm VAT. Quý khách có nhu cầu lấy VAT, vui lòng liên hệ trực tiếp tại cơ sở kinh doanh.</li>
                            <li>Chúng tôi không thu phí đặt cọc khi khách hàng đặt trước. Trong trường hợp khách đặt trước có các yêu cầu đặc biệt, liên hệ trực tiếp chúng tôi để biết thêm chi tiết về phí đặt cọc.</li>
                            <li>Quy định thu phí khi mang đồ ăn/đồ uống từ ngoài vào: liên hệ trực tiếp chúng tôi để biết thêm thông tin chi tiết.</li>
                        </ul>
                    </Grid>
                    <Grid xs={12} md={4} >
                        <BookingForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const styles = {
    input: {
        bgColor: '#FCDCA7',
        borderRadius: 2
    }
}