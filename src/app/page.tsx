import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import './styles/globals.css'
import grandPiano from "../../public/grandPiano.png";
import Image from 'next/image'
import Header from './components/Header';
import { MuiBox } from './components/Box';


export default function Home() {
  return (
    <div style={{ position: 'relative' }}> 
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', zIndex: 0 }}> 
        <Image 
          src={grandPiano} 
          alt="Grand Piano" 
          layout="fill"
          objectFit="cover"
          quality={100}
        />  
      </div>
      
      {/* Text Content */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>  
        <Header />
        <MuiBox>
          <Heading>Kathryn Stewart</Heading>
          <Paragraph>Life is better with an appreciation for the arts</Paragraph>
        </MuiBox>
      </div> 
    </div>
  );
}
