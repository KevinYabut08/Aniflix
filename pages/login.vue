<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
async function login() {
  try {
    let { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/home");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main
    class="bg-[url('/assets/gif/337af398877b856f25624144420a5230.gif')] bg-cover h-screen p-[50px] font-serif"
  >
    <form @submit.prevent="login">
      <label for="email">
        Email:
        <input type="email" name="email" id="email" v-model="email" /> </label
      ><br /><br />
      <label for="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        /> </label
      ><br /><br />
      <input
        class="bg-purple-500 rounded-[5px] hover:bg-slate-400 ml-[10px]"
        type="submit"
        value="Login"
        @click="login"
      />
    </form>
  </main>
</template>
<style>
body {
  text-align: center;
}
</style>
