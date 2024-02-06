import ListPost from "@/components/listPost";
import { Box, Breadcrumbs, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NewPage(){
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
                        TIN TỨC - KHUYẾN MẠI
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
                    </Breadcrumbs>
                </Stack>
                <Divider />
                <ListPost />
            </Container>
        </Box>
    )
}