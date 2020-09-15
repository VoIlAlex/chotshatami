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

export const reverseAccordance = number => {
    switch (number) {
        case 6: return 'Продажа, Жилая'
        case 7: return 'Продажа, Загородная'
        case 8: return 'Продажа, Коммерческая'
        case 10: return 'Аренда, Жилая'
        case 11: return 'Аренда, Загородная'
        case 12: return 'Аренда, Коммерческая'
        case 14: return 'Строительство, Недвижимость за рубежом'
        case 15: return 'Строительство, Новостройки'
        default: return 6
    }
}

export default accordanceCategory