import actionTypes from "./locationTypes";

export const startFetchCountries = () => {
    return async dispatch => {
        await fetch('http://geohelper.info/api/v1/countries?apiKey=1Ma8qNynWSW3zrLc0BQ8gHsPSBi1n3fj&locale%5Blang%5D=ru')
            .then(res => res.text()).then(text => dispatch({
                type: actionTypes.COUNTRIES_FETCH,
                payload:JSON.parse(text).result
            }))
    }
}

export const startFetchRegions = () => {
    return async dispatch => {
        let regions = []
        for (let i = 0; i < 2; i++) {
            await fetch(`http://geohelper.info/api/v1/regions?apiKey=1Ma8qNynWSW3zrLc0BQ8gHsPSBi1n3fj&locale%5Blang%5D=ru&pagination[page]=${i + 1}&pagination[limit]=100`)
                .then(res => res.text())
                .then(text => regions = [...regions, ...filterRegions(JSON.parse(text).result)])
                .then(_ => dispatch({
                    type: actionTypes.REGIONS_FETCH,
                    payload: regions
                }))
        }
    }
}


const filterRegions = array => {
    return array.filter(region =>{
        if(Object.keys(region).includes('codes')){
            if(Object.keys(region.codes).includes('iso')){
                return region
            }
        }
    } )
}