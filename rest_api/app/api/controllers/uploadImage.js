
module.exports= {
    upload:  (req,res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // If does not have image mime type prevent from uploading
    if (/^image/.test(image.png)) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv('./' + '/upload/' + image.name);

    // All good
    res.sendStatus(200);
    }
}
