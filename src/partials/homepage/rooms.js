import RoomGrid from "@/components/roomGrid";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const datas = [
    {
        id: 1,
        thumbnail: '/assets/gallery/phong-hat/z5116031398779_1a511b62e3853bdeacb7d0e7819fa80e.jpg',
        title: 'PHÒNG VIP1',
        description: 'Sức chứa 20 - 30 người',
        source:[
            "/assets/gallery/phong-hat/z5116031398779_1a511b62e3853bdeacb7d0e7819fa80e.jpg",
            "/assets/gallery/phong-hat/z5116031403762_66d2fa5d3afbcd8a4573a0fcf95a87a9.jpg",
            "/assets/gallery/phong-hat/z5116031406095_3c2231e3fc0f4c3d2e8cf603942a7ed5.jpg",
            "/assets/gallery/phong-hat/z5116032149563_5c87667bfbeb1a740848175f023350cf.jpg",
            "/assets/gallery/phong-hat/z5116032154391_3769069205f958b0e0723ea94f138d43.jpg",
            "/assets/gallery/phong-hat/z5116032161857_a0e46c26fb4a5b8b5c0c1a6caeff1205.jpg",
            "/assets/gallery/phong-hat/z5116032167192_fbcd6941cf2a4045e63e601c82716921.jpg",
        ]

    },
    {
        id: 2,
        thumbnail: '/assets/gallery/phong-hat/z5116032623436_2a68a031ab34416677ac01a1e7832e81.jpg',
        title: 'PHÒNG VIP2',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116032623436_2a68a031ab34416677ac01a1e7832e81.jpg',
            '/assets/gallery/phong-hat/z5116032623648_b12a5874695bceea875d890590b0b3bf.jpg',
            '/assets/gallery/phong-hat/z5116032633566_bceab45db3c77ca31807a812ab70aead.jpg',
            '/assets/gallery/phong-hat/z5116032637137_9a697e8b92a2850b97286a2489be5d10.jpg'
        ]
    },
    {
        id: 3,
        thumbnail: '/assets/gallery/phong-hat/z5116032795031_87e160ee8236d509a4063e9320ca2862.jpg',
        title: 'PHÒNG VIP3',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116032795031_87e160ee8236d509a4063e9320ca2862.jpg',
            '/assets/gallery/phong-hat/z5116032798749_9839253916b5de19b8cc0a23b541344d.jpg',
            '/assets/gallery/phong-hat/z5116032808209_03ed8beabecc0744f02109cea248bb1e.jpg',
            '/assets/gallery/phong-hat/z5116032808461_3861909691349b315646e5e0ed3888bf.jpg',
            '/assets/gallery/phong-hat/',
        ]
    },
    {
        id: 4,
        thumbnail: '/assets/gallery/phong-hat/z5116032981730_16de8aee41313a77590b451f0569f9b8.jpg',
        title: 'PHÒNG VIP4',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116032981730_16de8aee41313a77590b451f0569f9b8.jpg',
            '/assets/gallery/phong-hat/z5116032989898_0e67351507abfc2508f14b7d3488e6d3.jpg',
            '/assets/gallery/phong-hat/z5116032993450_a19e42b16d8c6ba59c57918e324a9a0f.jpg',
            '/assets/gallery/phong-hat/z5116033004201_24047611acab2598afcdf2b5efdb61c6.jpg',
        ]
    },
    {
        id: 5,
        thumbnail: '/assets/gallery/phong-hat/z5116033243674_579d6caa506896621df81114edf77c3f.jpg',
        title: 'PHÒNG VIP5',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116033243674_579d6caa506896621df81114edf77c3f.jpg',
            '/assets/gallery/phong-hat/z5116033253525_5eeb4f9b4049770390797a30577ac0c1.jpg',
            '/assets/gallery/phong-hat/z5116033257371_3eaf4c0cc62984dd27d1d68028945e73.jpg',
            '/assets/gallery/phong-hat/z5116033264737_9f563d3a0b0c50073de4ffe5f5428009.jpg',
        ]
    },
    {
        id: 6,
        thumbnail: '/assets/gallery/phong-hat/z5116033535856_72224bc0d2073e96103d22bc0b46c596.jpg',
        title: 'PHÒNG VIP6',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116033535856_72224bc0d2073e96103d22bc0b46c596.jpg',
            '/assets/gallery/phong-hat/z5116033540241_7cbf56e96ac1679f77a2d8ec54e062e1.jpg',
            '/assets/gallery/phong-hat/z5116033541757_47d5a0fcc3ae00705979e5b86ef6fc2d.jpg',
        ]
    },
    {
        id: 7,
        thumbnail: '/assets/gallery/phong-hat/z5116033931725_53fc6611c27feda15eb4283190f775eb.jpg',
        title: 'PHÒNG VIP7',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116033931725_53fc6611c27feda15eb4283190f775eb.jpg',
            '/assets/gallery/phong-hat/z5116033949173_85cabbf1c643df1bfa1226fb3516a9e6.jpg',
            '/assets/gallery/phong-hat/z5116033961420_2f2001500b2324506afa8dff8da666b4.jpg',
            '/assets/gallery/phong-hat/z5116033968676_8dc62721aef9b4e34c445304d256cebf.jpg',
        ]
    },
    {
        id: 8,
        thumbnail: '/assets/gallery/phong-hat/z5116034201774_29460cfde1d6aa6f18052e3652936cac.jpg',
        title: 'PHÒNG VIP8',
        description: 'Sức chứa 20 - 30 người',
        source: [
            '/assets/gallery/phong-hat/z5116034201774_29460cfde1d6aa6f18052e3652936cac.jpg',
            '/assets/gallery/phong-hat/z5116034209015_ea050b0d12d191b5543de16572c54cd6.jpg',
            '/assets/gallery/phong-hat/z5116034211503_490579dc72bd462e526f32964c583e1d.jpg',
            '/assets/gallery/phong-hat/z5116034215994_478a04067c2f2a0d85a710b9819fece2.jpg',
        ]
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
                    {datas.map(item => <Grid xs={12} md={3} key={item.id}><RoomGrid data={item}/></Grid>)}
                </Grid>
            </Container>
        </Box>
    )
}