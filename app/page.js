import Image from 'next/image'

import Movie from './Movie';

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  console.log(res)

  return (
    <main>
      <div className='grid gap-16 grid-cols-fluid my-12'>
        {res.results.map(movie => (
          <Movie 
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
