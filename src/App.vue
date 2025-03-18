<script setup>
</script>

<template>
  <header class="p-3 bg-light text-white" v-if="$route.path !== '/' && $route.path !== '/admin'">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <!-- <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a> -->
        <ul class="nav col-12">
          <RouterLink to="/import" class="nav-link px-2 text-secondary">Import data</RouterLink>
          <RouterLink to="/espace" class="nav-link px-2 text-secondary">Espaces</RouterLink>
          <RouterLink to="/my-reservations" class="nav-link px-2 text-secondary">Mes reservations</RouterLink>
        </ul>
      </div>
    </div>
  </header>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped></style>
