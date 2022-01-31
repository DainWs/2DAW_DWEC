<template>
  <div>
  </div>
</template>

<script setup>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

  let auth = getAuth();
  auth.languageCode = 'it';
  let provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log('Successfully registered!');
    console.log(user);
  }).catch((error) => {
    console.log(error);
  });
</script>
 