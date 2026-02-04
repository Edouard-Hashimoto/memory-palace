<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Memory Place
        </NuxtLink>

        <!-- Navigation -->
        <nav class="flex items-center gap-4">
          <NuxtLink to="/map" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-purple-600">
            Carte
          </NuxtLink>
           <NuxtLink to="/list" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-purple-600">
            Souvenirs
          </NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" active-class="text-purple-600">
            À propos
          </NuxtLink>

          <div class="h-6 w-px bg-slate-200 mx-2"></div>

          <template v-if="user">
            <NuxtLink to="/profile" class="text-sm text-purple-600 font-medium hidden sm:inline hover:text-purple-700 transition-colors">
              {{ user.username }}
            </NuxtLink>
            <button @click="logout" class="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors">
              Déconnexion
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/login" class="text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors">
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
