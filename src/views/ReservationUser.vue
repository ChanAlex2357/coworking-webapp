<script>
import axios from 'axios'
export default {
  data() {
    return {
      cols: [
        'ID',
        'Espace',
        'Date de reservation',
        'heure debut',
        'heure fin',
        'duree',
        'montant',
        'Etat',
        'Action',
      ],
      u: this.$jsonfromsession('u'),
      reservations: [],
    }
  },
  created() {
    this.getReservations()
  },
  methods: {
    annuler(reservation) {
      axios
        .get('http://localhost:9000/api/reservations/annuler?id=' + reservation.id)
        .then((response) => {
          const msg = response.data.message
          alert(msg)
          this.getReservations()
        })
        .catch((error) => {
          alert(error)
        })
    },
    getReservations() {
      axios
        .get('http://localhost:9000/api/reservations?userId=' + this.u.id)
        .then((response) => {
          console.log(response)
          this.reservations = response.data.data
        })
        .catch((err) => {
          console.error(err)
        })
    },
    getEtatPayement(res) {
      if (res.etat <= 11) {
        return 'A payer'
      } else if (res.etat == 12) {
        return 'En attente'
      } else if (res.etat == 13) {
        return 'Payer'
      } else if (res.etat == 14) {
        return 'Annuler'
      }
    },
  },
}
</script>
<template>
  <div class="mt-3">
    <div class="mb-3">
      <h2 class="text-center">Mes reservations</h2>
    </div>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="bg-light" v-for="(col, index) in cols" :key="index">
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(res, index) in reservations" :key="index">
            <td>{{ res.id }}</td>
            <td>{{ res.espace.nom }}</td>
            <td>{{ res.dateReservation }}</td>
            <td>{{ res.heureDebut }}</td>
            <td>{{ res.heureFin }}</td>
            <td>{{ res.duree }}</td>
            <td>{{ res.montant }}</td>
            <td>{{ getEtatPayement(res) }}</td>
            <td class="px-3">
              <div class="row gap-2" v-if="res.etat <= 11">
                <a href="/paiement" class="btn btn-dark col">Payer</a>
                <a @click="annuler(res)" class="btn btn-dark col">Annuler</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
