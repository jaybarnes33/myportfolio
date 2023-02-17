import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 400,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const EndlessCarousel = ({ children }: { children?: ReactNode }) => {
  return (
    <Carousel
      pauseOnHover
      partialVisible
      responsive={responsive}
      itemClass="mx-2"
      infinite
    >
      {children}
    </Carousel>
  );
};

export default EndlessCarousel;
