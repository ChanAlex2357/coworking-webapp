<script>
import axios from 'axios'

export default {
  data() {
    return {
      tel: '0381034567',
      password: 'client123',
      loading: false,
      error: null,
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.error = null
      axios
        .post('http://localhost:9000/api/auth', {
          login: this.tel,
          password: this.password,
        })
        .then((response) => {
          const data = response.data
          console.log('Authentification réussie:', data)
          this.$jsontosession('u', data.utilisateur)
          this.$router.push('/home')
        })
        .catch((err) => {
          console.error('Erreur lors de la connexion:', err)
          this.error = 'Erreur de connexion. Veuillez réessayer.'
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="E:\ITU\S6\Eval\coworking-webapp\shridhar-gupta-dZxQn4VEv2M-unsplash.jpg"
                alt="login form"
                class="img-fluid h-100"
                style="border-radius: 1rem 0 0 1rem"
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form @submit.prevent="handleLogin">
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>
                    <span class="h1 fw-bold mb-0">Coworking</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                    Sign into your account coworker!
                  </h5>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="email">Telephone</label>
                    <input
                      class="form-control form-control-lg"
                      type="tel"
                      id="email"
                      v-model="tel"
                      required
                      placeholder="Votre numero de telephone"
                    />
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <label for="password">Mot de passe</label>
                    <input
                      class="form-control form-control-lg"
                      type="password"
                      id="password"
                      v-model="password"
                      required
                      placeholder="Votre mot de passe"
                    />
                  </div>

                  <div class="pt-1 mb-4">
                    <div v-if="error" class="error-message">
                      {{ error }}
                    </div>
                    <button class="btn btn-dark btn-lg btn-block" type="submit" :disabled="loading">
                      {{ loading ? 'Connexion...' : 'Se connecter' }}
                    </button>
                  </div>
                  <RouterLink to="/admin">log in as admin</RouterLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
