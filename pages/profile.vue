<template>
  <div class="min-h-[80vh] flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <div class="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 p-8 shadow-xl">
        <div class="text-center mb-8">
          <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-4xl shadow-lg text-white">
            {{ user?.username?.charAt(0).toUpperCase() }}
          </div>
          <h1 class="text-2xl font-bold text-slate-900 mb-1">{{ user?.username }}</h1>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-xs font-semibold text-slate-500 uppercase mb-2">Statistiques</h3>
            <div class="flex justify-between items-center">
              <span class="text-slate-600">Souvenirs partagés</span>
              <span class="text-slate-900 font-bold">{{ userSouvenirsCount }}</span>
            </div>
          </div>

          <button 
            @click="handleLogout"
            class="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl font-medium transition-colors border border-red-200"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

const { user, logout } = useAuth();
const { data: souvenirs } = await useFetch('/api/souvenirs');

const userSouvenirsCount = computed(() => {
  if (!souvenirs.value || !user.value) return 0;
  return souvenirs.value.filter(s => s.userId === user.value.id).length;
});

const formatDate = (dateString) => {
  if (!dateString) return '...';
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const handleLogout = async () => {
  await logout();
};

useHead({
  title: 'Mon Profil - Memory Place'
});
</script>
