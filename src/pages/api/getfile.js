const fs = require('fs');

export default function handler(req, res) {

    try {
        const testFolder = `${process.cwd()}/public/assets/gallery`
        
        const folder = fs.readdirSync(testFolder)
    
        let files = []
        
        folder.map(item => files.push({
            folderName: item === "phong-hat" ? "Hình ảnh Phòng Hát" : "Hình ảnh Karaoke Zone 9",
            folderPath: item,
            files: fs.readdirSync(testFolder + '/' + item)
        }))
    
        return res.status(200).json(files);
        
    } catch (error) {
        return res.status(403).json('lỗi');
    }
}
  