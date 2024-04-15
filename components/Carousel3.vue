<script setup></script>

<template>
  <Swiper
    :width="560"
    :modules="[SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="1"
    :loop="true"
    :effect="'cards'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide
      ><iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-r7piEotv8E?si=X3LhGtSo7JX2teuB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide>
      <iframe
        width="560"
        height="315"
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
        width="560"
        height="315"
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
        width="560"
        height="315"
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
