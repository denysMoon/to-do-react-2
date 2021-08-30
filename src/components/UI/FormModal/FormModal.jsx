import s from './FormModal.module.css'

const FormModal = ({children, visible, setVisible}) =>{

    const rootClasses = [s.myModal]

    if(visible){
        rootClasses.push(s.active)
    }

    return(
        <div className={rootClasses.join(' ')}>
            <div className={s.content}>
                {children}
            </div>
        </div>
    )
}

export default FormModal