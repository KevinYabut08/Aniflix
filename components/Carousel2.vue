<script></script>
<template>
  <Swiper
    class="relative"
    :width="700"
    :modules="[SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="1"
    :loop="true"
    :effect="'cards'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide class="absolute">
      <img src="assets/images/jujutsu-kaisen.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="assets/images/one-punch-man.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/bluelock-1024x538.png" />
    </SwiperSlide>
  </Swiper>
</template>
<style></style>
