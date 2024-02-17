import { formatTime } from "@/components/formatTime";
import ShareBtn from "@/components/share";
import { Box, Breadcrumbs, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPost({post}){
    return(
        <Box
            ml={{xs: 0, md: '300px'}}
            width={"100%"}
            height={"auto"}
            mt={{xs: 8, md: 0}}
        >
            <Container maxWidth="md">
                <Stack my={{xs: 3, lg: 5}} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant="h1" component={"h1"} fontWeight={900} fontSize={30} textAlign={"center"} color={"#C19D60"} lineHeight={1.2}>
                        {post?.data?.title}
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Trang chủ
                        </Link>
                        <Link
                            href="/tin-tuc-khuyen-mai"
                        >
                            Tin tức - Khuyến mại
                        </Link>
                        <Typography variant="body2">{post?.data?.title}</Typography>
                    </Breadcrumbs>
                </Stack>
                <Image
                    src={post?.data?.thumbnail || "/assets/room1.jpg"}
                    width={900}
                    height={400}
                    alt={post?.data?.title}
                    className="img-thumbnail"
                />
            </Container>

            <Container maxWidth="md" className="postContent">
                <div dangerouslySetInnerHTML={{ __html: post?.data?.content }}></div>
                <Divider sx={{mt:5}}/>
                <Stack direction={{xs: 'column', md: 'row'}} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography fontSize={14} fontWeight={300}>Ngày đăng: {formatTime(post?.data?.post_date)}</Typography>
                    <ShareBtn 
                        title={post?.data?.title}
                        link={`http://localhost:3000/${post?.data?.slug}_id=${post?.data?.id}`}
                    />
                </Stack>
            </Container>
        </Box>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://adm.karaokezone9.vn/wp-json/api/posts')
    const posts = await res.json()
    
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            id: post.id,
            slug: `${post.slug}_id=${post.id}`
        },
    }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
   
// This also gets called at build time
export async function getStaticProps({ params }) {
    const slug = params?.slug

    const id = slug.slice(slug.search('_id=') + 4)

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://adm.karaokezone9.vn/wp-json/api/posts/${id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}