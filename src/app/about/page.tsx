import KathrynImage from "../../../public/Kathryn.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="text-5xl text-center mt-8">Kathryn Gilbert</div>
      <div className="md:flex">
        <div className="bg-gray-100 p-10 m-10 md:w-1/2 md:h-min">
          <div>
            Kathryn is an expert pianist with over 15 years of teaching
            experience. She graduated with a degree in piano education from
            Brigham Young University Idaho. With her expertise and experience
            teaching, she will help any ambitious student achieve their musical
            goals. Prices per lesson will vary. Contact Kathryn for more
            information.
          </div>
          <div className="flex justify-center mt-10">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/kyH90OSJzTY?start=344&end=610"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="p-10">
          <Image src={KathrynImage} alt="Grand Piano" width={450} />
        </div>
      </div>
    </div>
  );
}
