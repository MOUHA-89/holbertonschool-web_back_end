export default function uploadPhoto(fileName) {
    return Promise((resolve, reject) => {
        if(fileName) {
            resolve('Success!');
        } else {
            reject(Error(`$('fileName cannot be processed')`));
        }
    });
}