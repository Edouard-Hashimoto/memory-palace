<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900 z-10"></div>
        <!-- Abstract gradient background -->
        <div class="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 animate-pulse-slow"></div>
      </div>

      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Memory Place
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
          Transformez l'espace public en <span class="text-purple-300 font-medium">musée invisible</span>.
          <br class="hidden md:block" />
          Découvrez les histoires cachées derrière chaque lieu.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/map" class="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            <span class="relative z-10 flex items-center gap-2">
              Explorer la Carte
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </NuxtLink>
          <NuxtLink to="/about" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full font-medium transition-all border border-slate-700">
            En savoir plus
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Manifesto / Core Values (The "Cards") -->
    <section class="py-12 bg-slate-900 relative z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/30 transition-all hover:bg-slate-800/60 backdrop-blur-sm">
            <div class="w-14 h-14 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center text-2xl">
              📍
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Géolocalisé</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Des souvenirs ancrés physiquement. Il faut être sur place pour ressentir l'histoire.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-pink-500/30 transition-all hover:bg-slate-800/60 backdrop-blur-sm">
            <div class="w-14 h-14 mx-auto mb-4 bg-pink-900/30 rounded-full flex items-center justify-center text-2xl">
              🎧
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Multimédia</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Audio, images, textes. La mémoire prend toutes les formes pour une immersion totale.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/30 transition-all hover:bg-slate-800/60 backdrop-blur-sm">
            <div class="w-14 h-14 mx-auto mb-4 bg-indigo-900/30 rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Invisible</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Pas de bruit, pas de pub. Juste des lueurs sur une carte pour réenchanter le réel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works (New Section) -->
    <section class="py-20 bg-slate-900/50">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Comment ça marche ?</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Une expérience simple pour reconnecter avec votre environnement.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-900/0 via-purple-500/30 to-purple-900/0"></div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-purple-500 transition-colors flex items-center justify-center text-3xl shadow-lg relative z-10">
              🚶
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Se balader</h3>
            <p class="text-slate-400 text-sm">Ouvrez la carte et promenez-vous dans votre ville pour repérer les halos lumineux.</p>
          </div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-purple-500 transition-colors flex items-center justify-center text-3xl shadow-lg relative z-10">
              🔔
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Découvrir</h3>
            <p class="text-slate-400 text-sm">Une fois à proximité (50m), le souvenir se déverrouille. Lisez, écoutez, regardez.</p>
          </div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-purple-500 transition-colors flex items-center justify-center text-3xl shadow-lg relative z-10">
              ✍️
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Contribuer</h3>
            <p class="text-slate-400 text-sm">Une histoire à partager ici ? Déposez votre propre capsule temporelle.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Preview (New Section) -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-bold text-white mb-2">À la une</h2>
            <p class="text-slate-400">Quelques souvenirs récemment déposés.</p>
          </div>
          <NuxtLink to="/map" class="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            Voir tout →
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Fake Card 1 -->
          <div class="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
            <!-- Placeholder Image -->
            <div class="absolute inset-0 bg-slate-700 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
              <span class="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded mb-2">Historique</span>
              <h3 class="text-lg font-bold text-white mb-1">Le vieux pont</h3>
              <p class="text-slate-400 text-sm line-clamp-2">C'est ici qu'on se retrouvait tous les dimanches matin...</p>
            </div>
          </div>

          <!-- Fake Card 2 -->
          <div class="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
            <div class="absolute inset-0 bg-slate-700 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
              <span class="inline-block px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded mb-2">Audio</span>
              <h3 class="text-lg font-bold text-white mb-1">Concert improvisé</h3>
              <p class="text-slate-400 text-sm line-clamp-2">Le son du saxophone résonnait dans toute la ruelle.</p>
            </div>
          </div>

          <!-- Fake Card 3 -->
          <div class="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
            <div class="absolute inset-0 bg-slate-700 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
              <span class="inline-block px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded mb-2">Anecdote</span>
              <h3 class="text-lg font-bold text-white mb-1">Le chat du boulanger</h3>
              <p class="text-slate-400 text-sm line-clamp-2">Il attendait toujours devant la porte à 6h pile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900 z-0"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Rejoignez le mouvement</h2>
        <p class="text-slate-300 text-lg mb-10 font-light">
          Devenez gardien de la mémoire urbaine. Chaque lieu a une histoire, aidez-nous à la raconter.
        </p>
        <NuxtLink to="/register" class="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Commencer l'aventure
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Accueil - Memory Place',
  meta: [
    { name: 'description', content: 'Transformez la ville en musée invisible. Déposez et découvrez des souvenirs géolocalisés.' }
  ]
});
</script>

<style>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite;
}
</style>
