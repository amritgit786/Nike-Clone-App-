import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We offer shoes that combine comfort, durability, and style, crafted
          with high-quality materials to ensure a perfect fit and long-lasting
          wear. Each pair is designed with precision to meet diverse needs,
          whether for daily wear, athletic activities, or formal occasions. Our
          collection spans casual, formal, and athletic styles, all built to
          provide comfort and support. We prioritize excellence in
          craftsmanship, using premium materials to deliver shoes that stand the
          test of time. Discover shoes that are as dependable as they are
          stylish.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Choose our shoes for unmatched quality and comfort that elevate your
          wardrobe with every step.
        </p>
        <div className="mt-11">
          <Button label={"View Details"} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
