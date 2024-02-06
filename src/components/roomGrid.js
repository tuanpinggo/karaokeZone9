import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function RoomGrid({data}){

    const [open,setOpen] = useState(false)

    return(
        <>
            <Stack justifyContent={"center"} alignItems={"center"} sx={{cursor: 'pointer'}} onClick={()=> setOpen(!open)} mb={3}>
                <Image src={data.thumbnail} width={330} height={220} alt={data.title} style={{borderRadius: '8px 8px 0 0'}}/>
                <Stack spacing={0.5} py={2} justifyContent={"center"} alignItems={"center"} bgcolor={'#fff'} width={330} borderRadius={'0 0 8px 8px'}>
                    <Typography variant="h3" component={"h3"} fontWeight={700} fontSize={20} color={"#111"}>{data.title}</Typography>
                    <Typography fontWeight={400} fontSize={16}>{data.description}</Typography>
                </Stack>
            </Stack>

            <FsLightbox
				toggler={open}
				sources={[
					'https://i.imgur.com/fsyrScY.jpg',
					'https://www.youtube.com/watch?v=xshEZzpS4CQ',
					'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				]}
			/>
        </>
    )
}