import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([createUser(), uploadPhoto()]).then(([userRes, statusRes]) => {
    if (userRes.status == 'rejected' || statusRes.status == 'rejected') {
      console.log('Signup system offline');
    } else {
      const status = statusRes.value;
      const user = userRes.value;
      console.log(`${status.body} ${user.firstName} ${user.lastName}`);
    }
  });
}
