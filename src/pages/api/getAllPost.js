// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async function handler(req, res) {
    try {
        const request = await axios.get(`${process.env.API_URL}/api/posts`)
        res.status(200).json(request?.data);
    } catch (error) {
        res.status(200).json('ok');
    }

}
  