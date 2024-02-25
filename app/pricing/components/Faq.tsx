import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faq } from "@/constants"
    
export const Faq = () =>{
    return (
        <div>
            <p className="text-center font-medium text-3xl tracking-wide">Frequently asked questions</p>

            <Accordion type="single" collapsible className="w-full">
                {faq.map((fq, idx)=>(
                <AccordionItem key={idx} value={`${idx}`}>
                    <AccordionTrigger className="text-lg">{fq.question}</AccordionTrigger>
                    <AccordionContent className="">
                        {fq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}