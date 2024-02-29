import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name:'dut2pln5m',
    api_key:'896511489254632',
    api_secret:'7aKQQOpl0ZWa3zujEmpGe5qUUbg'
})

describe('Pruebas en el uploadImage', () => {
    let imageId;

    beforeEach(async () => {
        const { data } = await axios.get('https://res.cloudinary.com/dut2pln5m/image/upload/v1709083508/eszjtl66p0hfdvhcggtk.jpg', {
            responseType: 'arraybuffer'
        });

        const file = new File([data], 'foto.jpg');
        const url = await uploadImage(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        imageId = segments[segments.length - 1].replace('.jpg', '');
    });

    test('debe cargar un archivo y retornar el url', async () => {
        expect(typeof imageId).toBe('string');
    });

    afterEach(async () => {
        if (imageId) {
            await new Promise((resolve, reject) => {
                cloudinary.v2.api.delete_resources(imageId, {}, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        }
    });
});