<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <main>
    <NavBar /><br />
    <div>
      <Carousel2 />
    </div>
    <h1 class="text-center text-[25px] font-serif mt-[50px] gap-[50px]">
      ANIME NEWS
    </h1>
    <div
      class="grid grid-cols-1 ml-[50px] md:grid md:grid-cols-3 md:ml-[110px]"
    >
      <NewsCard />
    </div>
    <footer class="mt-[10px]">
      <TheFooter />
    </footer>
  </main>
</template>
<style></style>
