import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  await Promise.all([createUser(), uploadPhoto()]).then(([user, status]) => {
    console.log(`${status.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
