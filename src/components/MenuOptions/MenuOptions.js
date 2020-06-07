import React, { useState, useRef } from "react";
import { menuAccordionData, Container, Section, InnerSection, AccordionContainer,
    AccordionInner
} from './MenuOptions.styled';
import { AccordionItems } from './AccordionItems';

const MenuOptions = () => {
    const [currentAccordion, setCurrentAccordion] = useState(0);
    const [bodyHeight, setBodyHeight] = useState(0);
    
    const item0 = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
  
    const refs = [item0, item1, item2, item3, item4, item5];

    return (
        <Container>
            <Section>
                <InnerSection>
                    <AccordionContainer>
                        <AccordionInner>
                            <AccordionItems
                                accordionContent={menuAccordionData}
                                refs={refs}
                                currentAccordion={currentAccordion}
                                setCurrentAccordion={setCurrentAccordion}
                                setBodyHeight={setBodyHeight}
                                bodyHeight={bodyHeight}
                            />
                        </AccordionInner>
                    </AccordionContainer>
                </InnerSection>
            </Section>
        </Container>
    )
}

export default MenuOptions;
