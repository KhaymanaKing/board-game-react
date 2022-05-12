import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  const [gameForm, setGameForm] = useState ({
    title: '',
    genre: '',
    designer: '',
    description: '',
    min_players: 0,
    max_players: 0
  });
  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;

  async function handleSubmit(e) {
    e.preventDefault();
    await createGame(gameForm);
    console.log(gameForm);
    // create a game
    history.push('/board-games');
    // use history.push to send the user to the list page
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' onChange={e => setGameForm ({ 
            ...gameForm,
            title: e.target.value
          })} />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required onChange={e => setGameForm ({
            ...gameForm,
            genre: e.target.value
          })}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required name='designer' onChange={e => setGameForm ({ 
            ...gameForm,
            designer: e.target.value
          })} />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required name='min_players' onChange={e => setGameForm ({ 
            ...gameForm,
            min_players: e.target.value
          })}/>
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required name='max_players' onChange={e => setGameForm ({ 
            ...gameForm,
            max_players: e.target.value

          })}/>
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='description' onChange={e => setGameForm ({ 
            ...gameForm,
            description: e.target.value
          })} />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
