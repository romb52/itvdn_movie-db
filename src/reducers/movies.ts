import { Action, Reducer } from "redux";

export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
    image?: string;
}

export interface MovieState {
    top: Movie[]
}

const initialState: MovieState =
{
    top: [
        { id: 1, title: "Inception", popularity: 98, overview: " Dream..." },
        { id: 2, title: "The Godfather", popularity: 97, overview: " Mafia..." },
        { id: 3, title: "The dark Knight", popularity: 96.5, overview: " Batman..." },
        { id: 4, title: "The Godfather Part II", popularity: 96, overview: " Part 2..." },
    ]
}


export const moviesLoaded = (movies: Movie[]) => ({
    type: "movies/loaded",
    payload: movies
});

interface ActionWithPayload<T> extends Action{
    payload: T
}

const moviesReducer: Reducer<MovieState, ActionWithPayload<Movie[]>> = (state, action) => {
    const currentState = state ?? initialState;
    switch (action.type) {
        case "movies/loaded":
            return {
                ...currentState,
                top: action.payload
            };

        default:
            return currentState;
    }
}

export default moviesReducer;