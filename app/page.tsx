import Image from "next/image";
import Header from "./component/header";
import Footer from "./component/footer";
import background from "@/app/background.jpg";

export default function Home() {
  return (
    <div className="backg">
       <Image src={background} alt="Thsi is an image"/>
    </div>
   
    
  );
}
