<script setup>
fetchData();

async function fetchData() {
  try {
    const animeTitle = document.getElementById(animeTitle).value;

    const response = await fetch(
      "https://api.jikan.moe/v4/anime/{id}/${animeTitle}"
    );

    if (!response.ok) {
      throw new Error("Anime not found");
    }

    const data = await response.json();
    console.console.log(data);
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
  <div>
    <form>
      <input
        class="rounded-[5px]"
        type="text"
        id="animeTitle"
        placeholder="Search.."
        name="search"
      />
      <button
        class="dark:bg-slate-900 rounded-[5px] bg-slate-100 ml-[5px]"
        onclick="fetchData"
      >
        Search
      </button>
    </form>
  </div>
</template>
