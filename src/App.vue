<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header w-full lg:w-1/2 leading-normal lg:flex lg:items-center">
    <img
        width="70"
        height="70"
        src="@/assets/logo.svg"
        alt="#unclexo's logo"
        class="logo block mx-auto mb-10 lg:m-0 lg:mr-10"
    />

    <div class="wrapper w-full lg:flex lg:flex-col lg:items-start">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main class="page-view w-full lg:w-1/2 flex items-center">
    <RouterView />
  </main>
</template>

<style scoped>
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      padding-right: calc(var(--section-gap) / 2);
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
