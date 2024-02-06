import { AppBar, Drawer, IconButton, Slide, Stack, Toolbar, Typography, useMediaQuery, useScrollTrigger } from "@mui/material";
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube, IconMenu2 } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import LoadingScreen from "@/components/loading";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  
export default function LeftSidebar(props){

    const [open,setOpen] = useState(false)

    const [loading,setLoading] = useState(true)
    const matches = useMediaQuery('(max-width:720px)');

    useEffect(()=>{
        setLoading(false)
    },[])

    if(loading) return <LoadingScreen />

    if(matches) return(
        <>
            <HideOnScroll {...props}>
                <AppBar sx={{bgcolor:"#000"}}>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Link href="/">
                            <Typography variant="h1" component={"h1"} fontWeight={900} fontSize={20} color="#fff">
                                ZONE 9 KARAOKE
                            </Typography>
                        </Link>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={()=>setOpen(true)}
                        >
                            <IconMenu2 color="#fff" size={30}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                anchor={"left"}
                open={open}
                onClose={()=> setOpen(false)}
            >
                <Stack spacing={0} width={300} height={"100vh"} bgcolor="#181818">
                    <Link href={"/"}>
                        <Image src={"/assets/logo.jpg"} width={297} height={180} alt="Karaoke Zone 9 - 179 Nguyễn Tuân" priority />
                    </Link>
                    <Stack px={3} flexGrow={1} my={5}>
                        <Navbar setOpen={setOpen}/>
                        <Stack>
                            <Typography variant="body1" fontSize={16} fontWeight={500} color={"#fff"}>Hotline</Typography>
                            <Link href="tel:0928398989">
                                <Typography variant="body1" fontSize={28} fontWeight={900} color={"#fff"} lineHeight={1.2} sx={styles.onHover}>
                                    0928398989
                                </Typography>
                            </Link>
                        </Stack>
                        <Stack mt={2}>
                            <Typography variant="body1" fontSize={16} fontWeight={500} color={"#fff"}>Kết nối với chúng tôi</Typography>
                            <Stack spacing={1.5} direction={"row"} mt={1}>
                                <Link href="https://www.facebook.com/zone9karaoke" style={styles.iconOnHover}>
                                    <IconBrandFacebook style={{color: 'inherit'}}/>
                                </Link>
                                <Link href="/" style={styles.iconOnHover}>
                                    <IconBrandYoutube style={{color: 'inherit'}}/>
                                </Link>
                                <Link href="/" style={styles.iconOnHover}>
                                    <IconBrandTwitter style={{color: 'inherit'}}/>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <Typography fontSize={12} fontWeight={400} color="#fff" px={3} mb={3}>© 2024 by Zone9, All rights reserved</Typography>
                </Stack>
            </Drawer>
        </>
    )

    return (
        <Stack spacing={0} width={300} height={"100vh"} bgcolor="#181818" borderRight={'3px solid #F2B879'} position={"fixed"} top={0} left={0} zIndex={9}>
            <Link href={"/"}>
                <Image src={"/assets/logo.jpg"} width={297} height={180} alt="Karaoke Zone 9 - 179 Nguyễn Tuân" priority />
            </Link>

            <Stack px={3} flexGrow={1} my={5}>
                <Navbar setOpen={setOpen}/>
                <Stack>
                    <Typography variant="body1" fontSize={16} fontWeight={500} color={"#fff"}>Hotline</Typography>
                    <Link href="tel:0928398989">
                        <Typography variant="body1" fontSize={28} fontWeight={900} color={"#fff"} lineHeight={1.2} sx={styles.onHover}>
                            0928398989
                        </Typography>
                    </Link>
                </Stack>
                <Stack mt={2}>
                    <Typography variant="body1" fontSize={16} fontWeight={500} color={"#fff"}>Kết nối với chúng tôi</Typography>
                    <Stack spacing={1.5} direction={"row"} mt={1}>
                        <Link href="https://www.facebook.com/zone9karaoke" style={styles.iconOnHover}>
                            <IconBrandFacebook style={{color: 'inherit'}}/>
                        </Link>
                        <Link href="/" style={styles.iconOnHover}>
                            <IconBrandYoutube style={{color: 'inherit'}}/>
                        </Link>
                        <Link href="/" style={styles.iconOnHover}>
                            <IconBrandTwitter style={{color: 'inherit'}}/>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            
            <Typography fontSize={12} fontWeight={400} color="#fff" px={3} mb={3}>© 2024 by Zone9, All rights reserved</Typography>
        </Stack>
    )
}

const styles = {
    onHover: {
        transition: '0.3s all',
        '&:hover':{
            color: 'primary.main'
        }
    },
    iconOnHover: {
        color: '#fff',
        transition: '0.3s all',
        '&:hover': {
            color: '#F2B879'
        }
    }
}