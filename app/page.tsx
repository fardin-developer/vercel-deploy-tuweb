import Content from "@/components/contents/Content";
import Event from "@/components/events/Event"
import Teams from "@/components/Teams/teams";
// import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <main>
      <Content />
      <Event />
      <Teams />
      {/* <Footer/> */}
    </main>
  );
}
