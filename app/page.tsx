import Content from "@/components/contents/Content";
import Event from "@/components/events/Event"
import Teams from "@/components/Teams/teams";
import Footer from "@/components/Footer/footer";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
    <main>
      <LandingPage/>
      <Content />
      <Event />
      <Teams />
      <Footer/>
    </main>
  );
}
