import React from 'react'
import hobbiesObject from '../api/hobbies.object';
import './scss/hobbies.style.scss';
const Hobbies = () => {
    const { header, content } = hobbiesObject;
    return (
        <section className="hobbies-container global-pd">
            <h1 className="hobbies-title">
                {header}
            </h1>
            {
                content.map((content,index) => (
                    <section key={index} className="hobbies-box">
                    <section className="hobbies-box-img-container">
                    <img src={content.img} alt={content.title} className="hobbie box-img" />
                    </section>
                    <h1 className="hobbies-box-title">
                        {content.title}
                    </h1>
                    <p className="hobbies-box-desc">
                        {content.description}
                    </p>
                    </section>
                ))
            }
            </section>
    )
}

export default Hobbies
