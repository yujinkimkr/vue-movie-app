<template>
  <footer>
    <Logo />
    <RouterLink to="/">
      (c){{ year }} YJKIM
    </RouterLink>
  </footer>
</template>
<script>
import Logo from './Logo'
export default { 
  components: {
    Logo
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss">
footer {
  text-align: center;
  padding: 70px 0;
  opacity: .3;
  color: $primary;
  .logo {
    display: block;
  }
}
</style>