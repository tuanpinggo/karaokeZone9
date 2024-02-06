import ContactForm from "@/components/contactForm";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
export default function ContactPage(){
    return(
        <Box
            ml={{xs: 0, md: '300px'}}
            width={"100%"}
            height={"auto"}
            mt={{xs: 8, md: 0}}
        >
            <Container maxWidth="md">
                <Stack my={{xs: 3, lg: 5}} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant="h1" component={"h1"} fontWeight={900} fontSize={30} textAlign={"center"} color={"#C19D60"} lineHeight={1.2}>
                        LIÊN HỆ - GÓP Ý
                    </Typography>
                </Stack>
                <div className="google-map-code">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.193843702275!2d105.8012488!3d21.0007144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0144b061cb%3A0x3c04b324b81b5d5f!2sKaraoke%20Zone9%20179%20Nguy%E1%BB%85n%20Tu%C3%A2n!5e0!3m2!1svi!2s!4v1707228468979!5m2!1svi!2s"
                        width="100%"
                        height="300"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    />
                </div>
                
                <Box my={3}>
                    <Stack spacing={1}>
                        <Typography variant="h2" component={"h2"} fontWeight={900} fontSize={20} color={"#C19D60"} lineHeight={1.2}>
                            KARAOKE ZONE 9
                        </Typography>
                        <Typography>Địa chỉ: Số 179 Nguyễn Tuân, Phường Nhân Chính, Quận Thanh Xuân, TP Hà Nội</Typography>
                        <Typography>Hotline: <strong>0928398989</strong> | Email: contact@karaokezone9.vn</Typography>
                        <Typography>Website: www.karaokezone9.vn</Typography>

                        
                    </Stack>

                    <Typography variant="h2" component={"h2"} fontWeight={900} fontSize={20} color={"#C19D60"} lineHeight={1.2} mt={4} mb={2}>
                        FORM GỬI LIÊN HỆ NHANH
                    </Typography>

                    <ContactForm />
                </Box>

            </Container>

        </Box>
    )
}