<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
    <div class="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-700">
      <h1 class="text-3xl font-bold text-white mb-6 text-center">Inscription</h1>
      
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-slate-400 text-sm mb-1">Nom d'utilisateur</label>
          <input v-model="form.username" type="text" required class="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
        </div>
        
        <div>
          <label class="block text-slate-400 text-sm mb-1">Mot de passe</label>
          <input v-model="form.password" type="password" required class="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
        </div>

        <div v-if="error" class="text-red-400 text-sm text-center">
          {{ error }}
        </div>

        <button type="submit" :disabled="loading" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:scale-100">
          {{ loading ? 'Création...' : 'Créer mon compte' }}
        </button>
      </form>

      <div class="mt-6 text-center text-slate-400 text-sm">
        Déjà un compte ? 
        <NuxtLink to="/login" class="text-purple-400 hover:text-purple-300">Se connecter</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { register } = useAuth();
const router = useRouter();

const form = reactive({
  username: '',
  password: ''
});

const loading = ref(false);
const error = ref('');

const handleRegister = async () => {
  loading.value = true;
  error.value = '';
  
  const success = await register(form.username, form.password);
  
  if (success) {
    router.push('/');
  } else {
    error.value = "Erreur lors de l'inscription (nom d'utilisateur pris ?)";
  }
  loading.value = false;
};

useHead({ title: 'Inscription - Memory Place' });
</script>
