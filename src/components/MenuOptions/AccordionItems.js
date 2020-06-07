import React from 'react';
import { AccordionItem, AccordionTitle, AccordionBody, AccordionContent} from './MenuOptions.styled';

export const AccordionItems = ({
    accordionContent,
    refs,
    currentAccordion,
    setCurrentAccordion,
    setBodyHeight,
    bodyHeight
}) =>
    accordionContent.map(({ title, content }, i) => (
        <AccordionItem key={`accordion-item-${i}`}>
            <AccordionTitle
                onClick={() => {
                    setCurrentAccordion(i);
                    setBodyHeight(refs[i].current.clientHeight);
                    console.log(refs[i].current.clientHeight);
                }}
            >
                {title}
            </AccordionTitle>
            <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
                <AccordionContent ref={refs[i]}>{content}</AccordionContent>
            </AccordionBody>
        </AccordionItem>
    ));