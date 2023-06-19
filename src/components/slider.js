import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
// import sliderImage from "../assets/images/silderImage.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default class Sliders extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };

        const { children } = this.props;

        return (
            <div className="w-[260px] sm:w-[320px] m-auto">
                <div className="flex justify-end">
                    <div>
                        <button className="mr-[20px]" onClick={this.previous}>
                            <FaArrowLeft />
                        </button>
                        <button onClick={this.next}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Slider className="" ref={c => (this.slider = c)} {...settings}>
                    {children}
                </Slider>
            </div>
        );
    }
}