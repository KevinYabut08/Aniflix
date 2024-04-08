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
    console.log("login", data, error);
    if (error) throw error;
    router.push("/home");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main
    class="bg-[url('/assets/gif/00950f02ee8d931150d2f97b7276e1e8.gif')] bg-cover h-screen p-[50px] font-serif"
  >
    <div class="bg-slate-400 w-[400px] rounded-[10px] p-[50px] opacity-90">
      <form @submit.prevent="login">
        <label for="email">
          Email:
          <input
            class="mb-[20px]"
            type="email"
            name="email"
            id="email"
            v-model="email"
          />
        </label>
        <label for="password">
          Password:
          <input
            class="mb-[20px]"
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </label>
        <div class="flex justify-center gap-[20px] mr-[10px]">
          <input
            class="bg-slate-100 text-slate-900 hover:bg-purple-800 hover:text-white rounded-[5px]"
            type="submit"
            value="LOGIN"
            @click="login"
          />
        </div>
      </form>
    </div>
  </main>
</template>
<style></style>
