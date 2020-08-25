import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import TransparentButton from "../../transparent-button/TransparentButton";
import FormInput from "../../form-input/FormInput";
import './product-image.css'

const ProductImage = () => {
    const [selectedFile, setSelectedFile] = useState([])

    const onFileChanged = event => {
        setSelectedFile([...selectedFile, URL.createObjectURL(event.target.files[0])])
    }

    const deleteHandler = url => {
        setSelectedFile(selectedFile.filter(el => el !==url))
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
                    selectedFile.map((el, i) => {
                        return (
                            <div
                                className="product-image__image-block" key={i}>
                                <div className="image-block">
                                    <div className="product-image__image">
                                        <div className="product-image__delete-btn">
                                            <TransparentButton
                                                width={'40%'}
                                                height={'45px'}
                                                onClick={() => deleteHandler(el)}
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