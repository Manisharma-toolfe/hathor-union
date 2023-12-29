import Nav from "./Components/Nav";
import OurServices from "./Components/OurServices";
import HathorUnion from "./Components/HathorUnion";
import Network from "./Components/Network";
import Cultural from "./Components/Cultural";
import Success from "./Components/Success";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/footer";


const App = () => {
  return (
    <main className="">
      <section>
        <Nav />
      </section>

      <section>
        <OurServices />
      </section>

      <section>
        <HathorUnion />
      </section>

      <section>
        <Network />
      </section>

      <section>
        <Cultural />
      </section>

      <section>
        <Success />
      </section>

      <section>
        <ContactUs />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App