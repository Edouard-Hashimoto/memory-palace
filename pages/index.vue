<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white z-10"></div>
        <!-- Abstract gradient background -->
        <div class="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white animate-pulse-slow"></div>
      </div>

      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Memory Place
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">
          Transformez l'espace public en <span class="text-purple-600 font-medium">musée invisible</span>.
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
          <NuxtLink to="/about" class="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 rounded-full font-medium transition-all border border-slate-200">
            En savoir plus
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Manifesto / Core Values (The "Cards") -->
    <section class="py-12 bg-white relative z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/5">
            <div class="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
              📍
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Géolocalisé</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Des souvenirs ancrés physiquement. Il faut être sur place pour ressentir l'histoire.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:border-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-500/5">
            <div class="w-14 h-14 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
              🎧
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Multimédia</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Audio, images, textes. La mémoire prend toutes les formes pour une immersion totale.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
            <div class="w-14 h-14 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Invisible</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Pas de bruit, pas de pub. Juste des lueurs sur une carte pour réenchanter le réel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works (New Section) -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comment ça marche ?</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">Une expérience simple pour reconnecter avec votre environnement.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-200/0 via-purple-200 to-purple-200/0"></div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-white rounded-full border border-slate-200 group-hover:border-purple-400 group-hover:shadow-purple-500/10 transition-all duration-300 flex items-center justify-center text-slate-700 group-hover:text-purple-600 shadow-sm group-hover:scale-110 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Se balader</h3>
            <p class="text-slate-600 text-sm">Ouvrez la carte et promenez-vous dans votre ville pour repérer les halos lumineux.</p>
          </div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-white rounded-full border border-slate-200 group-hover:border-purple-400 group-hover:shadow-purple-500/10 transition-all duration-300 flex items-center justify-center text-slate-700 group-hover:text-purple-600 shadow-sm group-hover:scale-110 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Découvrir</h3>
            <p class="text-slate-600 text-sm">Les souvenirs se déverrouillent. Lisez, écoutez, regardez.</p>
          </div>

          <div class="relative text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-white rounded-full border border-slate-200 group-hover:border-purple-400 group-hover:shadow-purple-500/10 transition-all duration-300 flex items-center justify-center text-slate-700 group-hover:text-purple-600 shadow-sm group-hover:scale-110 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Contribuer</h3>
            <p class="text-slate-600 text-sm">Une histoire à partager ici ? Déposez votre propre capsule temporelle.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Preview (New Section) -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-2">À la une</h2>
            <p class="text-slate-600">Quelques souvenirs récemment déposés.</p>
          </div>
          <NuxtLink to="/map" class="text-purple-600 hover:text-purple-500 text-sm font-medium transition-colors">
            Voir tout →
          </NuxtLink>
        </div>

        <div v-if="recentMemories.length > 0" class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="memory in recentMemories" 
            :key="memory.id"
            class="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-all hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 cursor-pointer"
            @click="$router.push(`/souvenirs/${memory.id}`)"
          >
            <div class="flex items-center justify-between mb-6">
              <span 
                class="inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize"
                :class="`bg-${getMediaTypeInfo(memory.typeMedia).color}-100 text-${getMediaTypeInfo(memory.typeMedia).color}-700`"
              >
                {{ getMediaTypeInfo(memory.typeMedia).label }}
              </span>
              <span class="text-2xl opacity-50 grayscale group-hover:grayscale-0 transition-all">
                {{ getMediaTypeInfo(memory.typeMedia).icon }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-1">
              {{ memory.title }}
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 h-[4.5em]">
              {{ memory.description }}
            </p>
            
            <div class="flex items-center text-xs text-slate-400 font-medium">
              <span>{{ formatTimeAgo(memory.timestamp) }}</span>
              <span class="mx-2">•</span>
              <span>Par {{ memory.username || 'Anonyme' }}</span>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
          <p>Aucun souvenir pour le moment. Soyez le premier à en déposer un !</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-slate-50 z-0"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Rejoignez le mouvement</h2>
        <p class="text-slate-600 text-lg mb-10 font-light">
          Devenez gardien de la mémoire urbaine. Chaque lieu a une histoire, aidez-nous à la raconter.
        </p>
        <NuxtLink to="/register" class="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
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

const { data: allSouvenirs } = await useFetch('/api/souvenirs');

const recentMemories = computed(() => {
  if (!allSouvenirs.value) return [];
  // Clone and sort by date descending, then take top 3
  return [...allSouvenirs.value]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 3);
});

const getMediaTypeInfo = (type) => {
  switch (type) {
    case 'audio': return { label: 'Audio', color: 'pink', icon: '🎵' };
    case 'photo': return { label: 'Photo', color: 'purple', icon: '📷' };
    default: return { label: 'Anecdote', color: 'indigo', icon: '📝' };
  }
};

const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return "À l'instant";
  if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`;
  if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)} h`;
  if (diffInSeconds < 604800) return `Il y a ${Math.floor(diffInSeconds / 86400)} j`;
  return date.toLocaleDateString('fr-FR');
};
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
