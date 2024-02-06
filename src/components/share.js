import { Stack } from "@mui/material";
import {
    FacebookShareButton,
    EmailShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
} from "react-share";

export default function ShareBtn({title,link}){
    return(
        <Stack direction={"row"} spacing={1}>
            <FacebookShareButton
                url={link}
                quote={title}
            >
                <FacebookIcon size={20} round={true}/>
            </FacebookShareButton>

            <LinkedinShareButton
                title={title}
                source={link}
                url={link}
            >
                <LinkedinIcon size={20} round={true}/>
            </LinkedinShareButton>

            <TelegramShareButton title={title} url={link}>
                <TelegramIcon size={20} round={true}/>
            </TelegramShareButton>

            <TwitterShareButton
                title={title}
                url={link}
            >
                <TwitterIcon size={20} round={true}/>
            </TwitterShareButton>

            <EmailShareButton
                subject={title}
                body={`Xin chào ! bài viết này sẽ hữu ích với bạn đó, xem tại: ${link}`}
            >
                <EmailIcon size={20} round={true}/>
            </EmailShareButton>
        </Stack>
    )
}