<template>
  <div>
    <div>
      <span v-for="(item, index) in onlyFirstFew" :key="index">
        <img
          :src="item.images.webp.image_url"
          class="transform skew-y-12 inline-block w-[150px] h-[150px] rounded-[5px] relative transition-[0.3] mt-[30px] mb-[30px] hover:transform-none"
          :alt="item.title"
          @click="goAnimePage(item)"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topAnime: {
    type: Array,
    required: true,
  },
});
const { topAnime } = toRefs(props);

const onlyFirstFew = computed(() => {
  if (!topAnime.value) return;
  return topAnime.value.slice(0, 12);
});

const router = useRouter();
const goAnimePage = (anime) => {
  router.push(`/anime/${anime.mal_id}`);
};
</script>

<style scoped>
.card-slider {
  margin: 60px auto;
  text-align: center;
}
</style>
