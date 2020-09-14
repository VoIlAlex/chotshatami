export const filterOptions = ( options, option, search ) => {
    return options[option].filter(option => option.toLowerCase().includes(search.toLowerCase()))
}