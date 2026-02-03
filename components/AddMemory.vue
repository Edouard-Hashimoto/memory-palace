<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Form Panel -->
    <div v-if="isOpen" class="mb-4 w-80 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl p-5 shadow-2xl transition-all">
      <h3 class="text-lg font-bold text-white mb-4">Laisser une trace</h3>
      
      <form @submit.prevent="submitMemory" class="space-y-3">
        <div>
          <label class="block text-xs text-slate-400 mb-1">Titre</label>
          <input v-model="form.title" type="text" required class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-purple-500 outline-none" placeholder="L'esprit du lieu..." />
        </div>

        <div>
          <label class="block text-xs text-slate-400 mb-1">Histoire</label>
          <textarea v-model="form.description" rows="3" class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Racontez ce souvenir..."></textarea>
        </div>

        <div>
           <label class="block text-xs text-slate-400 mb-1">Type de média</label>
           <div class="flex space-x-2">
             <button type="button" @click="form.typeMedia = 'text'" :class="{'bg-purple-600 text-white': form.typeMedia === 'text', 'bg-slate-700 text-slate-400': form.typeMedia !== 'text'}" class="flex-1 py-1 rounded text-xs transition-colors">Texte</button>
             <button type="button" @click="form.typeMedia = 'photo'" :class="{'bg-purple-600 text-white': form.typeMedia === 'photo', 'bg-slate-700 text-slate-400': form.typeMedia !== 'photo'}" class="flex-1 py-1 rounded text-xs transition-colors">Photo</button>
             <button type="button" @click="form.typeMedia = 'audio'" :class="{'bg-purple-600 text-white': form.typeMedia === 'audio', 'bg-slate-700 text-slate-400': form.typeMedia !== 'audio'}" class="flex-1 py-1 rounded text-xs transition-colors">Audio</button>
           </div>
        </div>

        <div v-if="form.typeMedia !== 'text'">
           <label class="block text-xs text-slate-400 mb-1">Fichier</label>
           <input type="file" @change="handleFileChange" class="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-slate-700 file:text-purple-400 hover:file:bg-slate-600" />
        </div>

        <!-- Manual Address Option -->
        <div v-if="!locationReady">
           <label class="block text-xs text-slate-400 mb-1">Ou entrez une adresse</label>
           <div class="flex gap-2">
             <input v-model="addressQuery" type="text" placeholder="Ex: Tour Eiffel, Paris" class="flex-1 bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm outline-none" @keydown.enter.prevent="searchAddress" />
             <button type="button" @click="searchAddress" :disabled="isGeocoding" class="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-xs">
               {{ isGeocoding ? '...' : '🔍' }}
             </button>
           </div>
        </div>

        <div v-if="permissionDenied" class="p-2 bg-red-900/30 border border-red-500/30 rounded text-xs text-red-200">
           ⚠️ <strong>GPS Bloqué</strong> : Cliquez sur l'icône 🔒 ou 📍 dans la barre d'adresse (en haut du navigateur) pour autoriser la localisation, puis réessayez.
        </div>        

        <div class="pt-2 flex justify-between items-center text-xs text-slate-500">
           <span class="max-w-[120px] truncate" :title="locationStatus">{{ locationStatus }}</span>
           
           <div class="flex gap-2">
             <button type="button" v-if="!locationReady" @click="useDefaultLocation" class="text-purple-400 hover:text-purple-300 underline">
               Par défaut
             </button>
             <button type="submit" :disabled="isSubmitting || !locationReady" class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
               {{ isSubmitting ? 'Envoi...' : 'Déposer' }}
             </button>
           </div>
        </div>
      </form>
    </div>

    <!-- FAB -->
    <button @click="toggleForm" class="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
      <span v-if="!isOpen" class="text-2xl">+</span>
      <span v-else class="text-xl">×</span>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['created']);
const isOpen = ref(false);
const isSubmitting = ref(false);
const locationReady = ref(false);
const locationStatus = ref('Géolocalisation...');
const file = ref(null);

const form = reactive({
  title: '',
  description: '',
  typeMedia: 'text',
  latitude: 0,
  longitude: 0
});

const toggleForm = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    getLocation();
  }
};

const getLocation = () => {
  locationStatus.value = 'Recherche GPS...';
  
  if (!navigator.geolocation) {
    locationStatus.value = 'GPS non supporté';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      form.latitude = pos.coords.latitude;
      form.longitude = pos.coords.longitude;
      locationReady.value = true;
      locationStatus.value = 'Position trouvée';
    },
    (err) => {
      console.error(err);
      switch(err.code) {
        case err.PERMISSION_DENIED:
          locationStatus.value = 'Accès refusé.';
          permissionDenied.value = true;
          break;
        case err.POSITION_UNAVAILABLE:
          locationStatus.value = 'Position indisponible.';
          break;
        case err.TIMEOUT:
          locationStatus.value = 'Délai dépassé.';
          break;
        default:
          locationStatus.value = 'Erreur inconnue.';
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
};

const addressQuery = ref('');
const isGeocoding = ref(false);
const permissionDenied = ref(false);

const useDefaultLocation = () => {
  // Mock Paris default
  form.latitude = 48.8566;
  form.longitude = 2.3522;
  locationReady.value = true;
  locationStatus.value = 'Position par défaut (Paris)';
  permissionDenied.value = false;
};

const searchAddress = async () => {
  if (!addressQuery.value) return;
  
  isGeocoding.value = true;
  locationStatus.value = 'Recherche adresse...';
  permissionDenied.value = false;
  
  try {
    const data = await $fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressQuery.value)}`);
    if (data && data.length > 0) {
      form.latitude = parseFloat(data[0].lat);
      form.longitude = parseFloat(data[0].lon);
      locationReady.value = true;
      locationStatus.value = `📍 ${data[0].display_name.split(',')[0]}`;
    } else {
      locationStatus.value = 'Adresse introuvable';
    }
  } catch (e) {
    locationStatus.value = 'Erreur de recherche';
  } finally {
    isGeocoding.value = false;
  }
};

const handleFileChange = (e) => {
  file.value = e.target.files[0];
};

const submitMemory = async () => {
  isSubmitting.value = true;
  
  const formData = new FormData();
  formData.append('title', form.title);
  formData.append('description', form.description);
  formData.append('type_media', form.typeMedia);
  formData.append('latitude', form.latitude.toString());
  formData.append('longitude', form.longitude.toString());
  
  if (file.value) {
    formData.append('file', file.value);
  }

  try {
    await $fetch('/api/souvenirs', {
      method: 'POST',
      body: formData
    });
    
    // Reset
    form.title = '';
    form.description = '';
    file.value = null;
    isOpen.value = false;
    emit('created');
  } catch (e) {
    alert("Erreur lors de l'envoi du souvenir");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
