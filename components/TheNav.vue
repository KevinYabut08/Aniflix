<script></script>
<template>
  <div class="relative">
    <NuxtLink class="absolute z-40 flex mt-[10px]" to="/home">
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
      <SearchBar />
      <ThemeToggle />
    </ul>
  </div>
</template>
<style></style>
