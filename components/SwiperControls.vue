<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <button
    class="bg-purple-500 rounded-[5px] text-[20px] p-[5px] font-serif hover:bg-slate-400"
    @click="swiper.slidePrev()"
  >
    PREV
  </button>
  <button
    class="bg-purple-500 rounded-[5px] text-[20px] p-[5px] font-serif hover:bg-slate-400 ml-[10px]"
    @click="swiper.slideNext()"
  >
    NEXT
  </button>
</template>
