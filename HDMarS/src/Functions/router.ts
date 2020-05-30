import RNFetchBlob from 'rn-fetch-blob';
const post = async (image: any) => {
    return await RNFetchBlob.fetch(
        'POST',
        'http://a115cfabd0df.ngrok.io/api/process-photo',
        {
            'Content-Type': 'application/octet-stream',
        },
        RNFetchBlob.wrap(image),
    );
};

export { post };
