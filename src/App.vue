<template>
  <div class="wrapper">
    <h1>VUEK kalkulator walutowy</h1>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <page-nav>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Zadanie</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Kursy' }">Kursy</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Kalkulator' }">Kalkulator</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Posts' }">Posts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'AddPost' }">Add Post</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Search' }">Search</router-link>
            </li>
          </ul>
        </page-nav>
      </div>
    </nav>
    <page-main>
      <router-view></router-view>
    </page-main>
    <page-footer></page-footer>
  </div>
</template>

<script setup>
</script>

<style>
</style>

