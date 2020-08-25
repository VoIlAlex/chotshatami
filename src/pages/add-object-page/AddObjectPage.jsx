import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

import HeadComponent from "../../components/head-component/HeadComponent";
import MainInf from "../../components/add-object-components/main-inf/MainInf";
import ProductImage from "../../components/add-object-components/ProductImage/ProductImage";
import CEOData from "../../components/add-object-components/CEOData/CEOData";
import Status from "../../components/add-object-components/status/Status";
import Seller from "../../components/add-object-components/seller/Seller";
import RentSubUrban from "../../components/rent/RentSuburban";
import RentSpecifications from "../../components/rent/RentSpecifications";
import Location from "../../components/add-object-components/location/Location";
import SpecificationsResidential from "../../components/add-object-components/specifications-residential/SpecificationsResidential";
import SuburbanSpecifications from "../../components/add-object-components/suburban-specifications/SuburbanSpecifications";
import CommercialSpecifications from "../../components/add-object-components/commercial-specifications/CommercialSpecifications";
import RentCommercial from "../../components/rent/RentCommercial";
import './add-object-page.css'

const accodance = {
    'Продажа':'sale',
    'Аренда':'rent',
    'Строительство':'building',
    'Жилая':'residential',
    'Недвижимость за рубежом':'abroad',
    'Новостройки':'newBuildings',
    'Загородная':'suburban',
    'Коммерческая':'commercial'
}

const AddObjectPage = props => {
    const {width, margin} = props
    const [mainCategory, setMainCategory] = useState(accodance[props.location.mainCategory] || '')
    const [additionalCategory, setAdditionalCategory] = useState(accodance[props.location.additionalCategory]|| '')
    const [settlementType, setSettlementType] = useState({
        g: false,
        ag: false,
        gp: false,
        d: false,
        pgt: false,
        rp: false,
        c: false,
        cnp: false
    })

    return (
        <div
            className={'add-object-page'}
            style={{margin, width}}
        >
            <HeadComponent
                h2={'Добавить объект'}
                h2Margin={'0 0 0 30px'}
                p={'К списку'}
                optionMargin={'0 0 0 0'}
                btnWidth={'50%'}
                btnHeight={'50px'}
                buttonValue={'Сохранить'}
            />
            <div className="add-object-page__forms">
                <div className="add-object-page__forms-left">
                    <MainInf
                        mainCategory={mainCategory}
                        additionalCategory={additionalCategory}
                        setMainCategory={setMainCategory}
                        setAdditionalCategory={setAdditionalCategory}
                    />
                    <ProductImage/>
                    <CEOData/>
                </div>
                <div className="add-object-page__forms-right">
                    <Status/>
                    <Seller />
                    <Location settlementType={settlementType} setSettlementType={setSettlementType}/>
                    {/*Продажа*/}
                    {mainCategory==='sale' && additionalCategory==='residential' && <SpecificationsResidential/>}
                    {mainCategory==='sale' && additionalCategory==='suburban' && <SuburbanSpecifications/>}
                    {mainCategory==='sale' && additionalCategory==='commercial' && <CommercialSpecifications />}
                    {/*Аренда*/}
                    {mainCategory==='rent' && additionalCategory==='residential' && <RentSpecifications />}
                    {mainCategory==='rent' && additionalCategory==='suburban' && <RentSubUrban />}
                    {mainCategory==='rent' && additionalCategory==='commercial' && <RentCommercial/>}
                    {mainCategory==='building' && additionalCategory==='newBuildings' && <SuburbanSpecifications />}
                    {mainCategory==='building' && additionalCategory==='abroad' && <SpecificationsResidential />}
                </div>
            </div>
        </div>
    )
}

export default withRouter(AddObjectPage)