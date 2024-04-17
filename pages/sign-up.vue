<script setup>
const client = useSupabaseClient();
const router = useRouter();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
    router.push("/login");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main
    class="bg-[url('/assets/gif/220069.gif')] bg-cover h-screen p-[50px] font-serif"
  >
    <form
      @submit.prevent="signUp"
      class="bg-slate-400 bg-opacity-80 p-[20px] rounded-[10px] md:mr-[500px] md:ml-[500px] mr-[50px]"
    >
      <label for="email">
        Email:
        <input type="email" name="email" v-model="email" /> </label
      ><br /><br />
      <label for="password">
        Password:
        <input type="password" name="password" v-model="password" /> </label
      ><br /><br />
      <input
        class="bg-purple-500 rounded-[5px] hover:bg-slate-400 ml-[10px]"
        type="submit"
        value="Sign-up"
        @click="signUp"
      />
    </form>
  </main>
</template>
<style>
body {
  text-align: center;
}
</style>
