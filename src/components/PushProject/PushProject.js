import React from 'react'
import Select, { components } from 'react-select'
import { AnimatePresence } from 'framer-motion'
import './PushProject.scss'
import Modal from './Modal'

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <div className='select-arrow'></div>
        </components.DropdownIndicator>
    );
};

function PushProject() {
    const [formData, setFormData] = React.useState(
        {
            title: "",
            description: "",
            category: "web-development",
            link: "",
            mobile: null,
            desktop: null
        }
    )
    const [category, setCategory] = React.useState()
    const [isSelected, setIsSelected] = React.useState(
        {
            mobile: false,
            desktop: false
        }
    )
    const [dragActive, setDragActive] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    function handleChange(event) {
        setFormData((prevForm) => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleFileInput(event) {
        const file = event.target.files[0]
        const name = event.target.name
        if (file) {
            setFormData((prevForm) => {
                return {
                    ...prevForm,
                    [name]: file
                }
            });
            setIsSelected((prevSelected) => {
                return {
                    ...prevSelected,
                    [name]: true
                }
            })
        }
    }

    const handleDrag = function (e) {
        console.log(1)
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const name = e.target.name
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFormData((prevForm) => {
                return {
                    ...prevForm,
                    [name]: e.dataTransfer.files[0]
                }
            });
            setIsSelected((prevSelected) => {
                return {
                    ...prevSelected,
                    [name]: true
                }
            })
        }
    };

    function handleSelectChange(value, action) {
        setCategory(value)
        setFormData((prevForm) => {
            return {
                ...prevForm,
                [action.name]: value.value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTimeout(() => modalOpen ? close() : open(), 1500)
        console.log(formData)
    }

    const options = [
        { value: 'web-development', label: 'web-development' },
        { value: 'mobile app dev', label: 'mobile app dev' },
        { value: 'bot development', label: 'bot development' },
        { value: 'Desktop software', label: 'Desktop software' }
    ]

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "54px",
            color: "#000000",
            background: "#D9D9D9"
        }),
        control: (provided, state) => ({
            ...provided,
            background: "#D9D9D9",
            height: "100%",
            padding: "0px 10px",
            color: "#000",
            fontWeight: 700,
            fontSize: "40px",
            flexDirection: "row-reverse",
            border: 0,
            boxShadow: "none"
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: "#000",
            fontWeight: 700,
            fontSize: "40px",
        }),
        container: (provided, state) => ({
            ...provided,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: "77px",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: "#000",
            fontWeight: 700,
            fontSize: "40px",
        }),
        indicatorSeparator: () => ({}),
        menu: (provided, state) => ({
            ...provided,
            background: "#D9D9D9",
            padding: "30px 75px"
        }),
        noOptionsMessage: (provided, state) => ({
            ...provided,
            color: "#000",
            fontWeight: 700,
            fontSize: "40px"
        }),
    }

    return (
        <div className='project'>
            <div className="project__container">
                <form className="project__form form" onSubmit={handleSubmit}>
                    <div className="form__top">
                        <div className='form__column'>
                            <input type="text" className='form__element form__input' placeholder='введите тайтл проекта' name='title' value={formData.title} onChange={handleChange} />
                            <textarea className='form__area form__element' placeholder='введите описание проекта до 730 символов' name='description' value={formData.description} onChange={handleChange} />
                        </div>
                        <div className='form__column'>
                            <Select components={{ DropdownIndicator }} placeholder={"выберите категорию"} styles={customStyles} options={options} value={category} name="category" onChange={handleSelectChange} />
                            <input type="text" className='form__input form__link form__element' placeholder='добавтье ссылку на проект' name='link' value={formData.link} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form__bottom bottom">
                        <div className="bottom__column bottom__column_d">
                            <h2 className='bottom__title'>десктоп</h2>
                            <label className='bottom__label' htmlFor="desktop">
                                {isSelected.desktop ?
                                    <img src={URL.createObjectURL(formData.desktop)} alt="dekstop project" /> :
                                    <span>загрузить фотографию главной страницы проекта</span>
                                }
                            </label>
                            <input name='desktop' accept='image/*' onChange={handleFileInput} id='desktop' className='form__image' type="file" />
                        </div>
                        <div className="bottom__column bottom__column_m">
                            <h2 className='bottom__title'>мобайл</h2>
                            <label className='bottom__label' htmlFor="mobile">
                                {isSelected.mobile ?
                                    <img src={URL.createObjectURL(formData.mobile)} alt="mobile project" /> :
                                    <span>загрузить фотку главной стр моб версии</span>
                                }</label>
                            <input type="file" name='mobile' accept='image/*' onChange={handleFileInput} onDragEnter={handleDrag} id='mobile' className={`form__image ${dragActive ? "drag-active" : ""}`} />
                        </div>
                    </div>
                    <button className='form__btn' type='submit'>Опубликовать</button>
                    {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                </form>
            </div>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                exitBeforeEnter={true}
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={"Succes. Data sent"} />}
            </AnimatePresence>
        </div>
    )
}

export default PushProject