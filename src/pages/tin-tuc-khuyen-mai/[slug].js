import ShareBtn from "@/components/share";
import { Box, Breadcrumbs, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function DetailPost(){
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Link
                            href="/tin-tuc-khuyen-mai"
                        >
                            Tin tức - Khuyến mại
                        </Link>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                    </Breadcrumbs>
                </Stack>
                <Image
                    src="/assets/bg-booking.jpg"
                    width={900}
                    height={400}
                    alt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                    className="img-thumbnail"
                />
            </Container>

            <Container maxWidth="md" className="postContent">
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                <Divider />
                <Stack direction={{xs: 'column', md: 'row'}} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography fontSize={14} fontWeight={300}>Ngày đăng: 20 tháng 10 năm 2024</Typography>
                    <ShareBtn 
                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                        link={'https://mui.com/material-ui/react-pagination/'}
                    />
                </Stack>
            </Container>
        </Box>
    )
}