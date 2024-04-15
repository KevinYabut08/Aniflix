<script></script>
<template>
  <footer class="flex flex-col space-y-10 justify-center m-10">
    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
      <NuxtLink class="hover:text-purple-500" to="/home">Home</NuxtLink>
      <NuxtLink class="hover:text-purple-500" to="/animePage">Anime</NuxtLink>
      <NuxtLink class="hover:text-purple-500" to="/news">News</NuxtLink>
      <NuxtLink class="hover:text-purple-500" to="/about">About</NuxtLink>
    </nav>

    <div class="flex justify-center space-x-5">
      <NuxtLink
        to="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
      </NuxtLink>
      <NuxtLink
        to="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
      </NuxtLink>
      <NuxtLink
        to="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
      </NuxtLink>
      <NuxtLink
        to="https://messenger.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
        />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
      </NuxtLink>
    </div>
    <p class="text-center text-gray-700 font-medium">
      &copy; 2024 Aniflix. All rights reservered.
    </p>
  </footer>
</template>
<style></style>
