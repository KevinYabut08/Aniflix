<template>
  <main
    class="bg-[url('/assets/images/full-moon-lake-tree-mountain-scenery-phone-wallpaper-4k-uhdpaper.com-137@3@a.jpg')] bg-cover"
  >
    <NavBar />
    <div>
      <div class="header"></div>
      <div class="max-w-6xl shadow-md m-auto min-h-screen pt-3">
        <div class="px-2">
          <div>
            <div class="h-10 w-full bg-purple-900">
              <h1 class="text-2xl px-4 text-white font-bold font-serif">
                Upcoming Anime
              </h1>
            </div>
            <TopAnime :topAnime="topAnime" />
          </div>
          <div>
            <div class="h-10 w-full bg-purple-900">
              <h1 class="text-2xl px-4 text-white font-bold font-serif">
                New Season
              </h1>
            </div>
            <div class="flex flex-wrap justify-center">
              <Cards-3
                v-for="anime in response"
                :key="anime.mal_id"
                class="mx-auto"
                @click="goAnime(anime)"
              >
                <template #image>
                  <img
                    :src="anime.images.webp.image_url"
                    height="266"
                    :alt="anime.title"
                  />
                </template>
                <template #content>
                  <h2 class="font-bold">{{ anime.title }}</h2>
                </template>
              </Cards-3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-[200px]">
      <NuxtLink to="/moreAnime"
        ><PrimaryButton>More Anime</PrimaryButton></NuxtLink
      >
    </div>
    <TheFooter />
  </main>
</template>

<script setup>
const topAnime = ref(null);
const response = ref([]);

onBeforeMount(() => {
  getData();
});
onMounted(() => {
  getData();
});
async function getData() {
  try {
    const { data, error } = await useFetch(
      "https://api.jikan.moe/v4/seasons/now"
    );
    if (data.value) {
      response.value = data.value.data;
    }
    const { data: result } = await useLazyFetch(
      "https://api.jikan.moe/v4/top/anime"
    );
    if (result.value) {
      topAnime.value = result.value.data;
    }
  } catch (error) {
    console.log(error);
  }
}

const router = useRouter();
const goAnime = (anime) => {
  router.push(`/anime/${anime.mal_id}`);
};
</script>

<style lang="scss" scoped></style>
