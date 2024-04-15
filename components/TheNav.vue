<script></script>
<template>
  <div
    class="hidden md:flex md:justify-center relative bg-opacity-30 backdrop-blur"
  >
    <NuxtLink class="z-40 mt-[10px] mr-[700px]" to="/home">
      <Logo />
    </NuxtLink>
    <ul class="flex justify-end gap-[70px] opacity-80 p-[30px] font-serif">
      <li class="hover:text-purple-400">
        <NuxtLink to="/home">Home</NuxtLink>
      </li>
      <li class="hover:text-purple-400">
        <NuxtLink to="/animePage">Anime</NuxtLink>
      </li>
      <li class="hover:text-purple-400">
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li class="hover:text-purple-400">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <Logout />
      <div class="mr-[20px]">
        <ThemeToggle />
      </div>
    </ul>
  </div>
</template>
<style></style>
