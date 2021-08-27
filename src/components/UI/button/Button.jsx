import s from './Button.module.css'

const Button = ({ children ,...props}) =>{
    return(
        <button onClick={props.deletePost} className={s.button}>
            {children}
        </button>
    )
}

export default Button