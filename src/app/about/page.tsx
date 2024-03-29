import { Color } from "../styles/colors";
import KathrynImage from "../../../public/Kathryn.jpg"
import Image from 'next/image'
import Header from "../components/Header";
import { MuiBox } from "../components/Box";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { ImageBox } from "../components/ImageBox";

export default function About() {
  return (
    <div style={{
      position: 'absolute', 
      width: '100%', 
      height: '100vh', 
      zIndex: 0, 
      backgroundColor: Color.lightGrey }}>
      <Header />  
      <div style = {{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}> 
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <ImageBox>
            <Image 
                src={KathrynImage} 
                alt="Grand Piano" 
                width={450}
              /> 
          </ImageBox>
        </div>  
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <MuiBox style={{height: 450}}>
            <Heading>Kathryn Stewart</Heading>
            <Paragraph>
              Kathryn is an expert pianist with over 15 years of teaching experience. Although she may lack
              an incredible amount of intelligence, she sure knows how to make music sound good. It truly is
              incredible to see her make it this far. She will probably be really mad when she reads this. Also, 
              we are all hoping that her and her husband, Robby, have more kids and more dogs. Go DiamondBacks.
            </Paragraph>
        </MuiBox>
        </div>
      </div> 
    </div>
  );
}
