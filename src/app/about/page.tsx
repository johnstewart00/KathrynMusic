import KathrynImage from "../../../public/Kathryn.jpg";
import Image from "next/image";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="bg-gray-100 p-10 m-10 w-1/2">
          <div>Kathryn Stewart</div>
          <div>
            Kathryn is an expert pianist with over 15 years of teaching
            experience. Although she may lack an incredible amount of
            intelligence, she sure knows how to make music sound good. It truly
            is incredible to see her make it this far. She will probably be
            really mad when she reads this. Also, we are all hoping that her and
            her husband, Robby, have more kids and more dogs. Go DiamondBacks.
          </div>
        </div>
        <div className="p-10">
          <Image src={KathrynImage} alt="Grand Piano" width={450} />
        </div>
      </div>
    </div>
  );
}
