export const EventSlide = ({id, imgSrc, tag, header, active}) => {
    return (
        <>
            <div className={`event-slide ${id} ${active}`} id={id}>
                <img src={imgSrc} alt="Event Image"/>
                <div className="event-content">
                    <span className="event-header">{header}</span>
                    <span className="event-tag">{tag}</span>
                    <span className="event-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur doloribus expedita, minus nobis qui sit vero. Adipisci delectus, dolor doloribus nisi optio perferendis quo quod rem repudiandae suscipit?</span>
                    <div className="event-btn-container">
                        <button className="event-cta">Register</button>
                        <div className="event-cta-bg"/>
                    </div>
                </div>
            </div>
        </>
    )
}