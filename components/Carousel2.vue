<script></script>
<template>
  <Swiper
    :height="1000"
    :modules="[SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
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
    <SwiperSlide
      ><iframe
        class="w-[450px] h-[225px] md:w-full md:h-[600px]"
        src="https://www.youtube.com/embed/e8hQsNouBR4?si=Z1sQuMHkllJiW1DR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide
      ><iframe
        class="w-[450px] h-[225px] md:w-full md:h-[600px]"
        src="https://www.youtube.com/embed/2Yk-68Fx_HM?si=CpEgWwPXwD9JeRdw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide
      ><iframe
        class="w-[450px] h-[225px] md:w-full md:h-[600px]"
        src="https://www.youtube.com/embed/6xWfTkL4MEE?si=JPjypLUoe3veRU_u"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide
      ><iframe
        class="w-[450px] h-[225px] md:w-full md:h-[600px]"
        src="https://www.youtube.com/embed/DcofRCnm20E?si=iepFX-LESco2JfXT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
    <SwiperSlide>
      <iframe
        class="w-[450px] h-[225px] md:w-full md:h-[600px]"
        src="https://www.youtube.com/embed/ZK3qs1CWrMg?si=cF4paklJZ9PsC9tj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe
    ></SwiperSlide>
    <div class="mt-[5px]">
      <SwiperControls />
    </div>
  </Swiper>
</template>
<style></style>
