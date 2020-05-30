import axios from 'axios';

const post = async (image: any) => {
    var data = new FormData();
    data.append('image', {
        uri: '../assets/images/23_Arabia_Dunes.jpg',
        name: 'userProfile.jpg',
        type: 'image/jpg',
    });
    axios
        .post(
            'https://a115cfabd0df.ngrok.io/api/process-photo',
            {
                image,
            },
            {
                headers: {
                    'content-type': 'image/jpg', // do not forget this
                },
            },
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export { post };
