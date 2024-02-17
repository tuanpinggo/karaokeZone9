import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function GalleryPage(){

    const [loading,setLoading] = useState(true)

    const [data,setData] = useState()

    useEffect(()=>{
        const getData = async () => {
            const res = await fetch(`http://localhost:3000/api/getfile`)
            const response = await res.json()
            setData(response)
            setLoading(false)
        }

        getData()
    },[])

    return(
        <Box
            ml={{xs: 0, md: '300px'}}
            width={"100%"}
            height={"auto"}
            mt={{xs: 8, md: 0}}
            className="posts"
        >
            <Typography variant="h1" component={"h1"} fontSize={30} fontWeight={900} my={4} textAlign={"center"} color="#F2B879">
                Thư viện hình ảnh Karaoke Zone 9 - 179 Nguyễn Tuân - Hà Nội
            </Typography>
            <Container maxWidth="lg">
                <Stack spacing={3}>

                    {loading && <CircularProgress />}
                    {!loading && data.map((item,key) =>
                        <React.Fragment key={key}>
                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <Typography variant="h2" component={"h2"} fontSize={20} fontWeight={700} color={"#222"}>
                                    {item.folderName}
                                </Typography>
                                <Typography fontSize={15} fontWeight={400}>({item.files.length} ảnh)</Typography>
                            </Stack>

                            <Grid container spacing={2}>

                                {item.files.map((item1,key1) =>
                                    <Grid xs={6} md={3} key={key}>
                                        <Image
                                            src={`/assets/gallery/${item.folderPath}/${item1}`}
                                            width={350}
                                            height={225}
                                            alt="Thư viện ảnh"
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </React.Fragment>
                    )}
                </Stack>
            </Container>
        </Box>
    )
}