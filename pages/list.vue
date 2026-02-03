<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 p-4 pb-20">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
        Souvenirs
      </h1>
      <NuxtLink to="/" class="text-sm bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors border border-slate-700">
        Carte
      </NuxtLink>
    </div>
    
    <!-- Grid -->
    <div v-if="pending" class="text-center text-slate-500 mt-10">Chargement...</div>
    
    <div v-else-if="!memories || memories.length === 0" class="text-center text-slate-500 mt-10">
      Aucun souvenir trouvé. Soyez le premier à en déposer un !
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="mem in memories" 
        :key="mem.id" 
        class="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-colors shadow-lg relative group cursor-pointer hover:bg-slate-800/80"
        @click="navigateTo(`/souvenirs/${mem.id}`)"
      >
        <div class="flex justify-between items-start mb-3">
          <h2 class="font-bold text-white truncate pr-2 flex-grow">{{ mem.title }}</h2>
          <div class="flex items-center gap-2">
            <span class="text-xs bg-slate-900 px-2 py-1 rounded text-purple-300 border border-slate-700 capitalize">
              {{ mem.typeMedia === 'photo' ? '📷 Photo' : mem.typeMedia === 'audio' ? '🎵 Audio' : '📝 Texte' }}
            </span>
            <button 
              v-if="user && mem.userId === user.id"
              @click.stop="deleteMemory(mem.id)"
              class="text-slate-500 hover:text-red-400 transition-colors p-1"
              title="Supprimer"
            >
              🗑️
            </button>
          </div>
        </div>
        
        <p class="text-slate-400 text-sm mb-4 line-clamp-3">
          {{ mem.description }}
        </p>

        <div v-if="mem.urlMedia && mem.typeMedia === 'photo'" class="mb-3 rounded-lg overflow-hidden h-32 bg-slate-900">
          <img :src="mem.urlMedia" class="w-full h-full object-cover" loading="lazy" />
        </div>
        
        <div class="flex justify-between items-center text-xs text-slate-500 mt-auto pt-2 border-t border-slate-700/50">
          <div class="flex flex-col">
             <span>{{ new Date(mem.timestamp).toLocaleDateString() }}</span>
             <span class="text-purple-400" v-if="mem.username">Par {{ mem.username }}</span>
          </div>
          <span class="font-mono">{{ mem.latitude.toFixed(4) }}, {{ mem.longitude.toFixed(4) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { user } = useAuth();
const { data: memories, pending, refresh } = await useFetch('/api/souvenirs');

const deleteMemory = async (id) => {
  if (!confirm('Voulez-vous vraiment supprimer ce souvenir ?')) return;
  
  try {
    await $fetch(`/api/souvenirs/${id}`, { method: 'DELETE' });
    await refresh(); // Refresh list after delete
  } catch (e) {
    alert('Erreur lors de la suppression');
    console.error(e);
  }
};

useHead({
  title: 'Liste des souvenirs - Memory Place'
});
</script>
