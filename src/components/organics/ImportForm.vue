<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    apiEndpoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fichier: null,
      loading: false,
      error: null,
    }
  },
  methods: {
    async handleImport() {
      this.loading = true
      this.error = null

      const formData = new FormData()
      formData.append('file', this.fichier)

      try {
        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          console.log(response)
          throw new Error("Erreur lors de l'import")
        }

        alert('Import réussi!')
        this.fichier = null
      } catch (err) {
        console.error("Erreur d'import:", err)
        this.error = "Une erreur s'est produite lors de l'import"
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center justify-content-center">
        <h3 class="text-center">{{ title }}</h3>
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent="handleImport" enctype="multipart/form-data">
        <div class="mb-3">
          <label for="fichier" class="form-label">Fichier CSV</label>
          <input
            type="file"
            class="form-control"
            id="fichier"
            accept=".csv"
            @change="(e) => (fichier = e.target.files[0])"
            required
          />
        </div>
        <div v-if="error" class="alert alert-danger">
          {{ error }}
        </div>

        <button type="submit" class="btn btn-dark w-100" :disabled="loading || !fichier">
          <span v-if="loading">Importation en cours...</span>
          <span v-else>Importer</span>
        </button>
      </form>
    </div>
  </div>
</template>
