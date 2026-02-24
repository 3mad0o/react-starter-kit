import React from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type AccordionProps = {
  className?: string;
  id: string;
  ttitle: string;
  content: React.ReactNode;
};

export const Accordion = ({ className, id, ttitle, content }: AccordionProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState('0px');

  const toggleAccordion = () => {
    if (contentRef.current) {
      setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);
    }
    setIsOpen(prev => !prev);
  };

  return (
    <div id={id} className={`accordion w-full border-2 border-gray-300 rounded-md p-4 ${className}`}>
      <div onClick={toggleAccordion} className="w-full flex items-center cursor-pointer">
        <div className='font-medium text-lg'>{ttitle}</div>
        <div className='ml-auto'>
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300"
      >
        <div className="pt-2 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};