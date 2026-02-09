import PixelSnow from "./component/PixelSnow";
import QuestionCard from "./component/QuestionCard";

export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",  
        overflow: "hidden",   
      }}
    >
      <PixelSnow
        color="#ffffff"      
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={450}
        speed={0.25}
        density={0.3}
        depthFade={8}
        farPlane={20}
        brightness={5.0}
        gamma={0.8}
        variant="square"
        direction={125}
      />
      <QuestionCard />
    </main>
  );
}
