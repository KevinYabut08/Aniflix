<template>
  <div
    class="card rounded-md bg-cyan-700 dark:bg-purple-500 bg-opacity-70 shadow-lg mx-2 my-4 w-48 flex flex-col max-w-fit overflow-hidden font-serif hover:bg-slate-500"
  >
    <div class="image overflow-hidden">
      <slot name="image"></slot>
    </div>
    <div class="content pl-2">
      <slot name="content"></slot>
    </div>
    <div class="episode pl-2 pb-4">
      <slot name="episode"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
