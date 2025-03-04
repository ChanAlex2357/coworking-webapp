<script setup></script>

<template>
  <header class="p-3 bg-light text-white" v-if="$route.path !== '/' && $route.path !== '/admin'">
    <div class="container-fluid">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <RouterLink to="/home" class="nav-link px-2 text-secondary">Import data</RouterLink>
        </ul>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
