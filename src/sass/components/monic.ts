import { createElement } from '../../js/createElement';
import { virtualKeyboard } from './virtualKeyboard';

const { body } = document;

export const monic = () => {
  const wrapper = createElement({
    element: 'div',
    className: 'wrapper',
  });
  const textarea = createElement({
    element: 'div',
    className: 'textarea',
  });
  const text = createElement({
    element: 'span',
    className: 'text',
  });
  body.append(wrapper);
  wrapper.append(textarea);
  textarea.append(text);
};
