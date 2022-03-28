import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async url => {
   const { data } = await axios.get(url, {
       headers: {
           'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
           'X-RapidAPI-Key': 'c52d0ff72amsh57dd8455e4b4ec4p1b7698jsndc3e11c2bfa8'
         }
   })

   return data;
}
