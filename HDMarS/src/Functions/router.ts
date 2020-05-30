import RNFetchBlob from 'rn-fetch-blob';
const post = async (image: any) => {
    RNFetchBlob.fetch(
        'POST',
        'http://127.0.0.1:5000/api/process-photo',
        {
            'Content-Type': 'application/octet-stream',
        },
        RNFetchBlob.wrap(image),
    )
        .then((res) => {
            console.log(res.text());
        })
        .catch((err) => {
            console.log(err);
        });
};

export { post };
