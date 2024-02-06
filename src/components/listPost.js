import { Box, Divider, Pagination, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function Post(){
    return(
        <Stack direction={{xs: "column", md: "row"}} spacing={{xs: 1,md: 5}} className="post">
            <Link href={`/tin-tuc-khuyen-mai/slug`}>
                <Image
                    src="/assets/room1.jpg"
                    width={200}
                    height={150}
                    alt="thumbnail"
                    style={{borderRadius: '8px'}}
                    className="imgHover"
                />
            </Link>
                
            <Stack spacing={{xs:1,md:2}}>

                <Link href={`/tin-tuc-khuyen-mai/slug`}>
                    <Typography variant="h2" component={"h2"} fontWeight={700} fontSize={20} className="title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                </Link>
                <Typography fontSize={14} fontWeight={300}>Ngày đăng: 20 tháng 10 năm 2024</Typography>
                <Typography fontSize={15} fontWeight={400}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
            </Stack>
        </Stack>
    )
}

export default function ListPost(){
    return(
        <Box my={5}>
            <Stack spacing={3} divider={<Divider />}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Stack>
            <Stack my={5} justifyContent={"center"} alignItems={"center"}>
                <Pagination count={10} />
            </Stack>
        </Box>
    )
}