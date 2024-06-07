import NavigationBar from "@/components/NavigationBar";

export default function Home() {

  return (
    <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{backgroundImage: "url('cover.jpg')", height: '100vh'}}>
      <NavigationBar></NavigationBar>
    </div>
  );
}
