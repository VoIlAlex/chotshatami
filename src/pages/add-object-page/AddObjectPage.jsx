import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import {
    specificationsSuburbanState, specificationResidentialState, rentSpecificationState, mainCategoryState,
    specficationsCommercialState, locationState, sellerState, rentSuburbanState, rentCommercialState, ceoCategoryState,
    statusCategoryState
} from '../../utils/states'
import {options} from "../../utils/optionsArray";
import {reverseAccordance} from "../../utils/accodanceCategory";
import {objectAddStartAsync, startFetchOptionsAsync, objectUpdateStartAsync} from "../../redux/objects/objectsActions";
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
import {ReactComponent as Loader} from "../../asserts/loader.svg";
import './add-object-page.css'
import GlobalHook from "../../components/global-loader/GlobalHook";

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
    useEffect(() => {
        options.map(el => props.startFetchOptionsAsync(props.token, el))
    }, [])
    const {width, margin} = props
    let main, add, id;
    if (props.updateObjectState) {
        main = reverseAccordance(props.updateObjectState.parent).split(', ')[0]
        add = reverseAccordance(props.updateObjectState.parent).split(', ')[1]
        id = props.updateObjectState.id
    }
    const [mainCategory, setMainCategory] = useState(accodance[props.location.mainCategory] || accodance[main] || '')
    const [additionalCategory, setAdditionalCategory] = useState(accodance[props.location.additionalCategory] || accodance[add] || '')
    const [settlementType, setSettlementType] = useState(props.updateObjectState === null ? '' : props.updateObjectState.town_type)
    const cityTypeHandler = name => {
        const newState = {}
        Object.keys(settlementType).map(el => el === name ? newState[el] = true : newState[el] = false)
        setSettlementType(newState)
    }

    const [stateMainCategory, setStateMainCategory] = useState(() => {
        if (props.updateObjectState === null) {
            return mainCategoryState
        }
        Object.keys(mainCategoryState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? mainCategoryState[key] = props.updateObjectState[key] : '')
        return mainCategoryState
    })

    const [stateCeoCategory, setStateCeoCategory] = useState(() => {
        if (props.updateObjectState === null) {
            return ceoCategoryState
        }
        Object.keys(ceoCategoryState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? ceoCategoryState[key] = props.updateObjectState[key] : '')
        return ceoCategoryState
    })

    const [stateStatusCategory, setStateStatusCategory] = useState(() => {
        if (props.updateObjectState === null) {
            return statusCategoryState
        }
        Object.keys(statusCategoryState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? statusCategoryState[key] = props.updateObjectState[key] : '')
        return statusCategoryState
    })

    const [stateSellerCategory, setStateSellerCategory] = useState(() => {
        if (props.updateObjectState === null) {
            return sellerState
        }
        Object.keys(sellerState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? sellerState[key] = props.updateObjectState[key] : '')
        return sellerState
    })
    //location state
    const [stateLocationCategory, setStateLocationCategory] = useState(() => {
        if (props.updateObjectState === null) {
            return locationState
        }
        Object.keys(locationState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? locationState[key] = props.updateObjectState[key] : '')
        return locationState
    })
    // Продажа Жилая
    const [stateSpecificationsResidential, setStateSpecificationsResidential] = useState(() => {
        if (props.updateObjectState === null) {
            return specificationResidentialState
        }
        Object.keys(specificationResidentialState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? specificationResidentialState[key] = props.updateObjectState[key] : '')
        return specificationResidentialState
    })
    //Продажа загородная
    const [stateSpecificationsSuburban, setStateSpecificationsSuburban] = useState(() => {
        if (props.updateObjectState === null) {
            return specificationsSuburbanState
        }
        Object.keys(specificationsSuburbanState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? specificationsSuburbanState[key] = props.updateObjectState[key] : '')
        return specificationsSuburbanState
    })
    //Продажа коммерческая
    const [stateSpecificationsCommercial, setStateSpecificationsCommercial] = useState(() => {
        if (props.updateObjectState === null) {
            return specficationsCommercialState
        }
        Object.keys(specficationsCommercialState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? specficationsCommercialState[key] = props.updateObjectState[key] : '')
        return specficationsCommercialState
    })
    //Аренда жилая
    const [stateSpecificationsRent, setStateSpecificationsRent] = useState(() => {
        if (props.updateObjectState === null) {
            return rentSpecificationState
        }
        Object.keys(rentSpecificationState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? rentSpecificationState[key] = props.updateObjectState[key] : '')
        return rentSpecificationState
    })
    //Аренда загородная
    const [stateSuburbanRent, setStateSuburbanRent] = useState(() => {
        if (props.updateObjectState === null) {
            return rentSuburbanState
        }
        Object.keys(rentSuburbanState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? rentSuburbanState[key] = props.updateObjectState[key] : '')
        return rentSuburbanState
    })
    //Аренда коммерческая
    const [stateCommercialRent, setStateCommercialRent] = useState(() => {
        if (props.updateObjectState === null) {
            return rentCommercialState
        }
        Object.keys(rentCommercialState)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? rentCommercialState[key] = props.updateObjectState[key] : '')
        return rentCommercialState
    })

    const sendObject = parent => {
        props.objectAddStartAsync({
            ...stateMainCategory, ...stateCeoCategory, ...stateStatusCategory, parent: parent,
            ...stateSellerCategory, ...stateLocationCategory, ...stateSpecificationsResidential
        }, props.token)
    }

    if (props.optionsLoading) {
        return <div className="add-object-page__center">
            <Loader/>
        </div>
    }

    return (
        <>
            {props.addObjectLoading && <div className="add-object-page__center"><Loader/></div>}
            {props.updateObjectLoading && <GlobalHook />}
            <div className={'add-object-page'} style={{margin, width}}>
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
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />
                        <ProductImage
                            id={id? id: null}
                            token={props.token}
                            images={props.updateObjectState? props.updateObjectState.product_files:[]}
                        />
                        <CEOData
                            stateCeoCategory={stateCeoCategory}
                            setState={setStateCeoCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />
                    </div>
                    <div className="add-object-page__forms-right">
                        <Status
                            stateStatusCategory={stateStatusCategory}
                            setState={setStateStatusCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />
                        <Seller
                            stateSellerCategory={stateSellerCategory}
                            setState={setStateSellerCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />
                        <Location
                            stateLocationCategory={stateLocationCategory}
                            setState={setStateLocationCategory}
                            settlementType={settlementType}
                            cityTypeHandler={cityTypeHandler}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />

                        {/*Продажа*/}
                        {mainCategory === 'sale' && additionalCategory === 'residential' &&
                        <SpecificationsResidential
                            stateSpecificationsResidential={stateSpecificationsResidential}
                            setState={setStateSpecificationsResidential}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}
                        {mainCategory === 'sale' && additionalCategory === 'suburban' &&
                        <SuburbanSpecifications
                            state={stateSpecificationsSuburban}
                            setState={setStateSpecificationsSuburban}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}
                        {mainCategory === 'sale' && additionalCategory === 'commercial' &&
                        <CommercialSpecifications
                            state={stateSpecificationsCommercial}
                            setState={setStateSpecificationsCommercial}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}

                        {/*Аренда*/}
                        {mainCategory === 'rent' && additionalCategory === 'residential' &&
                        <RentSpecifications
                            state={stateSpecificationsRent}
                            setState={setStateSpecificationsRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}
                        {mainCategory === 'rent' && additionalCategory === 'suburban' &&
                        <RentSubUrban
                            state={stateSuburbanRent}
                            setState={setStateSuburbanRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}
                        {mainCategory === 'rent' && additionalCategory === 'commercial' &&
                        <RentCommercial
                            state={stateCommercialRent}
                            setState={setStateCommercialRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                        />}

                        {/*Строительство*/}
                        {mainCategory === 'building' && additionalCategory === 'newBuildings' &&
                        <SuburbanSpecifications
                            state={stateSpecificationsSuburban}
                            setState={setStateSpecificationsSuburban}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                            newBuilding
                        />}
                        {mainCategory === 'building' && additionalCategory === 'abroad' &&
                        <SpecificationsResidential
                            stateSpecificationsResidential={stateSpecificationsResidential}
                            setState={setStateSpecificationsResidential}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id? id: null}
                            abroad
                        />}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    options: state.object.options,
    token: state.user.loginSuccess,
    addObjectLoading: state.object.addObjectLoading,
    optionsLoading: state.object.optionsLoading,
    updateObjectLoading: state.object.updateObjectLoading,
    updateObjectState: state.object.fetchObjectSuccess
})

const mapDispatchToProps = dispatch => ({
    objectAddStartAsync: (object, token) => dispatch(objectAddStartAsync(object, token)),
    startFetchOptionsAsync: (token, option) => dispatch(startFetchOptionsAsync(token, option)),
    objectUpdateStartAsync: (object, token, category) => dispatch(objectUpdateStartAsync(object, token, category))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AddObjectPage)