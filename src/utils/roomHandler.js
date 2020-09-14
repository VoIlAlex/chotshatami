export const filterOptions = ( options, option, search ) => {
    if(options[option]===undefined) return []
    return options[option].filter(option => option.toLowerCase().includes(search.toLowerCase()))
}