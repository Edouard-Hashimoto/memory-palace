<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
      <h1 class="text-3xl font-bold text-slate-900 mb-6 text-center">Connexion</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-slate-600 text-sm mb-1">Nom d'utilisateur</label>
          <input v-model="form.username" type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-400" />
        </div>
        
        <div>
          <label class="block text-slate-600 text-sm mb-1">Mot de passe</label>
          <input v-model="form.password" type="password" required class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-400" />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          Identifiants incorrects
        </div>

        <button type="submit" :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 shadow-md">
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>

      <div class="mt-6 text-center text-slate-500 text-sm">
        Pas encore de compte ? 
        <NuxtLink to="/register" class="text-purple-600 hover:text-purple-700 font-medium">S'inscrire</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth();
const router = useRouter();

const form = reactive({
  username: '',
  password: ''
});

const loading = ref(false);
const error = ref(false);

const handleLogin = async () => {
  loading.value = true;
  error.value = false;
  
  const success = await login(form.username, form.password);
  
  if (success) {
    router.push('/');
  } else {
    error.value = true;
  }
  loading.value = false;
};

useHead({ title: 'Connexion - Memory Place' });
</script>
