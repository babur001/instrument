import { Carousel, CarouselProps } from "nuka-carousel";

function Carousell(props: CarouselProps) {
  return (
    <Carousel
      showDots
      // defaultControlsConfig={{
      //   nextButtonClassName: "hidden",
      //   prevButtonClassName: "hidden",
      //   pagingDotsContainerClassName: "dots-container",
      //   pagingDotsStyle: {
      //     fill: "white",
      //     borderRadius: "50%",
      //     display: "inline-block",
      //     margin: "0rem 0.5rem",
      //     width: "5px",
      //     height: "5px",
      //   },
      // }}
      // withoutControls={true}
      // slidesToScroll={props.slide || 1}
      // slidesToShow={props.slides || 1}
      // cellSpacing={10}
      {...props}
    />
  );
}

export default Carousell;
