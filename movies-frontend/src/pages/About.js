import imgTina from '../assets/IMG_3873.jpeg';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About the Developer</h1>
            <hr />
            <div className="about-content">
                <figure className="figure about-figure">
                    <img src={imgTina} alt="Tina Smith" className="about-img" />
                    <figcaption className="about-caption">
                        Tina Smith <br /> Developer &amp; Web Designer
                    </figcaption>
                </figure>

                <p className="about-text">
                    Expert knowledge and skills, with a proven ability to lead projects from inception
                    through to production release. Expert ability to work and communicate effectively
                    with clients, software engineers, and management in a highly visible, mission-critical
                    environment both verbally and in writing. Experience collaborating with product owners
                    and subject matter experts to understand business needs and recommend solutions on
                    large and/or complex projects. Experience owning problems and working them to
                    resolution by collaborating with the right people and keeping management, peers,
                    and teammates informed.
                    <br />
                    <br />
                    In my free time I enjoy family moments, watching action movies, reading romance
                    novels, or listening to the latest audible e-book, traveling with friends, and
                    creating gift baskets and money bouquets.
                </p>
            </div>
        </div>
    );
};

export default About;
