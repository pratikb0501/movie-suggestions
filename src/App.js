import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay'

const movieObject = {
  Action: [
    {
      name: "Swashank Redemption",
      rating: "9.2/10",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      name: "Extraction",
      rating: "8.0/10",
      description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord."
    },
    {
      name: "The Dark Knight",
      rating: "9.0/10",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
  ],
  Crime: [
    {
      name: "Silence of the rain",
      rating: "9.4/10",
      description: "When executive Ricardo is found dead, shot in the seat of his car with no suspects to be found, Inspector Espinosa and Officer Daia are put in charge of the case and soon begin to investigate the people closest to the victim. As everyone involved in the case mysteriously disappears, the situation takes on unexpected proportions."
    },
    {
      name: "The Godfather ",
      rating: "9.2/10",
      description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
    },
    {
      name: "American Psyco ",
      rating: "7.6/10",
      description: "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies."
    }
  ],
  Sport: [
    {
      name: "Bhaag Milkha Bhaag ",
      rating: "8.2/10",
      description: "The truth behind the ascension of Milkha Singh who was scarred because of the India-Pakistan partition."
    },
    {
      name: "Moneyball",
      rating: "7.6/10",
      description: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players."
    },
    {
      name: " Southpaw ",
      rating: "7.2",
      description: "After a fatal incident sends him on a rampant path of destruction, a champion boxer fights to get custody of his daughter and revive his professional career."
    }
  ],
  War: [
    {
      name: "Saving Private Ryan",
      rating: "8.6/10",
      description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
    },
    {
      name: "Downfall",
      rating: "8.3/10",
      description: "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII."
    },
    {
      name: "Hacksaw Ridge ",
      rating: "8.1/10",
      description: "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot."
    }
  ]
};

const movieGenre = Object.keys(movieObject);



function App() {
  let [movieList, setMovieList] = useState([])
  let [currentGenre, setCurrentGenre] = useState("Action")

  useEffect(() => {
    console.log("UseEffect")
    console.log("movieList", movieObject[currentGenre]);
    setMovieList(movieObject[currentGenre])
  }, [currentGenre])


  function changeGenre(genre) {
    if (currentGenre !== genre) {
      setCurrentGenre(genre)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬Movie Suggestions</h1>
      </header>
      <div className="container">
        <div className="btn--container">
          {
            movieGenre.map(genre => (
              <button className={currentGenre === genre ? "btn--genre btn--active" : 'btn--genre'} onClick={() => changeGenre(genre)} key={genre}>{genre}</button>
            ))
          }
        </div>
        <MovieDisplay movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
