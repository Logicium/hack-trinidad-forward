<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'



const mapContainer = ref<HTMLElement>()

// Get API key from environment variable
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDN_20CLj-TUTeQHE0yTvWPNMVtxiXktfY'

const mapStyles: google.maps.MapTypeStyle[] = [
  // Base geometry - dark background
  {
    elementType: "geometry",
    stylers: [{ color: "#0a0f0a" }]
  },
  // Labels text fill - cream color
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#f5f5dc" }]
  },
  // Labels text stroke - dark for contrast
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#0a0f0a" }]
  },
  // Hide icons for cleaner look
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  // Administrative borders
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#4ade80" }, { weight: 0.5 }]
  },
  // Landscape - slightly lighter dark
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#1a1f1a" }]
  },
  // Points of interest - sage green
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#2d3d2d" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#86efac" }]
  },
  // Parks - green tones
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#4a6741" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8fbc8f" }]
  },
  // Roads - cream/light color
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2d3d2d" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1a1f1a" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d1d5db" }]
  },
  // Arterial roads
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#4a6741" }]
  },
  // Highways - sage green
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#6b8e23" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#4a6741" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f5f5dc" }]
  },
  // Local roads
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a3a3a3" }]
  },
  // Transit
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2d3d2d" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#86efac" }]
  },
  // Water - darker with green tint
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0d140d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4ade80" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#0a0f0a" }]
  }
]

// Function to load Google Maps API script
const loadGoogleMapsAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.google && window.google.maps) {
      resolve()
      return
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // Wait for it to load
      const checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkInterval)
          resolve()
        }
      }, 100)
      return
    }

    // Create and load the script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.defer = true

    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Google Maps API'))

    document.head.appendChild(script)
  })
}

const initMap = async () => {
  if (!mapContainer.value) return

  // Use Geocoding API to get accurate coordinates from address
  const geocoder = new google.maps.Geocoder()
  const address = '612 Park Street, Trinidad, CO 81082'

  try {
    const result = await geocoder.geocode({ address: address })

    if (result.results && result.results[0]) {
      const location = result.results[0].geometry.location

      // Create the map centered on the geocoded address
      const map = new google.maps.Map(mapContainer.value, {
        center: location,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: mapStyles
      })

      // Add a marker at the geocoded location
      new google.maps.Marker({
        position: location,
        map: map,
        title: "Emergent Campus Trinidad - 612 Park Street",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4ade80",
          fillOpacity: 1,
          strokeColor: "#f5f5dc",
          strokeWeight: 2
        }
      })
    } else {
      console.error('Geocoding failed: No results found')
    }
  } catch (error) {
    console.error('Geocoding error:', error)
  }
}

onMounted(async () => {
  try {
    await loadGoogleMapsAPI()
    initMap()
  } catch (error) {
    console.error('Error loading Google Maps:', error)
  }
})

// Declare global types
declare global {
  interface Window {
    google: any
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 450px;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border: 2px solid rgba(74, 222, 128, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.map-container:hover {
  border-color: rgba(74, 222, 128, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .map-container {
    height: 350px;
  }
}
</style>