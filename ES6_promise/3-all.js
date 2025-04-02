import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([Photo, user]) => { console.log(`${Photo.body} ${user.firstname} ${user.lastname}`); })
    .catch(() => {
      console.log('Signup system offline');
    });
}
