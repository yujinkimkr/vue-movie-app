<template>
    <RouterLink 
      to="/"
      class="logo">
        <span>
          OMDbAPI
        </span>
        .com
    </RouterLink>
</template>
<script>
</script>
<style lang="scss" scoped>
.logo {
  font-family: "Oswald", sans-seif;
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