<script></script>
<template class="Lato">
  <main>
    <TheNav />
    <header>
      <div class="absolute">
        <Carousel />
      </div>
      <div
        class="p-[30px] ml-[1000px] font-serif bg-purple-500 pb-[101px] opacity-70 text-justify"
      >
        <p>
          Welcome to the world of anime, where imagination knows no bounds! Our
          website is your gateway to a universe filled with captivating stories,
          colorful characters, and boundless creativity. Here, you'll find a
          vast collection of anime series and movies spanning across every genre
          imaginable, from thrilling action-packed adventures to heartwarming
          romance and everything in between. Whether you're a seasoned otaku or
          just dipping your toes into the world of anime, there's something here
          for everyone to enjoy. Browse our extensive library, discover hidden
          gems, and immerse yourself in the rich tapestry of Japanese animation.
          With regularly updated content and recommendations tailored to your
          preferences, our website is your ultimate destination for all things
          anime. So sit back, relax, and let the journey begin!
        </p>
        <div class="ml-[170px] mt-[10px]">
          <NuxtLink to="/animePage">
            <PrimaryButton>Browse Anime</PrimaryButton></NuxtLink
          >
        </div>
      </div>
    </header>
    <br /><br /><br />
    <h1 class="text-[25px] ml-[60px] font-serif mt-[100px]">
      POPULAR ANIME THIS WEEK
    </h1>
    <div class="grid grid-cols-4 ml-[60px] text-center mt-[80px] font-serif">
      <Cards />
    </div>
    <div class="grid grid-cols-4 ml-[60px] text-center mt-[300px] font-serif">
      <Cards-2 />
    </div>
    <div>
      <h1 class="text-[25px] ml-[60px] font-serif mt-[300px]">
        ANIME WORLD NEWS
      </h1>
      <div class="ml-[500px]">
        <Carousel3 />
      </div>
    </div>
    <TheFooter />
  </main>
</template>
<style></style>
