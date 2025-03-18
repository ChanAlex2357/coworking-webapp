<script>
import axios from 'axios'

export default {
  data() {
    return {
      creneaux: [],
      durees: [1, 2, 3, 4],
      duree: null,
      heureDebut: null,
      options: [],
      u: this.$jsonfromsession('u'),
    }
  },
  props: {
    espace: {
      type: String,
      required: true,
    },
    dateReservation: {
      type: String,
      required: true,
    },
  },
  created() {
    this.getCreneaux()
    this.getOptions()
  },
  methods: {
    getCreneaux() {
      axios
        .get('http://localhost:9000/api/creneaux')
        .then((response) => {
          console.log(response.data)
          this.creneaux = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getOptions() {
      axios
        .get('http://localhost:9000/api/options')
        .then((response) => {
          console.log(response.data)
          this.options = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    async reservationHandler() {
      axios
        .post('http://localhost:9000/api/reservations', {
          userId: this.u.id,
          espaceName: this.espace,
          dateReservation: this.dateReservation,
          duree: this.duree,
          heureDebut: this.heureDebut,
          options: this.options,
        })
        .then((response) => {
          alert(response.data.message)
        })
        .catch((err) => {
          alert(err)
        })
    },
  },
}
</script>

<template>
  <div class="card container">
    <form @submit.prevent="reservationHandler" class="p-3">
      <div class="d-flex justify-content-center">
        <h3>Formulaire de reservation</h3>
      </div>
      <div class="my-3 col">
        <label for="espace" class="form-label">Espace</label>
        <input type="text" class="form-control" :value="espace" disabled readonly />
      </div>
      <div class="mb-3 col">
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          name="dateReservation"
          class="form-control"
          :value="dateReservation"
          disabled
          readonly
        />
      </div>
      <div class="mb-3 col">
        <label for="creneau" class="form-label">Creneau</label>
        <select name="heureDebut" id="creneau" v-model="heureDebut" class="form-select">
          <option value="">Select the time slot</option>
          <option v-for="(creneau, index) in creneaux" :key="index" :value="creneau.id">
            {{ creneau.heureDebut }}
          </option>
        </select>
      </div>
      <div class="mb-3 col">
        <label for="duree" class="form-label">Duree</label>
        <select class="form-select" v-model="duree" id="duree">
          <option v-for="(duration, index) in durees" :key="index" :value="duration">
            {{ duration }}
          </option>
        </select>
      </div>
      <div class="col mb-3">
        <div class="row">
          <h5>Choix des options</h5>
          <div class="col d-flex gap-2" v-for="(opt, index) in options" :key="index">
            <input
              type="checkbox"
              v-model="opt.selected"
              v-bind:id="opt.id"
              class="form-check-input"
            />
            <label class="form-check-label" v-bind:for="opt.id">{{ opt.option }}</label>
          </div>
        </div>
      </div>
      <div class="py-4">
        <button type="submit" class="btn btn-dark w-100">Réserver</button>
      </div>
    </form>
  </div>
</template>
