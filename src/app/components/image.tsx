import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/pianoKeys.jpg"
      fill
      className="absolut top-0 left-0 w-full h-full z-[-1]"
      alt="Picture of the author"
    />
  );
}
