<script setup>
const colorMode = useColorMode();
const changeColor = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<template>
  <div>
    <button class="text-sm rounded" @click="changeColor">
      <ColorScheme placeholder="...">
        <Icon
          v-if="colorMode.value === 'dark'"
          name="heroicons-outline:moon"
          class="text-xl dark:text-accent1"
        />
        <Icon
          v-else
          name="heroicons-outline:sun"
          class="text-xl text-accent2"
        />
      </ColorScheme>
    </button>
  </div>
</template>

<style scoped></style>
