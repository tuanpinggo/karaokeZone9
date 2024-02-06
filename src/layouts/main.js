import { Box, Stack, useMediaQuery } from "@mui/material";
import LeftSidebar from "./main/sidebar";
import Script from "next/script";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import vi from 'date-fns/locale/vi'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading";

export default function MainLayout({children}){

    const [loading,setLoading] = useState(true)
    const matches = useMediaQuery('(max-width:720px)');

    useEffect(()=>{
        setLoading(false)
    },[])

    if(loading) return <LoadingScreen />

    return(
        <LocalizationProvider locale={vi} dateAdapter={AdapterDateFns}>
            <Stack width="100vw" minHeight="100vh" direction={{xs: 'column', md: "row"}}>
                <LeftSidebar matches={matches}/>
                {children}
           </Stack>
           <div 
                className="zalo-chat-widget" 
                data-oaid="1724475160158012915" 
                data-welcome-message="Karaoke Zone 9 Xin chào Quý khách" 
                data-autopopup="0" 
                data-width="" 
                data-height=""
            />
            <Script src="https://sp.zalo.me/plugins/sdk.js" />
        </LocalizationProvider>
    )
}