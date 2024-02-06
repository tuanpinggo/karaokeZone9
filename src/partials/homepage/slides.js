import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

export function ButtonSlide({title}){
    return(
        <Stack justifyContent={"center"} alignItems={"center"} className='slideButton'>
            <Typography variant='body1' fontSize={16} fontWeight={900} color={"#222222"}>
                {title}
            </Typography>
        </Stack>
    )
}

export default function Slider(){

    return(
        <Swiper 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay,Pagination]} 
            className="sectionSlide"
        >

                <SwiperSlide className='slideItems'>
                    <Stack className="slideItemContent" justifyContent={"center"} alignItems={"center"}>
                        <Typography variant='h3' component={"h3"} className='slideItemDescrition'>KARAOKE ZONE 9 - 179 NGUYỄN TUÂN</Typography>
                        <Typography variant='h2' component={"h2"} className='slideItemTitle'>ĐIỂM GIAO LƯU ÂM NHẠC SANG TRỌNG VÀ ĐẲNG CẤP BẬC NHẤT HÀ NỘI</Typography>
                        <Link href="#dat-phong-hat"><ButtonSlide title="ĐẶT PHÒNG NGAY" /></Link>
                    </Stack>
                    <Image src={`/assets/slides/slide1.jpg`} width={1280} height={960} alt="slide1"/>
                </SwiperSlide>

                <SwiperSlide className='slideItems'>
                    <Stack className="slideItemContent" justifyContent={"center"} alignItems={"center"}>
                        <Typography variant='h3' component={"h3"} className='slideItemDescrition'>KARAOKE ZONE 9 - 179 NGUYỄN TUÂN</Typography>
                        <Typography variant='h2' component={"h2"} className='slideItemTitle'>TRANG BỊ ÁN TOÀN PHÒNG CHÁY CHỮA CHÁY ĐÃ NGHIỆM THU</Typography>
                        <Link href="#dat-phong-hat"><ButtonSlide title="ĐẶT PHÒNG NGAY" /></Link>
                    </Stack>
                    <Image src={`/assets/slides/slide2.jpg`} width={1280} height={960} alt="slide1"/>
                </SwiperSlide>

                <SwiperSlide className='slideItems'>
                    <Stack className="slideItemContent" justifyContent={"center"} alignItems={"center"}>
                        <Typography variant='h3' component={"h3"} className='slideItemDescrition'>KARAOKE ZONE 9 - 179 NGUYỄN TUÂN</Typography>
                        <Typography variant='h2' component={"h2"} className='slideItemTitle'>HỆ THỐNG PHÒNG HÁT HIỆN ĐẠI,<br />SỨC CHỨA LỚN</Typography>
                        <Link href="#dat-phong-hat"><ButtonSlide title="ĐẶT PHÒNG NGAY" /></Link>
                    </Stack>
                    <Image src={`/assets/slides/slide3.jpg`} width={1280} height={960} alt="slide1"/>
                </SwiperSlide>

                <SwiperSlide className='slideItems'>
                    <Stack className="slideItemContent" justifyContent={"center"} alignItems={"center"}>
                        <Typography variant='h3' component={"h3"} className='slideItemDescrition'>KARAOKE ZONE 9 - 179 NGUYỄN TUÂN</Typography>
                        <Typography variant='h2' component={"h2"} className='slideItemTitle'>ĐỘI NGŨ NHÂN VIÊN TRẺ TRUNG<br/> THÂN THIỆN</Typography>
                        <Link href="#dat-phong-hat"><ButtonSlide title="ĐẶT PHÒNG NGAY" /></Link>
                    </Stack>
                    <Image src={`/assets/slides/slide4.jpg`} width={1280} height={960} alt="slide1"/>
                </SwiperSlide>
            
        </Swiper>
    )
}