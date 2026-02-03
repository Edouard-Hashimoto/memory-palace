<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-purple-500/30">
    <AppHeader />
    <main class="flex-grow pt-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
