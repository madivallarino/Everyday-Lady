import newyork from './newyork.jpeg'

function About(){



    return(
        <div className="holder">
            <div className="missionbox">
                <div className="missiontitle">
                    <h1>Our Mission:</h1>
                </div>
                <div className="missionlist">
                    We are locally owned, based out of Manhattan, New York. We strive to bring sustainable and eco-friendly products to women around the world, but especially to those in our city. We want to support the ladies that go on to support the world. Our everyday is for you.
                </div>
            </div>
            <div className="picturebox">
            <img src={newyork} alt="newyork"/>
            </div>
            
        </div>
    )
}

export default About;