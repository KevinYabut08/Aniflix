<template>
  <div
    class="md:hidden flex justify-between p-4 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30"
  >
    <NuxtLink to="/home">
      <Logo />
    </NuxtLink>
    <div class="md:hidden">
      <button @click="toggleMenu">
        <Icon
          v-if="isMenuHidden"
          name="heroicons-outline:bars-3"
          class="w-8 h-8 text-darkColor dark:text-lightColor"
        />
        <Icon
          v-else
          name="heroicons-outline:x-mark"
          class="w-8 h-8 text-darkColor dark:text-lightColor absolute top-4 right-4"
        />
      </button>
    </div>
  </div>
  <div
    :class="!isMenuHidden ? 'block' : 'hidden'"
    class="flex-col text-center h-screen backdrop-filter backdrop-blur-lg bg-opacity-30"
  >
    <ul class="cursor-pointer text-xl font-serif">
      <li class="hover:text-purple-400 py-4">
        <NuxtLink to="/home" class="block">Home</NuxtLink>
      </li>
      <li class="hover:text-purple-400 py-4">
        <NuxtLink to="/animePage" class="block">Anime</NuxtLink>
      </li>
      <li class="hover:text-purple-400 py-4">
        <NuxtLink to="/news" class="block">News</NuxtLink>
      </li>
      <li class="hover:text-purple-400 py-4">
        <NuxtLink to="/about" class="block">About</NuxtLink>
      </li>
    </ul>
    <Logout />
    <ThemeToggle />
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle", () => true);

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>
