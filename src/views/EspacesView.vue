<script>
import axios from 'axios'

export default {
  data() {
    return {
      date: Date.now(),
      espaceCreneauxs: [],
      loading: false,
      espaces: [],
      u: this.$jsonfromsession('u'),
    }
  },
  created() {
    this.filtrerEspaces()
  },
  components: {},
  methods: {
    getStyle(etat) {
      let style = ''
      if (etat != null) {
        style += 'cr-' + etat
      }
      return style
    },
    async filtrerEspaces() {
      this.loading = true
      try {
        const response = await fetch('http://localhost:9000/api/espaces/creneaux', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: this.date,
          }),
        })
        const data = await response.json()
        if (!response.ok) {
          console.log(data.exception)
          throw new Error("Erreur lors de la recherche d'espace")
        }
        this.espaceCreneauxs = data.espaceCreneauxs
        this.date = data.dateReservation
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    getEspaces() {
      axios
        .get('http://localhost:9000/api/espaces')
        .then((response) => {
          console.log(response.data)
          this.espaces = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getReservationRef(espace) {
      return '/reservation/' + espace.nom + '/' + this.date.toString()
    },
  },
}
</script>

<template>
  <div class="row">
    <div class="col-6 mx-auto my-3">
      <form @submit.prevent="filtrerEspaces">
        <div class="d-flex align-items-center mb3">
          <span class="h2"> Filtre de recherche {{}}</span>
        </div>
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <!-- < for="date" class="form-label">Date</ -->
            <input
              type="date"
              name="date"
              id="date"
              class="form-control"
              v-model="date"
              placeholder="Date"
              required
            />
          </div>
          <div class="col-6 d-flex align-items-center">
            <button type="submit" class="btn btn-dark" :disabled="loading">
              <span v-if="loading">...</span>
              <span v-else>Valider</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <hr />

    <div>
      <table class="table table-bordered">
        <thead class="bg-light">
          <tr>
            <th scope="col" class="bg-light">Espace</th>
            <th scope="col" class="bg-light text-center">8h</th>
            <th scope="col" class="bg-light text-center">9h</th>
            <th scope="col" class="bg-light text-center">10h</th>
            <th scope="col" class="bg-light text-center">11h</th>
            <th scope="col" class="bg-light text-center">12h</th>
            <th scope="col" class="bg-light text-center">13h</th>
            <th scope="col" class="bg-light text-center">14h</th>
            <th scope="col" class="bg-light text-center">15h</th>
            <th scope="col" class="bg-light text-center">16h</th>
            <th scope="col" class="bg-light text-center">17h</th>
            <th scope="col" class="bg-light text-center">18h</th>
            <th scope="col" class="bg-dark text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in espaceCreneauxs" :key="index">
            <th scope="row" class="bg-light">{{ item.espace.nom }}</th>
            <td
              class="bg-white"
              :class="getStyle(cr.etat)"
              v-for="(cr, i) in item.creneaux"
              :key="i"
            ></td>
            <td>
              <a :href="getReservationRef(item.espace)" role="button" class="btn btn-dark w-100"
                >Réserver</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.cr-10,
.cr-11,
.cr-12 {
  background-color: rgb(211, 99, 241) !important;
}
.cr-13 {
  background-color: rgb(208, 15, 1) !important;
}
</style>
