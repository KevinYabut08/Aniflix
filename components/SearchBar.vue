<script setup>
fetch("https://nekos.best/api/v2/neko")
  .then((response) => response.json())
  .then((json) => console.log(json.results[0].url));
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
        type="submit"
        class="dark:bg-slate-900 rounded-[5px] bg-slate-100 ml-[5px]"
      >
        Search
      </button>
    </form>
  </div>
</template>
