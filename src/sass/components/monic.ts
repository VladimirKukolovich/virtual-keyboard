import { createElement } from '../../js/createElement';

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
export const desc = () => {
  const description = createElement({
    element: 'span',
    className: 'description',
  });
  body.append(description);
  description.innerHTML = 'language: Shift + Alt';
};
