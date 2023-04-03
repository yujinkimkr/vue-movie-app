import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

//movie.js에서만 사용하겠다는 뜻
const _defaultMessage = 'Search for the movie title!';

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {}
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
      state.message = _defaultMessage;
      state.loading = false;
    }

  },
  actions: {
    async searchMovies({ commit, state }, payload) {
      if (state.loading) return;

      commit('updateState', {
        message: '',
        loading: true,
        movies: []
      });

      try {
        state.message = '';
        const OMDB_API_KEY = '7035c60c';
        // https://www.omdbapi.com/?apikey=7035c60c&s=frozen&page=2

        const res = await _fetchMovie({ ...payload, page: 1 });

        const { Search, totalResults } = res.data;
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID'),
        });

        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);

        //추가 요청
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {
            if (page > payload.number / 10) break;
            _fetchMovie({ ...payload, page });
            const { Search } = res.data;

            commit('updateState', {
              // 덮어쓰면 안되기 때문에 
              movies: [
                ...state.movies,
                ..._uniqBy(Search, 'imdbID')
              ],
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message: message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },

    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return;
      commit('updateState', {
        theMovie: {},
        loading: true
      });

      try {
        const res = await _fetchMovie(payload);
        const rates = res.data.Ratings;

        commit('updateState', {
          theMovie: res.data
        });
      } catch (error) {
        commit('updateState', {
          theMovie: {}
        });
      } finally {
        commit('updateState', {
          loading: false
        });

      }
    }
  }
}

function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload;
  const OMDB_API_KEY = '7035c60c';
  const url = id
    // id 값이 있을 때
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;


  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        if (res.data.Error) {
          reject(res.data.Error);
          return;
        }
        resolve(res);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}