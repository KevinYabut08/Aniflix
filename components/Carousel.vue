<script></script>

<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    class="w-[1000px] h-[500px] relative"
    style="margin-left: 0px"
  >
    <SwiperSlide>
      <div class="absolute">
        <img src="/assets/images/one-piece-egghead-anime-poster.webp" />
      </div>
      <p class="relative bg-slate-500 opacity-80 mt-[415px]">
        One Piece is a Japanese manga series written and illustrated by Eiichiro
        Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly
        Shōnen Jump since July 1997, with its individual chapters compiled in
        108 tankōbon volumes as of March 2024. The story follows the adventures
        of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he
        explores the Grand Line in search of the mythical treasure known as the
        "One Piece" in order to become the next King of the Pirates.
      </p>
    </SwiperSlide>
    <SwiperSlide>
      <div class="absolute">
        <img src="/assets/images/one-punch-man.jpg" />
      </div>
      <p class="relative bg-slate-500 opacity-70 mt-[430px]">
        One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese
        superhero manga series created by One. It tells the story of Saitama, a
        superhero who, because he can defeat any opponent with a single punch,
        grows bored from a lack of challenge. One wrote the original webcomic
        manga version in early 2009.
      </p>
    </SwiperSlide>
    <SwiperSlide>
      <div class="absolute">
        <img src="/assets/images/jujutsu-kaisen.webp" />
      </div>
      <p class="relative bg-slate-500 opacity-70 mt-[360px]">
        Jujutsu Kaisen (呪術廻戦, rgh. "Sorcery Battle")[b] is a Japanese manga
        series written and illustrated by Gege Akutami. It has been serialized
        in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018,
        with its chapters collected in 26 tankōbon volumes as of April 2024. The
        story follows high school student Yuji Itadori as he joins a secret
        organization of Jujutsu Sorcerers to eliminate a powerful Curse named
        Ryomen Sukuna, of whom Yuji becomes the host. Jujutsu Kaisen is a sequel
        to Akutami's Tokyo Metropolitan Curse Technical School, serialized in
        Shueisha's Jump Giga from April to July 2017, later collected in a
        tankōbon volume, retroactively titled as Jujutsu Kaisen 0, in December
        2018.
      </p>
    </SwiperSlide>
    <SwiperSlide>
      <div class="absolute">
        <img src="/assets/images/bluelock-1024x538.png" />
      </div>
      <p class="relative bg-slate-500 opacity-70 mt-[430px]">
        Blue Lock (Japanese: ブルーロック, Hepburn: Burū Rokku) (stylized as
        BLUELOCK) is a Japanese manga series written by Muneyuki Kaneshiro and
        illustrated by Yusuke Nomura. It has been serialized in Kodansha's
        Weekly Shōnen Magazine since August 2018, with its chapters collected in
        28 tankōbon volumes as of March 2024.
      </p>
    </SwiperSlide>
  </Swiper>
</template>
