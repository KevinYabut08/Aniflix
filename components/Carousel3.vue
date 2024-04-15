<script setup></script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="1"
    :loop="true"
    :effect="'cards'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    class="w-[380px] md:w-[560px]"
  >
    <SwiperSlide>
      <iframe
        class="w-[430px] h-[250px] md:w-[560px] md:h-[400px]"
        src="https://www.youtube.com/embed/QbssuwhpEgo?si=hSToXFGufpDjDw8a"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide
      ><iframe
        class="w-[430px] h-[250px] md:w-[560px] md:h-[400px]"
        src="https://www.youtube.com/embed/VDT8kutKrk0?si=lznAPqcYYciVtAqk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide
      ><iframe
        class="w-[430px] h-[250px] md:w-[560px] md:h-[400px]"
        src="https://www.youtube.com/embed/iDqsuA_Ogjk?si=2-wIP5LXdp1l2VBe"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe
    ></SwiperSlide>
  </Swiper>
</template>
