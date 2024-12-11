import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unlock exclusive deals with our special offers! Discover unbeatable
          value on high-quality products designed for comfort, style, and
          lasting satisfaction. Don’t miss out on these limited-time savings!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          From seasonal discounts to exclusive bundles, our special offers bring
          you the best at unbeatable prices. Whether you're looking for everyday
          essentials or a stylish upgrade, our handpicked deals are crafted to
          deliver both value and quality. Grab these limited-time offers and
          elevate your experience today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop Now"} iconUrl={arrowRight} />
          <Button
            label={"Learn More"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
