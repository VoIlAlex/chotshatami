import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import TransparentButton from "../../transparent-button/TransparentButton";
import FormInput from "../../form-input/FormInput";
import axios from 'axios'
import './product-image.css'

const ProductImage = props => {
    const [selectedFile, setSelectedFile] = useState([])
    const [imgToDisplay, setImgToDisplay] = useState([])
    const [serverImg, setServerImg] = useState(props.images)

    const onFileChanged = event => {
        setSelectedFile([...selectedFile, event.target.files[0]])
        setImgToDisplay([...imgToDisplay, URL.createObjectURL(event.target.files[0])])
    }

    const fileSubmit = () => {
        for (let i = 0; i <= selectedFile.length; i++) {
            const formData = new FormData()
            formData.append(`file`, selectedFile[i])
            formData.append("id", props.id);
            axios('http://104.248.230.108/api/product/images ', {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                data: formData
            })
        }
    }

    const deleteHandler = (id, param) => {
        if(param === 2){
            setImgToDisplay(imgToDisplay.filter(el => el !== id))
        }
        else if(param===1) {
            setServerImg(serverImg.filter(el => el.id !== id))
            axios('http://104.248.230.108/api/product/images ', {
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                data: {file_id: id}
            })
        }
    }

    return (
        <div className="product-image">
            <HeadComponent
                width={'97%'}
                h2={'Изображение объекта'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'50%'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                onClick={() => fileSubmit()}
                reverse
            />
            <div className="product-image__upload-input">
                <input type="text" placeholder={'Загрузить изображение'}/>
                <input type="file" name="file" id={'file'} className="inputfile" onChange={e => onFileChanged(e)}/>
                <label htmlFor="file">Выбрать файл</label>
                <TransparentButton
                    width={'20%'}
                    height={'45px'}
                    margin={'0 0 0 1.4vw'}
                >Загрузить</TransparentButton>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                {
                    serverImg.map((el, i) => {
                        return (
                            <div
                                className="product-image__image-block" key={i}>
                                <div className="image-block">
                                    <div className="product-image__image">
                                        <div className="product-image__delete-btn">
                                            <TransparentButton
                                                width={'40%'}
                                                height={'45px'}
                                                onClick={() => deleteHandler(el.id, 1)}
                                            >Удалить</TransparentButton>
                                        </div>
                                        <img src={el.url} alt=""/>
                                    </div>
                                </div>
                                <div className="option-block">
                                    <p><input
                                        name={'img'}
                                        type={'radio'}
                                        id={`_check${i}`}
                                        className={'custom-checkbox'}/><label htmlFor={`_check${i}`}>Основное
                                        изображение</label>
                                    </p>
                                    <FormInput labelValue={'Img alt'}/>
                                    <FormInput labelValue={'Img title'} margin={'15px 0 0 '}/>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    imgToDisplay.map((el, i) => {
                        return (
                            <div
                                className="product-image__image-block" key={i}>
                                <div className="image-block">
                                    <div className="product-image__image">
                                        <div className="product-image__delete-btn">
                                            <TransparentButton
                                                width={'40%'}
                                                height={'45px'}
                                                onClick={() => deleteHandler(el, 2)}
                                            >Удалить</TransparentButton>
                                        </div>
                                        <img src={el} alt=""/>
                                    </div>
                                </div>
                                <div className="option-block">
                                    <p><input
                                        name={'img'}
                                        type={'radio'}
                                        id={`_check${i}`}
                                        className={'custom-checkbox'}/><label htmlFor={`_check${i}`}>Основное
                                        изображение</label>
                                    </p>
                                    <FormInput labelValue={'Img alt'}/>
                                    <FormInput labelValue={'Img title'} margin={'15px 0 0 '}/>
                                </div>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default ProductImage