import { InfoText } from "@/components/InfoText"
import { Features } from "./Features"

export const About = () => {
  return (
    <div>
        <p className="text-darkGray uppercase tracking-wider text-center">SERVICES</p>
        <p className="font-bold text-center text-[2em] tracking-wider">What <InfoText>We</InfoText> Do?</p>
        <div className="flex justify-center mb-4">
            <p className="text-gray-600 text-left xsMd:text-center max-w-[600px]">
            Our cutting-edge software meticulously records and analyzes user sessions from the moment they enter your website until departure. Uncover invaluable insights into user engagement, content interaction, and overall navigation flow. 
            </p>     
        </div>
       <Features/>
    </div>
  )
}