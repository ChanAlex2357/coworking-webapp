<script>
import axios from 'axios'

export default {
  data() {
    return {
      creneaux: [],
      durees: [1, 2, 3, 4],
      userId: 'USR_12',
      duree: null,
      heureDebut: null,
    }
  },
  props: {
    espace: {
      type: String,
      required: true,
    },
    dateReservation: {
      type: Date,
      required: true,
    },
  },
  created() {
    this.getCreneaux()
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
    async reservationHandler() {
      axios.post('http://localhost:9000/api/reservations', {
        userId: this.userId,
        espaceName: this.espace,
        dateReservation: this.dateReservation,
        duree: this.duree,
        heureDebut: this.heureDebut,
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
      <div class="py-4">
        <button type="submit" class="btn btn-dark w-100">Réserver</button>
      </div>
    </form>
  </div>
</template>
