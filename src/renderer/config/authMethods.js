import firebase from './appConfig';

const getGithubProvider = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  githubProvider.addScope('repo');
  githubProvider.addScope('user');
  githubProvider.addScope('read:org');
  githubProvider.addScope('read:repo');
  githubProvider.addScope('read:user');
  githubProvider.addScope('user:email');
  githubProvider.addScope('user:follow');
  return githubProvider;
};
// firebase
//   .auth()
//   .setPersistance(firebase.auth.Auth.Persistence.LOCAL)
//   .then(() => {
//     const provider = getGithubProvider();
//     return firebase.auth().signInWithRedirect(provider);
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

export default { GitHub: getGithubProvider() };
