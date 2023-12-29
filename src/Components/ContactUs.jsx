import World2 from "../assets/images/world2.png";

const ContactUs = () => {
  return (
    <section className="w-full min-h-screen text-white p-20">
      <div className="text-center text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        <p className="text-[#CCFE01] text-8xl font-bold">YOUR <span className="text-white">IMAGINATION</span> </p>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-[5rem]">
        <div className="">
          <h1 className="text-[#CCFE01] text-5xl font-bold">READY TO UNLOCK</h1>
          <h1 className="text-[#CCFE01] text-5xl font-bold">YOUR <span className="text-white">SUCCESS?</span> </h1>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ex quia quos dolorem fuga nihil consequuntur, necessitatibus ad
            dolor voluptas sed, aspernatur ducimus, ipsam facilis.
          </p>
        </div>

        <div>
          <img src={World2} alt="Poly" className=""/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
