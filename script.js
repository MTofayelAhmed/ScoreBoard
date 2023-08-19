const add_MatchBtn = document.querySelector(".lws-addMatch");
const match_container = document.querySelector(".all-matches");
const resetBtn = document.querySelector(".lws-reset");
const initialState = [
  {
    id: 1,
    score: 0,
  }
];
// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_MATCH = "match";
const RESET = "reset";

// actionCreator function

const addMatch = () => {
  return {
    type: ADD_MATCH,
  };
};

// const increment = ({ id, value }) => {
//   return {
//     type: INCREMENT,
//     payload: { id, value },
//   };
// };
// next match id

const nextMatchId = (matches) => {
  const maxId = matches.reduce((maxId, match) => Math.max(match.id, maxId), -1);
  return maxId + 1;
};

// reducer function

const matchReducer = (state = initialState, action) => {
  if (action.type === ADD_MATCH) {
    const id = nextMatchId(state);
    return [...state, {id, score: 0}]
  }
};

const store = Redux.createStore(matchReducer);
const render = () => {
  const state = store.getState();
  const matchView = state.map((item) => {
      return ` <div class="match">
        <div class="wrapper">
            <button class="lws-delete">
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match ${item.id}</h3>
        </div>
        <div class="inc-dec">
            <form class="incrementForm" onsubmit = {handleIncrement(${item.id}, this)}>
                <h4>Increment</h4>
                <input
                    type="number"
                    name="increment"
                    class="lws-increment"
                />
            </form>
            <form class="decrementForm" onsubmit = {handleDecrement(${item.id}, this)}>
                <h4>Decrement</h4>
                <input
                    type="number"
                    name="decrement"
                    class="lws-decrement"
                />
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult">${item.score}</h2>
        </div>
    </div>
        
        `;
    })
    .join("");
  match_container.innerHTML = matchView;
};

// render initial view
render()

store.subscribe(render);
