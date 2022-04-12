import { SelectItem } from 'components/select'
import React from 'react'
import { admissionApi } from 'services/api/pagesApi'

export function useGetList({ setNationalities, setCountries, setGenders }) {

   async function getNationality() {
      try {
         const res = await admissionApi.nationality(null)
         console.log(res, 'response')
         SelectItem(res, setNationalities)
      } catch (e) {
         console.log(e)
      }
   }
  async function getCountries() {
     try {
        const response = await admissionApi.countries(null)
        SelectItem(response, setCountries)
     } catch (e) {
        console.log(e)
     }
  }
  async function getGenders() {
     try {
        const response = await admissionApi.genders(null)
        SelectItem(response, setGenders)
     } catch (e) {
        console.log(e)
     }
  }
   return { getNationality, getCountries, getGenders }
}
