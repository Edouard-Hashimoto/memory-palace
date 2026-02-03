<template>
  <div class="h-[calc(100vh-64px)] w-full relative">
    <ClientOnly>
      <Map />
    </ClientOnly>
    <AddMemory @created="refreshMap" />
  </div>
</template>

<script setup>
const refreshKey = useState('refreshKey', () => 0);

const refreshMap = () => {
  refreshKey.value++;
};

useHead({
  title: 'Carte - Memory Place'
});
</script>
