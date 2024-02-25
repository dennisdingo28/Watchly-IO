import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Faq = () =>{
    return (
        <div>
            <p className="text-center font-medium text-3xl tracking-wide">Frequently asked questions</p>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="How can I pay?">
                    <AccordionTrigger className="text-lg">How can I pay?</AccordionTrigger>
                    <AccordionContent className="">
                        very simple using stripe
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stripe">
                    <AccordionTrigger className="text-lg">How can I pay?</AccordionTrigger>
                    <AccordionContent className="">
                        very simple using stripe
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="How can I pay?">
                    <AccordionTrigger className="text-lg">How can I pay?</AccordionTrigger>
                    <AccordionContent className="">
                        very simple using stripe
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}