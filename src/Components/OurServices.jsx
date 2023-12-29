import Poly from "../assets/images/polygon.png";

const OurServices = () => {
  return (
    <section className="w-full min-h-screen text-white p-20">
      <div className="hidden xl:block lg:block md:block text-center text-white">
        <p>Your Business Trifecta</p>
        <p>One stop optimization for your business,Brand and Workflow</p>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:mt-[5rem]">
        <div className="">
          <h1 className="text-[#CCFE01] text-4xl lg:text-7xl font-bold text-center lg:text-left">
            OUR
          </h1>
          <h1 className="text-[#CCFE01] text-4xl lg:text-7xl font-bold text-center lg:text-left">
            SERVICES
          </h1>

          <ul className="list-disc mt-5">
            <li className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              natus obcaecati vitae, accusantium itaque ullam.
            </li>
            <hr />
            <li className="py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias repellendus, voluptatum facere porro, voluptatibus
              dolores aliquid officia enim nisi tempore, culpa iusto magni
              itaque neque!
            </li>
            <hr className="py-1" />
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              consectetur provident harum architecto sunt recusandae temporibus
              optio voluptates suscipit aut!
            </li>
          </ul>
        </div>

        <div>
          <img src={Poly} alt="Poly" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
