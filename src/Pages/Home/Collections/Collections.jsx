import CardTemplate from "../../Shared/CardTemplate/CardTemplate";
import ColOne from "../../../assets/ImgCollection/c1.png"
import ColTwo from "../../../assets/ImgCollection/c2.jpg"
import ColThree from "../../../assets/ImgCollection/c3.jpg"

const Collections = () => {
  return (
    <div>
      <h1 className="font-display my-10 font-bold text-center text-5xl">
        Our Collections
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CardTemplate cardImage={ColOne} cardTitle={"PEARLS BANGLES"}/>
          <CardTemplate cardImage={ColTwo} cardTitle={"MODERN JEWELRY"}/>
          <CardTemplate cardImage={ColThree} cardTitle={"LONG EAR STUD"}/>
        </div>
      </div>
    </div>
  );
};

export default Collections;
