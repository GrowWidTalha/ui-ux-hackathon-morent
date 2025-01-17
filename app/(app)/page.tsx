import CarSection from "@/components/sections/CarSection";
import Hero from "@/components/sections/hero";
import PickSection from "@/components/sections/pick-an-drop-picker";
import { carsCollection } from "@/data/cars";

export default async function Home() {
    const res = await fetch("http://localhost:3000/api/v1/cars")
    if(!res) return "Loading..."
    const data =await res.json()
    console.log(data.data)
  return (
    <main className="">
      <Hero />
      <PickSection />
      {/* <CarSection
        isHomePage
         title="Most Selling"
         cars={carsCollection.slice(0, 4)}
      /> */}
      <CarSection
         title="Recomendation Car"
         showMoreButton
         cars={data.data}
      />
    </main>
  );
}
