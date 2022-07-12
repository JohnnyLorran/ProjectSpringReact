import HeaderClass from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {

  return (
    <>
      <HeaderClass />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )

}

export default App
