import { 
  GET_BREEDS, 
  GET_BREED_BY_NAME, 
  GET_BREED_BY_ID,
  SEARCH_BREED,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERS,
  SORT_BY_ALPHABETICAL,
  SORT_BY_WEIGHT,
  GET_DETAIL,
  POST_BREED,
  RESET,
} from "./actions";

const initialState = {
  breeds: [],
  breed: [],
  temperaments: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BREEDS: 
      return {
        ...state,
        breeds: action.payload,
        breed: action.payload,
        detail: []
      }
    case GET_BREED_BY_NAME:
      return {
        ...state,
        breed: action.payload === undefined ? [] : action.payload
      }
    case GET_BREED_BY_ID:
      return {
        ...state,
        breed: action.payload
      }
    case SEARCH_BREED:
      const foundBreeds = action.payload === "Creadas" ? state.breeds.filter(b => typeof b.id === "string")
      : action.payload === "Existentes" ? state.breeds.filter(b => typeof b.id === "number") 
      : state.breeds
      return {
        ...state,
        breed: foundBreeds
      }  
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload 
      }
    case FILTER_BY_TEMPERS:
      const breedApi = state.breeds.filter(b => b.temperamento).filter(b => b.temperamento.includes(action.payload))
      const allDogsDB = state.breeds.filter(b => b.temperamentos)

      const newArr = []
      for(let i = 0; i < allDogsDB.length; i++) {
        let aux = allDogsDB[i]
        for(let j = 0; j < aux.temperamentos.length; j++) {
          if(aux.temperamentos[j].name === action.payload) newArr.push(aux)
        }
      }
      return {
        ...state,
        breed: breedApi.concat(newArr)
      }
    case SORT_BY_ALPHABETICAL:
      const sortedBreeds = action.payload === "ASC" ?
                              [...state.breed].sort((a, b) => a.raza < b.raza ? -1 : a.raza > b.raza ? 1 : 0) 
                            : [...state.breed].sort((a, b) => a.raza > b.raza ? -1 : a.raza < b.raza ? 1 : 0)              
      return {
        ...state,
        breed: sortedBreeds
      }
    case SORT_BY_WEIGHT:
      const sortedWeight = action.payload === "Menor peso" ? 
        [...state.breed].sort((a, b) => parseInt(a.peso) < parseInt(b.peso) ? -1 : parseInt(a.peso) > parseInt(b.peso) ? 1 : 0)
      : [...state.breed].sort((a, b) => parseInt(a.peso) > parseInt(b.peso) ? -1 : parseInt(a.peso) < parseInt(b.peso) ? 1 : 0)                
      return {
        ...state,
        breed: sortedWeight
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload === undefined ? [] : action.payload
      }
    case POST_BREED:
      return {
        ...state,
        breeds: action.payload && state.breeds.concat(action.payload),
        breed: action.payload && state.breed.concat(action.payload)
      }
    case RESET:
      return {
        ...state,
        breed: state.breeds
      }       
    default:
      return state
  }
};

export default rootReducer;
