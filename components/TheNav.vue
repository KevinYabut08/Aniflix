<script></script>
<template>
  <ul
    class="flex justify-end gap-[70px] bg-slate-500 opacity-90 p-[30px] font-serif"
  >
    <li class="hover:text-purple-400"><NuxtLink to="/home">Home</NuxtLink></li>
    <li class="hover:text-purple-400">
      <NuxtLink to="/animePage">Anime</NuxtLink>
    </li>
    <li class="hover:text-purple-400"><NuxtLink to="/news">News</NuxtLink></li>
    <li class="hover:text-purple-400">
      <NuxtLink to="/about">About</NuxtLink>
    </li>
    <SearchBar />
    <ThemeToggle />
  </ul>
</template>
<style></style>
