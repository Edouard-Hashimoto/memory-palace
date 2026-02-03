<template>
  <div ref="mapContainer" class="h-full w-full z-0"></div>
  
  <Teleport to="body">
    <div v-if="selectedMemory" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click.self="selectedMemory = null">
      <div class="bg-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-700">
        <h3 class="text-xl font-bold mb-2 text-purple-300">{{ selectedMemory.title }}</h3>
        <p class="text-slate-300 mb-4">{{ selectedMemory.description }}</p>
        
        <div v-if="selectedMemory.urlMedia" class="mb-4 rounded-lg overflow-hidden border border-slate-600">
          <img v-if="selectedMemory.typeMedia === 'photo'" :src="selectedMemory.urlMedia" class="w-full h-48 object-cover" />
          <audio v-else-if="selectedMemory.typeMedia === 'audio'" controls :src="selectedMemory.urlMedia" class="w-full" />
        </div>
        
        <div class="text-xs text-slate-500 mt-2 flex justify-between">
          <span>{{ new Date(selectedMemory.timestamp).toLocaleDateString() }}</span>
          <span v-if="selectedMemory.username" class="text-purple-400">Par {{ selectedMemory.username }}</span>
        </div>
        
        <div class="flex gap-2 mt-4">
          <button @click="selectedMemory = null" class="flex-1 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">Fermer</button>
          <button 
            v-if="user && selectedMemory.userId === user.id"
            @click="deleteMemory(selectedMemory.id)" 
            class="flex-1 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const { user } = useAuth();
const memories = ref([]);
const mapInstance = ref(null);
const mapContainer = ref(null);
const selectedMemory = ref(null);
const refreshKey = useState('refreshKey');

// Fix Leaflet marker icons
// Not using these currently but good to have
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'; 

// Use a glowing dot for "Re-enchant the world"
// Use a glowing dot for "Re-enchant the world"
const glowIcon = L.divIcon({
  className: 'custom-grow-marker', 
  iconSize: [12, 12],
  iconAnchor: [6, 6], // Center of the 12x12 icon
  popupAnchor: [0, -6] 
});

const loadMemories = async () => {
  const { data } = await useFetch('/api/souvenirs');
  memories.value = data.value || [];
  updateMarkers();
};

const deleteMemory = async (id) => {
  if (!confirm('Voulez-vous vraiment supprimer ce souvenir ?')) return;
  
  try {
    await $fetch(`/api/souvenirs/${id}`, { method: 'DELETE' });
    selectedMemory.value = null; // Close popup
    loadMemories(); // Refresh map
  } catch (e) {
    alert('Erreur lors de la suppression');
    console.error(e);
  }
};

const markersLayer = L.layerGroup();

const updateMarkers = () => {
  if (!mapInstance.value) return;
  markersLayer.clearLayers();
  
  memories.value.forEach(mem => {
    L.marker([mem.latitude, mem.longitude], { icon: glowIcon })
      .bindTooltip(mem.title)
      .on('click', () => {
        selectedMemory.value = mem;
      })
      .addTo(markersLayer);
  });
  
  markersLayer.addTo(mapInstance.value);
};

onMounted(async () => {
  await nextTick();
  
  if (!mapContainer.value) {
    console.error('Map container not found');
    return;
  }

  // Init map centered on Paris or user location
  mapInstance.value = L.map(mapContainer.value).setView([48.8566, 2.3522], 13);

  // Dark immersive tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(mapInstance.value);

  // Try to locate
  mapInstance.value.locate({ setView: true, maxZoom: 16 });

  loadMemories();
});

watch(refreshKey, () => {
  loadMemories();
});
</script>

<style>
/* Leaflet dark mode overrides if needed */
.leaflet-container {
  background: #1a1a1a;
}
.custom-grow-marker {
  background: #a855f7 !important;
  border: 2px solid white !important;
  border-radius: 50%;
  box-shadow: 0 0 10px #a855f7;
  box-sizing: border-box;
}
</style>
