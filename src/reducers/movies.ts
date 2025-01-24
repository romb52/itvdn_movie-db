import { Action, Reducer } from "redux";

export interface Movie {
    id: number;
    title: string;
    popularity : number;
    overview: string;
}

export interface MovieState {
    top: Movie[]
}

const initialState: MovieState = 
{
    top:[
        {id:1, title: "Inception", popularity:98, overview:" Dream..."},
        {id:2, title: "The Godfather", popularity:97, overview:" Mafia..."},
        {id:3, title: "The dark Knight", popularity:96.5, overview:" Batman..."},
        {id:4, title: "The Godfather Part II", popularity:96, overview:" Part 2..."},
    ]
}

const moviesReducer:Reducer<MovieState, Action> = (state, action) => {
return initialState;
}

export default moviesReducer;