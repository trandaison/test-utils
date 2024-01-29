<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <nav>
    <h1>{{ t('brand') }}</h1>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>
