import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { TreeCards } from "./components/ui/organisms/tree-cards";

const App = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <h1 className="text-white text-center text-5xl pt-10">
          Aceternity UI Integration
        </h1>
        <div>
          <TreeCards />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default App;
