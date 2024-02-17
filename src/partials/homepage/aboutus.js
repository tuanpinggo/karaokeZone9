import { Box, Dialog, Container, Stack, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconMapPin, IconPhoneIncoming } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutUs(){

    const [open,setOpen] = useState(false)

    return(
        <Container maxWidth="lg" id="gioi-thieu">
            <Box my={{xs: 2, md: 8}}>
                <Grid container spacing={{xs:2, md:10}}>
                    <Grid xs={12} md={7}>
                        <Typography fontSize={16} fontWeight={400} letterSpacing={1}>
                            KARAOKE ZONE 9 - 179 NGUYỄN TUÂN
                        </Typography>
                        <Typography variant="h2" component={"h2"} fontSize={{xs: 26, md: 36}} fontWeight={900} color="#C19D60" lineHeight={1.1} my={{xs:1,md:2}}>
                            ĐIỂM GIAO LƯU ÂM NHẠC<br/>SANG TRỌNG BẬC NHẤT HÀ NỘI
                        </Typography>
                        <Typography mb={2}>
                            Tự hào là đơn vị tiên phong trong việc trang bị các trang thiết bị an toàn phòng cháy chữa cháy hàng đầu tại Hà Nội. 
                        </Typography>
                        <Typography mb={2}>
                            Karaoke Zone9 - 179 Nguyễn Tuân có một số phòng karaoke riêng tư được thiết kế sang trọng và thoải mái, với nhiều kích thước khác nhau để phù hợp với nhu cầu của khách hàng. Mỗi phòng đều được trang bị các thiết bị âm thanh chất lượng cao, màn hình hiển thị lớn và hệ thống điều khiển tiện lợi, tạo điều kiện tốt nhất cho việc hát karaoke và giải trí.
                        </Typography>
                        <Typography>
                            Ngoài ra, Karaoke Zone9 - 179 Nguyễn Tuân còn cung cấp một thực đơn đa dạng các món ăn và đồ uống phong phú để bạn có thể thưởng thức trong suốt buổi hát karaoke. Đội ngũ nhân viên phục vụ chuyên nghiệp và thân thiện sẽ đảm bảo rằng bạn có một trải nghiệm vui vẻ và thoải mái.
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={5}>
                        <Stack spacing={1.5} >
                            <Box maxWidth={"100%"} width={{xs: '100%', md: 420}} height={300} position={"relative"} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"}>
                                <Image
                                    src={'/assets/img2.jpg'}
                                    width={360}
                                    height={280}
                                    alt="karaoke zone9 179 Nguyễn Tuân"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        borderRadius: '10px'
                                    }}
                                />
                                <Box position={"absolute"} top={0} left={0} width={360} height={280} zIndex={1} bgcolor={"rgb(0,0,0,0.6)"} borderRadius={'10px'}/>
                                <Button className="play-btn" onClick={() => setOpen(true)} />
                                <Dialog
                                    fullWidth={true}
                                    maxWidth={'md'}
                                    open={open}
                                    onClose={() => setOpen(false)}
                                > 
                                    <iframe 
                                        width="100%" 
                                        height="506" 
                                        src="https://www.youtube.com/embed/izzE-Bzhnec?si=5dptUspPcYSnY2wi" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen
                                    />
                                </Dialog>
                            </Box>
                            <Link href={"tel:0928398989"}>
                                <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={2} border="1px solid #C19D60" borderRadius={2} py={1} width={"360px"} maxWidth={"100%"}>
                                    <IconPhoneIncoming color="#C19D60" fontSize={24}/>
                                    <Typography fontSize={"20px"} fontWeight={900} color="secondary.main">Hotline : 0928398989</Typography>
                                </Stack>
                            </Link>
                            <Link href={"https://maps.app.goo.gl/68mqFgje5Xh1qh1i6"}>
                                <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={2} border="1px solid #C19D60" borderRadius={2} py={1} width={"360px"} maxWidth={"100%"}>
                                <IconMapPin color="#C19D60" fontSize={24}/>
                                    <Typography fontSize={"20px"} fontWeight={900} color="secondary.main">Bản đồ dẫn đường</Typography>
                                </Stack>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}