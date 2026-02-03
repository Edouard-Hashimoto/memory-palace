<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 p-4 pb-20 flex justify-center">
    <div v-if="pending" class="text-center text-slate-500 mt-20">Chargement...</div>
    <div v-else-if="error" class="text-center text-red-400 mt-20">Erreur : Souvenir introuvable</div>
    
    <div v-else class="w-full max-w-2xl">
      <!-- Nav -->
      <div class="mb-6">
        <NuxtLink to="/list" class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          ← Retour à la liste
        </NuxtLink>
      </div>

      <!-- Card -->
      <div class="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
        <!-- Media Header -->
        <div v-if="mem.urlMedia" class="w-full bg-black relative">
           <img 
             v-if="mem.typeMedia === 'photo'" 
             :src="mem.urlMedia" 
             class="w-full h-auto max-h-[60vh] object-contain mx-auto" 
           />
           <div v-else-if="mem.typeMedia === 'audio'" class="p-12 flex justify-center">
             <audio controls :src="mem.urlMedia" class="w-full max-w-md" />
           </div>
        </div>

        <!-- Content -->
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h1 class="text-3xl font-bold text-white mb-2">{{ mem.title }}</h1>
               <span class="text-sm bg-slate-900 px-3 py-1 rounded-full text-purple-300 border border-slate-700 capitalize inline-block">
                {{ mem.typeMedia === 'photo' ? '📷 Photo' : mem.typeMedia === 'audio' ? '🎵 Audio' : '📝 Texte' }}
              </span>
            </div>
            
            <button 
              v-if="user && mem.userId === user.id"
              @click="deleteMemory"
              class="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Supprimer</span>
              🗑️
            </button>
          </div>

          <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed mb-8 whitespace-pre-wrap">
            {{ mem.description }}
          </div>

          <!-- Footer Metadata -->
          <div class="pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between text-sm text-slate-500 gap-4">
            <div class="flex flex-col gap-1">
              <span class="text-slate-400">Posté le</span>
              <span>{{ new Date(mem.timestamp).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
            </div>
             <div class="flex flex-col gap-1">
              <span class="text-slate-400">Auteur</span>
              <span class="text-purple-400 font-medium">{{ mem.username || 'Anonyme' }}</span>
            </div>
            <div class="flex flex-col gap-1">
               <span class="text-slate-400">Localisation</span>
               <span class="font-mono">{{ mem.latitude.toFixed(6) }}, {{ mem.longitude.toFixed(6) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { user } = useAuth();

const { data: mem, pending, error } = await useFetch(`/api/souvenirs/${route.params.id}`);

const deleteMemory = async () => {
  if (!confirm('Voulez-vous vraiment supprimer ce souvenir ?')) return;
  
  try {
    await $fetch(`/api/souvenirs/${mem.value.id}`, { method: 'DELETE' });
    router.push('/list');
  } catch (e) {
    alert('Erreur lors de la suppression');
  }
};

useHead({
  title: computed(() => mem.value ? `${mem.value.title} - Memory Place` : 'Souvenir')
});
</script>
