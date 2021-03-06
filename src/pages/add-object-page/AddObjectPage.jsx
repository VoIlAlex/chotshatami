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
import {
    objectAddStartAsync,
    startFetchOptionsAsync,
    objectUpdateStartAsync,
    successOptions
} from "../../redux/objects/objectsActions";
import HeadComponent from "../../components/head-component/HeadComponent";
import MainInf from "../../components/add-object-components/main-inf/MainInf";
import ProductImage from "../../components/add-object-components/ProductImage/ProductImage";
import CEOData from "../../components/add-object-components/CEOData/CEOData";
import Status from "../../components/add-object-components/status/Status";
import Seller from "../../components/add-object-components/seller/Seller";
import RentSubUrban from "../../components/rent/RentSuburban";
import RentSpecifications from "../../components/rent/RentSpecifications";
import Location from "../../components/add-object-components/location/Location";
import SuccessfulAdded from "../../components/successfull/SuccessfullAdded.componen";
import SpecificationsResidential
    from "../../components/add-object-components/specifications-residential/SpecificationsResidential";
import SuburbanSpecifications
    from "../../components/add-object-components/suburban-specifications/SuburbanSpecifications";
import CommercialSpecifications
    from "../../components/add-object-components/commercial-specifications/CommercialSpecifications";
