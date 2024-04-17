<template>
  <main
    class="bg-[url('/assets/images/night-sky-stars-clouds-scenery-landscape-anime-digital-art-phone-wallpaper-4k-uhdpaper.com-768@0@i.jpg')] bg-cover"
  >
    <div class="text-center">
      <div v-if="response.title">
        <div class="flex justify-center">
          <Cards-3 class="w-full">
            <template #content>
              <div class="flex justify-center">
                <img
                  :src="response.images.webp.image_url"
                  :alt="response.title"
                />
              </div>
              <h2 class="font-bold">{{ response.title }}</h2>
              <span class="mr-6">Episodes: {{ response.episodes }}</span>
              <span>Score: {{ response.score }}</span>
              <div>
                Genre:
                <span v-for="genre in response.genres">{{ genre.name }}, </span>
              </div>
              <div>
                <span v-for="studio in response.studios" class="mr-4"
                  >{{ studio.name }}
                </span>
                <span>
                  {{ response.airing ? "Currently Airing" : "Finished" }}</span
                >
              </div>
            </template>
          </Cards-3>
        </div>
        <div class="text-center font-serif w-full">
          <h3 class="font-semibold text-white">Synopsis</h3>
          <hr />
          <Sypnosis class="min-w-full">
            <template #content>
              {{ response.synopsis }}
            </template>
          </Sypnosis>
        </div>
      </div>
      <div v-else>
        <LoadingSpinner />
      </div>
    </div>
  </main>
</template>

<script setup>
const router = useRoute();
const response = ref([]);
onBeforeMount(() => {
  getItem();
});
onMounted(() => {
  getItem();
});

const getItem = async () => {
  try {
    const { data, error } = await useFetch(
      `https://api.jikan.moe/v4/anime/${router.params.id}/full`
    );

    if (!error.value) {
      response.value = data.value.data;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
