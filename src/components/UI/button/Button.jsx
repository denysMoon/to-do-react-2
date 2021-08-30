import s from './Button.module.css'

// onClick={props.deletePost}

const Button = ({ children ,...props}) =>{
    return(
        <button {...props} className={s.button}>
            {children}
        </button>
    )
}

export default Button