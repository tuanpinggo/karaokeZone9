import { Button, Divider, Stack, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const menu = [
    {
        id:1,
        text: 'TRANG CHỦ',
        link: '/'
    },
    {
        id:2,
        text: 'GIỚI THIỆU',
        link: '/#gioi-thieu'
    },
    {
        id:4,
        text: 'HỆ THỐNG PHÒNG HÁT',
        link: '/#phong-hat'
    },
    {
        id:5,
        text: 'THƯ VIỆN HÌNH ẢNH',
        link: '/thu-vien-hinh-anh'
    },
    {
        id:6,
        text: 'ĐẶT PHÒNG HÁT ONLINE',
        link: '/#dat-phong-hat'
    },
    {
        id:7,
        text: 'TIN TỨC - KHUYẾN MÃI',
        link: '/tin-tuc-khuyen-mai'
    },
    {
        id:8,
        text: 'LIÊN HỆ - GÓP Ý',
        link: '/lien-he-gop-y'
    },
]

export default function Navbar({setOpen}){
    
    const router = useRouter()

    const handleClick = link => {
        router.push(link)
        setOpen(false)
    }

    return(
        <>
            <Stack spacing={1.5} divider={<Divider sx={{bgcolor: '#666'}}/>} mb={6}>
                {menu.map(item =>
                    // <Link href={item.link} key={item.id}>
                    <Button variant="text" key={item.id} sx={{justifyContent: 'flex-start'}} onClick={() => handleClick(item.link)}>
                        <Typography variant="body1" sx={styles.navItem}>
                            {item.text}
                        </Typography> 
                    </Button>
                    // </Link>
                )}
            </Stack>
        </>
    )
}

const styles = {
    navItem: {
        fontSize: 15,
        color: '#fff',
        transition: '0.3s all',
        '&:hover': {
            color: '#F2B879',
            fontWeight: 600
        }
    }
}