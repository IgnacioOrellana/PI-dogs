import axios from 'axios';

export const GET_BREEDS = "GET_BREEDS";
export const GET_BREED_BY_NAME = "GET_BREED_BY_NAME";
export const GET_BREED_BY_ID = "GET_BREED_BY_ID"
export const SEARCH_BREED = "SEARCH_BREED";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMPERS = "FILTER_BY_TEMPERS";
export const SORT_BY_ALPHABETICAL = "SORT";
export const SORT_BY_WEIGHT = "SORT_BY_WEIGHT";
export const GET_DETAIL = "GET_DETAIL"
export const POST_BREED = "POST_BREED";
export const RESET = "RESET";

//http://localhost:3001/dogs
const backend_url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001" 
export function getBreeds() {
  return async function (dispatch) {
    const result = await axios.get(`${backend_url}/dogs`)
                    .then((response) => response.data)
                    .catch((error) => console.log(error))
    dispatch({ type: GET_BREEDS, payload: result })
  }
};

//http://localhost:3001/dogs?name=
export function getBreedByName(breed) {
  return async function(dispatch) {
    const result = await axios.get(`${backend_url}/dogs?name=${breed}`)
                    .then((response) => response.data)
                    .catch((error) => console.log(error))
    dispatch({ type: GET_BREED_BY_NAME, payload: result })               
  }
};

//http://localhost:3001/dogs
export function getBreedById(id) {
  return async function(dispatch) {
    const result = await axios.get(`${backend_url}/dogs/${id}`)
                    .then(response => response.data)
                    .catch(error => console.log(error))
    dispatch({ type: GET_BREED_BY_ID, payload: result })
  }
};

export function searchBreed(searchType) {
  return function(dispatch) {
    dispatch({ type: SEARCH_BREED, payload: searchType })               
  }
}

export function getTemperaments() {
  return async function(dispatch) {
    const result = await axios.get(`${backend_url}/temperaments`)
                    .then(response => response.data)
                    .catch(error => console.log(error))
    dispatch({ type: GET_TEMPERAMENTS, payload: result })
  } 
}

export function filterByTempers(breedName) {
  return function(dispatch) {
    dispatch({ type: FILTER_BY_TEMPERS, payload: breedName })
  }
}

export function sortByAlphabetical(order) {
  return function(dispatch) {
    dispatch({ type: SORT_BY_ALPHABETICAL, payload: order })
  }
};

export function sortByWeight(order) {
  return function(dispatch) {
    dispatch({ type: SORT_BY_WEIGHT, payload: order })
  }
};

export function getDetail(id) {
  return async function(dispatch) {
    const result = await axios.get(`${backend_url}/dogs/${id}`)
                    .then(response => response.data)
                    .catch(error => console.log(error))
    dispatch({ type: GET_DETAIL, payload: result })
  }
};

export function postBreed(newBreed) {
  return async function(dispatch) {
    const result = await axios.post(`${backend_url}/dogs`, newBreed)
                    .then(response => response.data)
                    .catch(error => console.log(error))
    dispatch({ type: POST_BREED, payload: result})     
  }
};

export function resetBreed(reset) {
  return function (dispatch) {
    dispatch({ type: RESET, payload: reset})
  }
};
