import React, {useState} from 'react'

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

const AddObjectPage = () => {

    const [mainCategory, setMainCategory] = useState({
        residential: false,
        rent: false,
        building: false
    })

    const [additionalCategory, setAdditionalCategory] = useState({
        residential: false,
        suburban: false,
        commercial: false
    })

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
        <div className={'add-object-page'}>
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
                    {mainCategory.residential && additionalCategory.residential && <SpecificationsResidential/>}
                    {mainCategory.residential && additionalCategory.suburban && <SuburbanSpecifications/>}
                    {mainCategory.residential && additionalCategory.commercial && <CommercialSpecifications />}
                    {/*Аренда*/}
                    {mainCategory.rent && additionalCategory.residential && <RentSpecifications />}
                    {mainCategory.rent && additionalCategory.suburban && <RentSubUrban />}
                    {mainCategory.rent && additionalCategory.commercial && <RentCommercial/>}
                    {/*Новостройки == SuburbanSpecifications*/}
                    {/*Зарубежная == SpecificationsResidential*/}
                </div>
            </div>
        </div>
    )
}

export default AddObjectPage