<template>
  <div class="container">
    <div 
      :class="{ 'no-result' : !movies.length }"
      class="inner">
      <Loader v-if="loading" />
      <div
        v-if="message" 
        class="message">
        {{ message }} 
      </div>
      <div 
        v-else
        class="movies">
        <MovieItem
          v-for="m in movies"
          :key="m"
          :movie="m" />
      </div>
    </div>
  </div>        
</template>
<script>
import MovieItem from './MovieItem';
import Loader from './Loader';
import { mapState } from 'vuex';
export default {
  components: {
    MovieItem: MovieItem,
    Loader
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },

    ...mapState(
      //모듈의 이름, 배열
      'movie', [
        'movies',
        'message',
        'loading',
      ] 
    )
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    width: 100%;
    min-height: 200px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }

  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>