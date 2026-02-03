<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Memory Place
        </NuxtLink>

        <!-- Navigation -->
        <nav class="flex items-center gap-4">
          <NuxtLink to="/map" class="text-sm font-medium text-slate-300 hover:text-white transition-colors" active-class="text-purple-400">
            Carte
          </NuxtLink>
           <NuxtLink to="/list" class="text-sm font-medium text-slate-300 hover:text-white transition-colors" active-class="text-purple-400">
            Souvenirs
          </NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium text-slate-300 hover:text-white transition-colors" active-class="text-purple-400">
            À propos
          </NuxtLink>

          <div class="h-6 w-px bg-slate-700 mx-2"></div>

          <template v-if="user">
            <NuxtLink to="/profile" class="text-sm text-purple-300 font-medium hidden sm:inline hover:text-purple-200 transition-colors">
              {{ user.username }}
            </NuxtLink>
            <button @click="logout" class="text-sm font-medium text-slate-400 hover:text-red-400 transition-colors">
              Déconnexion
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/login" class="text-sm font-medium bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full transition-colors">
              Connexion
            </NuxtLink>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const { user, logout } = useAuth();
</script>
