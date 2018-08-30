/*
 * @Author: <pcjser> 
 * @Date: 2018-04-18 11:12:39 
 * @Last Modified by: pcjser
 * @Last Modified time: 2018-04-18 14:35:35
 */

//装饰器改造路由

const {
  controller,
  get,
  post,
  put
} = require('../lib/decorator')
const {
  getAllMovies,
  getSingleDetail,
  getRelativeMovies
} = require('../service/movie')

@controller('/api/v0/movies')
export class movieController {
  @get('/')
  async getMovies(ctx, next) {
    const {
      type,
      year
    } = ctx.query
    const movies = await getAllMovies(type, year)
    ctx.body = movies
  }

  @get('/:id')
  async getMovieDetail(ctx, next) {
    const id = ctx.params.id
    const movie = await getSingleDetail(id)
    const relativeMovies = await getRelativeMovies(movie)

    ctx.body = {
      data: {
        movie,
        relativeMovies
      },
      success: true
    }
  }
}
