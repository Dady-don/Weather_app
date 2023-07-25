import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL,geoApioptions } from '../Api'

const Search = ({onSearchChange}) => { //receiving the function from the parent element. Passing the received value into the function.

    const [search,setSearch]= useState(null)

    const handleChange=(searchData)=>{ //searchData is the data that we enter into our async paginate component
        setSearch(searchData)
        onSearchChange(searchData); //passing the data that we received to onSearchChange function in App.js
        setSearch(null)
    }


    const loadOptions = async(inputValue) =>{ //value that we are typing in the search input.

        return await fetch(`${GEO_API_URL}?namePrefix=${inputValue}`,geoApioptions)
        .then(response => response.json())
        .then(response => {
            return{ //response of "loadOptions" should be an object with "options" prop, which contains array of options.
                options: response.data.map((city)=>{
                    return{
                    value:`${city.latitude} ${city.longitude}`, //we need the latitude and longitude data to get the current weather info from weather api.
                    label:`${city.name},${city.countryCode}` ,
            }})
            }
        })
        .catch(err=> console.log(err))            	
    }



  return (
    <div className='search_box'>
      <AsyncPaginate 
      className='search_bar'
        
        placeholder='Search the city'
        debounceTimeout={600} //time after which the button will be clickable to send api requests, for someone who is pressing again and again.
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions} //provides autocomplete functionality or shows suggestions for the similar name.

        />
        
        
    </div>
  )
}

export default Search
