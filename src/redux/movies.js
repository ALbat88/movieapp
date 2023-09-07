import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    results: [],
    hasMore: false,
    totalResult: 0,
    page: 0,
    totalPages: 0,
    isFetching: false

};

export const moviesSlice= createSlice({
    name: "moviesSlice",
    initialState,
    reducers:{
        getPopularMovies:(state)=>{
            return{
                ...state,
                isFetching: true
            };
        },
    fetchedPopularMovies:(state,action)=>{

        return{
            isFetching: false,
            ...state,
            results:[...state.results, ...action.payload.results],
            hasMore: action.payload.page< action.payload.total_pages,
            totalResult: action.payload.total_results,
            page: action.payload.page,
            totalPages:action.payload.totalPages

        };

    },
    resetState:(state)=>{
        return initialState;
    }
        
    }
});

export const{getPopularMovies, fetchedPopularMovies, resetState} = moviesSlice.actions;
export default moviesSlice.reducer;