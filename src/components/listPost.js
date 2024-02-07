import { Box, Divider, Pagination, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { formatTime } from "./formatTime";

export function Post({data}){
    return(
        <Stack direction={{xs: "column", md: "row"}} spacing={{xs: 1,md: 5}} className="post">
            <Link href={`/tin-tuc-khuyen-mai/${data?.slug}_id=${data?.id}`}>
                <Image
                    src={data?.thumbnail || "/assets/room1.jpg"}
                    width={200}
                    height={150}
                    alt={data?.title}
                    style={{borderRadius: '8px'}}
                    className="imgHover"
                />
            </Link>
                
            <Stack spacing={{xs:1,md:2}}>

                <Link href={`/tin-tuc-khuyen-mai/slug`}>
                    <Typography variant="h2" component={"h2"} fontWeight={700} fontSize={20} className="title">
                        {data?.title}
                    </Typography>
                </Link>
                <Typography fontSize={14} fontWeight={300}>Ngày đăng: {formatTime(data?.post_date)}</Typography>
                <Typography fontSize={15} fontWeight={400}>
                    {data?.description}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default function ListPost({posts}){
    return(
        <Box my={5}>
            <Stack spacing={3} divider={<Divider />}>
                {posts.map(item =>
                    <Post key={item.id} data={item}/>
                )}
            </Stack>
            {/* <Stack my={5} justifyContent={"center"} alignItems={"center"}>
                <Pagination count={10} />
            </Stack> */}
        </Box>
    )
}