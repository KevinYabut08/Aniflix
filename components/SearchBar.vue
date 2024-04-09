<script setup>
const search_query = ref("");
const animelist = ref([]);

const HandleSearch = async () => {
  animelist.value = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${search_query.value}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  search_query.value = "";
};

return {
  Card,
  search_query,
  animelist,
  HandleSearch,
};
</script>
<template>
  <div>
    <form>
      <input
        class="rounded-[5px]"
        type="text"
        id="animeTitle"
        placeholder="Search for an anime"
        name="search"
      />
      <button
        type="submit"
        class="dark:bg-slate-900 rounded-[5px] bg-slate-100 ml-[5px]"
      >
        Search
      </button>
    </form>
  </div>
  <div><SearchCard /></div>
</template>
