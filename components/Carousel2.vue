<script></script>
<template>
  <Swiper
    :height="300"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide>
      <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
    </SwiperSlide>
    <SwiperControls />
  </Swiper>
</template>
<style></style>
