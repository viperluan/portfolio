import { PropsWithChildren, useState } from 'react';
import './styles.scss';

interface AccordionProps {
  text: string;
}

const Accordion = ({ children, text }: PropsWithChildren<AccordionProps>) => {
  const [accordionIsActive, setAccordionIsActive] = useState(false);
  const BUTTON_CLASS_STATE = accordionIsActive ? 'active' : 'inactive';

  const handleAccordionClick = () => {
    setAccordionIsActive(!accordionIsActive);

    console.log(accordionIsActive);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header">
        <p className="accordion-text">{text}</p>

        <div className="accordion-button-container">
          <button className={BUTTON_CLASS_STATE} onClick={handleAccordionClick}>
            <img src="/images/arrow-down.webp" alt="Accordion button image" />
          </button>
        </div>
      </div>

      <div className={`accordion-content-container ${BUTTON_CLASS_STATE}`}>{children}</div>
    </div>
  );
};

export { Accordion };
