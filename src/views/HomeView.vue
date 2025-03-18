<script>
export default {
  name: 'HomeView',
  data() {
    return {
      u: this.$jsonfromsession('u'),
      message: 'Bienvenue sur notre application !',
    }
  },
}
</script>

<template>
  <div class="home-container">
    <h1>{{ message }}</h1>
    <p>Vous êtes maintenant connecté à votre espace personnel.</p>
    <p>USER : {{ u.id }}</p>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

p {
  color: #666;
  font-size: 1.2rem;
}
</style>
