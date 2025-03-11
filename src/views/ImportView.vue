<script>
import ImportButton from '@/components/organics/ImportButton.vue'
export default {
  data() {
    return {
      fichier: null,
      loading: false,
      error: null,
    }
  },
  components: {
    ImportButton,
  },
}
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="mb-3 col-md-6">
        <ImportButton
          title="🏢 Import des Espaces"
          apiEndpoint="http://localhost:9000/api/import/espace"
        />
      </div>
      <div class="mb-3 col-md-6">
        <ImportButton
          title="🔧 Import des Options"
          apiEndpoint="http://localhost:9000/api/import/option"
        />
      </div>
      <div class="mb-3 col-md-6">
        <ImportButton
          title="🗓️ Import des Reservation"
          apiEndpoint="http://localhost:9000/api/import/reservation"
        />
      </div>
      <div class="mb-3 col-md-6">
        <ImportButton
          title="💳 Import des Paiements"
          apiEndpoint="http://localhost:9000/api/import/paiement"
        />
      </div>
    </div>
  </div>
</template>
