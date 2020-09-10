const accordanceCategory = (main, additional) => {
    if(main === 'Продажа'){
        if(additional === 'Жилая') return 6
        if(additional ==='Загородная') return 7
        if(additional ==='Коммерческая') return 8
    }
    if(main === 'Аренда'){
        if(additional === 'Жилая') return 10
        if(additional ==='Загородная') return 11
        if(additional ==='Коммерческая') return 12
    }
    if(main === 'Строительство'){
        if(additional === 'Недвижимость') return 14
        if(additional ==='Новостройки') return 15
    }
}

export default accordanceCategory