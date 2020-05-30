import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
const post = async (image: any) => {
    return await RNFetchBlob.fetch(
        'POST',
        'http://a115cfabd0df.ngrok.io/api/process-photo',
        {
            'Content-Type': 'application/octet-stream',
        },
        RNFetchBlob.wrap(image),
    )
        .then(async (res) => {
            // console.log(res.text());

            console.log('res received', res.base64());
            const write = RNFetchBlob.fs.writeFile(
                '/Users/atomas/Documents/Projects/ESA/HDMarS/src/Functions/test.wav',
                res.base64(),
                'base64',
            );
            console.log(await write);
        })
        .catch((err) => {
            console.log(err);
        });
};

const processUrl = async (url: string) => {
    const response = await axios.post(
        'http://a115cfabd0df.ngrok.io/process-url',
        {
            url,
        },
    );
    console.log(response);
};

export { post, processUrl };
