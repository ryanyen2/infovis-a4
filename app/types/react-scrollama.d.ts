declare module 'react-scrollama' {
  import { ReactNode } from 'react';

  interface ScrollamaProps {
    children: ReactNode;
    offset?: number;
    onStepEnter?: (response: { data: any; entry: IntersectionObserverEntry; direction: string }) => void;
    onStepExit?: (response: { data: any; entry: IntersectionObserverEntry; direction: string }) => void;
    debug?: boolean;
    progress?: boolean;
    threshold?: number;
  }

  interface StepProps {
    data?: any;
    children: ReactNode;
  }

  export const Scrollama: React.FC<ScrollamaProps>;
  export const Step: React.FC<StepProps>;
} 