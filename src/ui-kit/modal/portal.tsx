import { FC } from 'react';
import ReactDOM from 'react-dom';

import { MODAL_ROOT } from 'app/config/constants';

export const Portal: FC = ({ children }) => {
  const modalRoot = document.getElementById(MODAL_ROOT) as HTMLElement;

  return ReactDOM.createPortal(children, modalRoot);
};
