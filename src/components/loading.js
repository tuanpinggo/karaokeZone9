import { Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingScreen(){
    return(
        <>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100vw"} height={"100vh"}>
                <CircularProgress />
            </Stack>
        </>
    )
}