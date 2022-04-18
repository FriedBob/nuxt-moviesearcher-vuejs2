<template>
  <NuxtLink
    to="/"
    class="logo">
    <span>OMDb</span>Browser.COM
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>
