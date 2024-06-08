import NavigationBar from "@/components/NavigationBar";
import BottomOverview from "@/components/BottomOverview";

export default function Home() {

  return (
    <div>
      <NavigationBar></NavigationBar>
      <video autoPlay loop muted style={{height: '80vh', margin: 'auto'}}>
        <source src="cover.mp4" type="video/mp4"></source>
      </video>
      <BottomOverview></BottomOverview>
    </div>
  );
}
