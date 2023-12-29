import Rectangle from "../assets/images/rectangle.png";

const Success = () => {
  return (
    <section className="w-full min-h-screen grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 p-20">
      <div className="text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#CCFE01] font-bold">
          NETWORK
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">UNION</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos recusandae illum vel nisi, excepturi reiciendis ducimus
          corporis. Libero possimus assumenda quod deleniti porro beatae.
          Ducimus recusandae et quo sed.
        </p>
      </div>

      <div>
        <img src={Rectangle} alt="Rectangle" />
      </div>
    </section>
  );
};

export default Success;
