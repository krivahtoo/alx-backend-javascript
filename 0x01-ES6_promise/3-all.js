import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()]).then(([user, status]) => {
    console.log(`${status.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  })
}
