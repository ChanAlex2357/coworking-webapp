<script>
export default {
  data() {
    return {
      mail: '',
      password: '',
      loading: false,
      error: null,
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      this.error = null
      try {
        // Envoyer les informations d'authentification à l'API
        const response = await fetch('http://localhost:9000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: this.mail,
            password: this.password,
          }),
        })

        if (!response.ok) {
          throw new Error("Échec de l'authentification")
        }
        const data = await response.json()
        console.log('Authentification réussie:', data)
        this.$router.push('/home')
      } catch (err) {
        console.error('Erreur lors de la connexion:', err)
        this.error = 'Erreur de connexion. Veuillez réessayer.'
      } finally {
        this.loading = false
      }
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
                src="E:\ITU\S6\Eval\coworking-webapp\stanley-dai-73OZYNjVoNI-unsplash.jpg"
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
                  <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="login">Adresse mail</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      id="login"
                      v-model="mail"
                      required
                      placeholder="Votre adresse mail"
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
                  <RouterLink to="/">log in as client</RouterLink>
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
