<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-purple-500/30">
    <AppHeader />
    <main class="flex-grow pt-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
