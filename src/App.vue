<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/HeaderVue';
import Footer from '~/components/Footer';
export default {
  components: {
    Header,
    Footer
  },
}
</script>