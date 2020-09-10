import React, {useState} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import {
    specificationsSuburbanState, specificationResidentialState, rentSpecificationState,
    specficationsCommercialState, locationState, sellerState, rentSuburbanState, rentCommercialState
} from '../../utils/states'
import {objectAddStartAsync} from "../../redux/objects/objectsActions";
import HeadComponent from "../../components/head-component/HeadComponent";
import MainInf from "../../components/add-object-components/main-inf/MainInf";
import ProductImage from "../../components/add-object-components/ProductImage/ProductImage";
import CEOData from "../../components/add-object-components/CEOData/CEOData";
import Status from "../../components/add-object-components/status/Status";
import Seller from "../../components/add-object-components/seller/Seller";
import RentSubUrban from "../../components/rent/RentSuburban";
import RentSpecifications from "../../components/rent/RentSpecifications";
import Location from "../../components/add-object-components/location/Location";
import SpecificationsResidential
    from "../../components/add-object-components/specifications-residential/SpecificationsResidential";
import SuburbanSpecifications
    from "../../components/add-object-components/suburban-specifications/SuburbanSpecifications";
import CommercialSpecifications
    from "../../components/add-object-components/commercial-specifications/CommercialSpecifications";
import RentCommercial from "../../components/rent/RentCommercial";
import './add-object-page.css'

const accodance = {
    'Продажа': 'sale',
    'Аренда': 'rent',
    'Строительство': 'building',
    'Жилая': 'residential',
    'Недвижимость за рубежом': 'abroad',
    'Новостройки': 'newBuildings',
    'Загородная': 'suburban',
    'Коммерческая': 'commercial'
}

const AddObjectPage = props => {
    const {width, margin} = props
    const [mainCategory, setMainCategory] = useState(accodance[props.location.mainCategory] || '')
    const [additionalCategory, setAdditionalCategory] = useState(accodance[props.location.additionalCategory] || '')
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

    const cityTypeHandler = name => {
        const newState = {}
        Object.keys(settlementType).map(el => el === name ? newState[el] = true : newState[el] = false)
        setSettlementType(newState)
    }

    const [stateMainCategory, setStateMainCategory] = useState({
        content: '',
        dateCreated: '',
        dateChange: ''
    })

    const [stateCeoCategory, setStateCeoCategory] = useState({
        pagetitle: '',
        description: '',
        key_words: ''
    })

    const [stateStatusCategory, setStateStatusCategory] = useState({
        published: 'published'
    })

    const [stateSellerCategory, setStateSellerCategory] = useState(sellerState)
    //location state
    const [stateLocationCategory, setStateLocationCategory] = useState(locationState)
    // Продажа Жилая
    const [stateSpecificationsResidential, setStateSpecificationsResidential] = useState(specificationResidentialState)
    //Продажа загородная
    const [stateSpecificationsSuburban, setStateSpecificationsSuburban] = useState(specificationsSuburbanState)
    //Продажа коммерческая
    const [stateSpecificationsCommercial, setStateSpecificationsCommercial] = useState(specficationsCommercialState)
    //Аренда жилая
    const [stateSpecificationsRent, setStateSpecificationsRent] = useState(rentSpecificationState)
    //Аренда загородная
    const [stateSuburbanRent, setStateSuburbanRent] = useState(rentSuburbanState)
    //Аренда коммерческая
    const [stateCommercialRent, setStateCommercialRent] = useState(rentCommercialState)

    const sendObject = () => {
        props.objectAddStartAsync({
            ...stateMainCategory, ...stateCeoCategory, ...stateStatusCategory,
            ...stateSellerCategory, ...stateLocationCategory, ...stateSpecificationsResidential
        })
    }
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
                        stateMainCategory={stateMainCategory}
                        setState={setStateMainCategory}
                        mainCategory={mainCategory}
                        additionalCategory={additionalCategory}
                        setMainCategory={setMainCategory}
                        setAdditionalCategory={setAdditionalCategory}
                    />
                    <ProductImage/>
                    <CEOData
                        stateCeoCategory={stateCeoCategory}
                        setState={setStateCeoCategory}
                    />
                </div>
                <div className="add-object-page__forms-right">
                    <Status
                        stateStatusCategory={stateStatusCategory}
                        setState={setStateStatusCategory}
                    />
                    <Seller
                        stateSellerCategory={stateSellerCategory}
                        setState={setStateSellerCategory}
                    />
                    <Location
                        stateLocationCategory={stateLocationCategory}
                        setState={setStateLocationCategory}
                        settlementType={settlementType}
                        cityTypeHandler={cityTypeHandler}/>

                    {/*Продажа*/}
                    {mainCategory === 'sale' && additionalCategory === 'residential' &&
                    <SpecificationsResidential
                        stateSpecificationsResidential={stateSpecificationsResidential}
                        setState={setStateSpecificationsResidential}
                        sendObject={state => sendObject(state)}
                    />}
                    {mainCategory === 'sale' && additionalCategory === 'suburban' &&
                    <SuburbanSpecifications
                        state={stateSpecificationsSuburban}
                        setState={setStateSpecificationsSuburban}
                        sendObject={state => sendObject(state)}
                    />}
                    {mainCategory === 'sale' && additionalCategory === 'commercial' &&
                    <CommercialSpecifications
                        state={stateSpecificationsCommercial}
                        setState={setStateSpecificationsCommercial}
                        sendObject={state => sendObject(state)}
                    />}

                    {/*Аренда*/}
                    {mainCategory === 'rent' && additionalCategory === 'residential' &&
                    <RentSpecifications
                        state={stateSpecificationsRent}
                        setState={setStateSpecificationsRent}
                        sendObject={state => sendObject(state)}
                    />}
                    {mainCategory === 'rent' && additionalCategory === 'suburban' &&
                    <RentSubUrban
                        state={stateSuburbanRent}
                        setState={setStateSuburbanRent}
                        sendObject={state => sendObject(state)}
                    />}
                    {mainCategory === 'rent' && additionalCategory === 'commercial' &&
                    <RentCommercial
                        state={stateCommercialRent}
                        setState={setStateCommercialRent}
                        sendObject={state => sendObject(state)}
                    />}

                    {/*Строительство*/}
                    {mainCategory === 'building' && additionalCategory === 'newBuildings' &&
                    <SuburbanSpecifications
                        state={stateSpecificationsSuburban}
                        setState={setStateSpecificationsSuburban}
                        sendObject={state => sendObject(state)}
                    />}
                    {mainCategory === 'building' && additionalCategory === 'abroad' &&
                    <SpecificationsResidential
                        stateSpecificationsResidential={stateSpecificationsResidential}
                        setState={setStateSpecificationsResidential}
                        sendObject={state => sendObject(state)}
                    />}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    objectAddStartAsync: object => dispatch(objectAddStartAsync(object))
})

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(AddObjectPage)