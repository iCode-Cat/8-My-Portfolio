import React from 'react'
import './button.style.scss'

const Button = (props) => {
    const { type, size,id,setSort, setProject } = props;
    return (
        <button onClick={
            (e)=>{
                setSort(id)
                setProject(e.target.innerText)
                }
            } className={`${'btn-'+type} btn ${'btn-'+size}`
            
            }>
            { props.children }
        </button>
    )
}

export default Button
