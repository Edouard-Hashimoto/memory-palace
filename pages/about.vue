<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 p-8 flex flex-col items-center">
    <div class="max-w-2xl w-full">
      <div class="mb-8">
        <NuxtLink to="/" class="text-purple-600 hover:text-purple-500 flex items-center gap-2">
          ← Retour à la carte
        </NuxtLink>
      </div>

      <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent mb-6">
        Memory Place
      </h1>

      <div class="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>Memory Place</strong> est une expérience de réalité augmentée invisible. 
          Nous transformons l'espace public en un musée vivant où chaque lieu porte la mémoire de ceux qui y sont passés.
        </p>
        
        <div class="bg-white p-6 rounded-2xl border border-slate-200 my-8 shadow-sm">
          <h2 class="text-xl font-semibold text-slate-900 mb-4">Comment ça marche ?</h2>
          <ul class="space-y-4">
            <li class="flex gap-4">
              <span class="bg-purple-100 text-purple-700 w-8 h-8 flex items-center justify-center rounded-full shrink-0">1</span>
              <span>Baladez-vous sur la carte pour découvrir les lueurs violettes.</span>
            </li>
            <li class="flex gap-4">
              <span class="bg-purple-100 text-purple-700 w-8 h-8 flex items-center justify-center rounded-full shrink-0">2</span>
              <span>Cliquez sur un marqueur pour révéler le souvenir (audio, texte ou photo).</span>
            </li>
            <li class="flex gap-4">
              <span class="bg-purple-100 text-purple-700 w-8 h-8 flex items-center justify-center rounded-full shrink-0">3</span>
              <span>Laissez votre propre trace en utilisant le bouton "+" en bas à droite.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'À propos - Memory Place'
});
</script>
