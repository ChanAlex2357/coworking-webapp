<script>
import ReservationForm from '@/components/organics/ReservationForm.vue'
export default {
  name: 'ReservationPage',
  data() {
    return {}
  },
  components: {
    ReservationForm,
  },
}
</script>
<template>
  <div class="row">
    <div>

      <h1>Page de reservation</h1>
    </div>
    <div class="col-8 mx-auto">
      <ReservationForm
        v-bind:espace="this.$route.params.espace"
        v-bind:date-reservation="this.$route.params.date"
      />
    </div>
  </div>
</template>
