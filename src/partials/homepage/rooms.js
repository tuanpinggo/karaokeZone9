import RoomGrid from "@/components/roomGrid";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const datas = [
    {
        id: 1,
        thumbnail: '/assets/room1.jpg',
        title: 'PHÒNG VIP1',
        description: 'Sức chứa 20 - 30 người'
    },
    {
        id: 2,
        thumbnail: '/assets/room2.jpg',
        title: 'PHÒNG VIP2',
        description: 'Sức chứa 20 - 30 người'
    },
    {
        id: 3,
        thumbnail: '/assets/room3.jpg',
        title: 'PHÒNG VIP3',
        description: 'Sức chứa 20 - 30 người'
    },
    {
        id: 4,
        thumbnail: '/assets/room1.jpg',
        title: 'PHÒNG VIP4',
        description: 'Sức chứa 20 - 30 người'
    },
    {
        id: 5,
        thumbnail: '/assets/room2.jpg',
        title: 'PHÒNG VIP5',
        description: 'Sức chứa 20 - 30 người'
    },
    {
        id: 6,
        thumbnail: '/assets/room3.jpg',
        title: 'PHÒNG VIP6',
        description: 'Sức chứa 20 - 30 người'
    },
]

export default function Rooms(){
    return(
        <Box bgcolor={'#1F1B1A'} py={6} id="phong-hat">
            <Container maxWidth="lg">
                <Stack spacing={0.5} mb={5}>
                    <Typography variant="h3" component={"h3"} fontSize={16} fontWeight={400} letterSpacing={1} color="#fff" textAlign={"center"}>KARAOKE ZONE 9 - 179 NGUYỄN TUÂN</Typography>
                    <Typography variant="h2" component={"h2"} fontSize={30} fontWeight={900} color="#C19D60" textAlign={"center"}>
                        HỆ THỐNG PHÒNG HÁT TIÊU CHUẨN 5 SAO
                    </Typography>
                </Stack>
                <Grid container spacing={2}>
                    {datas.map(item => <Grid xs={12} md={4} key={item.id}><RoomGrid data={item}/></Grid>)}
                </Grid>
            </Container>
        </Box>
    )
}