import RentCommercial from "../../components/rent/RentCommercial";
import {ReactComponent as Loader} from "../../asserts/loader.svg";
import GlobalHook from "../../components/global-loader/GlobalHook";
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
    let disabled = !props.location.state
    useEffect(() => {
        options.map(el => props.startFetchOptionsAsync(props.token, el))
    }, [props.updateObjectState])

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
    const [error, setError] = useState(false)
    const [selectedFile, setSelectedFile] = useState([])
    const [imgToDisplay, setImgToDisplay] = useState([])

    const cityTypeHandler = name => {
        const newState = {}
        Object.keys(settlementType).map(el => el === name ? newState[el] = true : newState[el] = false)
        setSettlementType(newState)
    }

    const [stateMainCategory, setStateMainCategory] = useState(() => {
        let clone = {...mainCategoryState}
        if (props.updateObjectState === null) {
            return {...mainCategoryState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })

    const [stateCeoCategory, setStateCeoCategory] = useState(() => {
        let clone = {...ceoCategoryState}
        if (props.updateObjectState === null) {
            return {...ceoCategoryState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })

    const [stateStatusCategory, setStateStatusCategory] = useState(() => {
        let clone = {...statusCategoryState}
        if (props.updateObjectState === null) {
            return {...statusCategoryState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })

    const [stateSellerCategory, setStateSellerCategory] = useState(() => {
        let clone = {...sellerState}
        if (props.updateObjectState === null) {
            return {...sellerState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //location state
    const [stateLocationCategory, setStateLocationCategory] = useState(() => {
        let clone = {...locationState}
        if (props.updateObjectState === null) {
            return {...locationState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    // Продажа Жилая
    const [stateSpecificationsResidential, setStateSpecificationsResidential] = useState(() => {
        let clone = {...specificationResidentialState}
        if (props.updateObjectState === null) {
            return {...specificationResidentialState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //Продажа загородная
    const [stateSpecificationsSuburban, setStateSpecificationsSuburban] = useState(() => {
        let clone = {...specificationsSuburbanState}
        if (props.updateObjectState === null) {
            return {...specificationsSuburbanState}
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //Продажа коммерческая
    const [stateSpecificationsCommercial, setStateSpecificationsCommercial] = useState(() => {
        let clone = {...specficationsCommercialState}
        if (props.updateObjectState === null) {
            return specficationsCommercialState
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //Аренда жилая
    const [stateSpecificationsRent, setStateSpecificationsRent] = useState(() => {
        let clone = {...rentSpecificationState}
        if (props.updateObjectState === null) {
            return rentSpecificationState
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //Аренда загородная
    const [stateSuburbanRent, setStateSuburbanRent] = useState(() => {
        let clone = {...rentSuburbanState}
        if (props.updateObjectState === null) {
            return rentSuburbanState
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })
    //Аренда коммерческая
    const [stateCommercialRent, setStateCommercialRent] = useState(() => {
        let clone = {...rentCommercialState}
        if (props.updateObjectState === null) {
            return rentCommercialState
        }
        Object.keys(clone)
            .map(key => props.updateObjectState.hasOwnProperty(key) ? clone[key] = props.updateObjectState[key] : '')
        return clone
    })

    const defineState = param => {
        switch (param) {
            case 6:
                return stateSpecificationsResidential
            case 7:
                return stateSpecificationsSuburban
            case 8:
                return stateSpecificationsCommercial
            case 10:
                return stateSpecificationsRent
            case 11:
                return stateSuburbanRent
            case 12:
                return stateCommercialRent
            case 14:
                return stateSpecificationsResidential
            case 15:
                return stateSpecificationsSuburban
            default:
                return stateSpecificationsResidential
        }
    }

    const sendObject = (parent, state) => {
        if (stateMainCategory.content === '' ||
            stateCeoCategory.pagetitle === '' ||
            stateSellerCategory.price === ''
        ) {
            setError(true)
        } else {
            state.rooms = String(state.rooms)
            state.room_to_sell = String(state.room_to_sell)
            state.separate_rooms = String(state.separate_rooms)
            state.storey = String(state.storey)
            state.storeys = String(state.storeys)
            props.objectAddStartAsync({
                ...stateMainCategory, ...stateCeoCategory, ...stateStatusCategory, parent: parent,
                ...stateSellerCategory, ...stateLocationCategory,...state
            }, props.token, selectedFile)
            setError(false)
        }

    }

    if (props.optionsLoading) {
        return <div className="add-object-page__center">
            <Loader/>
        </div>
    }

    if (props.success) {
        return <SuccessfulAdded value={'Успешно'}/>
    }

    return (
        <>
            {props.addObjectLoading && <div className="add-object-page__center"><Loader/></div>}
            {props.updateObjectLoading && <GlobalHook value={'Обновление...'}/>}
            <div className={'add-object-page'} style={{margin, width}}>
                <HeadComponent
                    h2={'Добавить объект'}
                    h2Margin={'0 0 0 30px'}
                    p={'К списку'}
                    optionMargin={'0 0 0 0'}
                    btnWidth={'50%'}
                    btnHeight={'50px'}
                    buttonValue={'Сохранить'}
                    onClick={() => props.objectUpdateStartAsync(
                        {
                            ...stateMainCategory, ...stateCeoCategory, ...stateStatusCategory, id,
                            ...stateSellerCategory, ...stateLocationCategory, ...defineState(props.updateObjectState.parent)
                        },
                        props.token, 'product')}
                    disabled={disabled}
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
                            disabled={disabled}
                            id={id ? id : null}
                            error={error}
                        />
                        <ProductImage
                            id={id ? id : null}
                            token={props.token}
                            disabled={disabled}
                            selectedFile={selectedFile}
                            setSelectedFile={setSelectedFile}
                            imgToDisplay={imgToDisplay}
                            setImgToDisplay={setImgToDisplay}
                            images={props.updateObjectState ? props.updateObjectState.product_files : []}
                        />
                        <CEOData
                            stateCeoCategory={stateCeoCategory}
                            setState={setStateCeoCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                            error={error}
                        />
                    </div>
                    <div className="add-object-page__forms-right">
                        <Status
                            stateStatusCategory={stateStatusCategory}
                            setState={setStateStatusCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />
                        <Seller
                            stateSellerCategory={stateSellerCategory}
                            setState={setStateSellerCategory}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                            error={error}
                        />
                        <Location
                            stateLocationCategory={stateLocationCategory}
                            setState={setStateLocationCategory}
                            settlementType={settlementType}
                            cityTypeHandler={cityTypeHandler}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />

                        {/*Продажа*/}
                        {mainCategory === 'sale' && additionalCategory === 'residential' &&
                        <SpecificationsResidential
                            stateSpecificationsResidential={stateSpecificationsResidential}
                            setState={setStateSpecificationsResidential}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}
                        {mainCategory === 'sale' && additionalCategory === 'suburban' &&
                        <SuburbanSpecifications
                            state={stateSpecificationsSuburban}
                            setState={setStateSpecificationsSuburban}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}
                        {mainCategory === 'sale' && additionalCategory === 'commercial' &&
                        <CommercialSpecifications
                            state={stateSpecificationsCommercial}
                            setState={setStateSpecificationsCommercial}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}

                        {/*Аренда*/}
                        {mainCategory === 'rent' && additionalCategory === 'residential' &&
                        <RentSpecifications
                            state={stateSpecificationsRent}
                            setState={setStateSpecificationsRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}
                        {mainCategory === 'rent' && additionalCategory === 'suburban' &&
                        <RentSubUrban
                            state={stateSuburbanRent}
                            setState={setStateSuburbanRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}
                        {mainCategory === 'rent' && additionalCategory === 'commercial' &&
                        <RentCommercial
                            state={stateCommercialRent}
                            setState={setStateCommercialRent}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            disabled={disabled}
                            id={id ? id : null}
                        />}

                        {/*Строительство*/}
                        {mainCategory === 'building' && additionalCategory === 'newBuildings' &&
                        <SuburbanSpecifications
                            state={stateSpecificationsSuburban}
                            setState={setStateSpecificationsSuburban}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id ? id : null}
                            disabled={disabled}
                            newBuilding
                        />}
                        {mainCategory === 'building' && additionalCategory === 'abroad' &&
                        <SpecificationsResidential
                            stateSpecificationsResidential={stateSpecificationsResidential}
                            setState={setStateSpecificationsResidential}
                            sendObject={sendObject}
                            updateObject={props.objectUpdateStartAsync}
                            token={props.token}
                            id={id ? id : null}
                            disabled={disabled}
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
    success: state.object.success,
    addObjectLoading: state.object.addObjectLoading,
    optionsLoading: state.object.optionsLoading,
    updateObjectLoading: state.object.updateObjectLoading,
    updateObjectState: state.object.fetchObjectSuccess
})

const mapDispatchToProps = dispatch => ({
    objectAddStartAsync: (object, token, selectedFile) => dispatch(objectAddStartAsync(object, token, selectedFile)),
    startFetchOptionsAsync: (token, option) => dispatch(startFetchOptionsAsync(token, option)),
    objectUpdateStartAsync: (object, token, category) => dispatch(objectUpdateStartAsync(object, token, category)),
    successOptions: () => dispatch(successOptions())
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AddObjectPage)