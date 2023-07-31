<template>
  <div class="container">
    <h1>{{ store.navBar }}</h1>
  </div>
</template>

<script setup>
import { useStore } from "../stores/counter" 
const store = useStore()
</script>
