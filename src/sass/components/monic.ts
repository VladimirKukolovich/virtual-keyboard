import { createElement } from '../../js/createElement';
import textValue from './textValue';
import { virtualKeyboard } from './virtualKeyboard';

const { body } = document;

export const monic = () => {
  const wrapper = createElement({
    element: 'div',
    className: 'wrapper',
  });
  const textarea = createElement({
    element: 'textarea',
    className: 'text',
    value: '',
  });
  body.append(wrapper);
  wrapper.append(textarea);
};

body.addEventListener('keydown', (e) => {
  const currentCase = localStorage.getItem('case');
  const currentLanguage = localStorage.getItem('language') || 'en';
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    const togleLang = currentLanguage === 'en' ? 'ru' : 'en';
    body.addEventListener('keyup', (ev) => {
      if (ev.code === 'AltLeft' || ev.code === 'AltRight') {
        localStorage.setItem('language', togleLang);
        body.childNodes[2].remove();
        virtualKeyboard();
      }
    });
  }

  if (e.code === 'CapsLock') {
    const togleCase = currentCase === 'lowerCase' || currentCase === null ? 'upperCase' : 'lowerCase';
    localStorage.setItem('case', togleCase);
    body.childNodes[2].remove();
    virtualKeyboard();
  }
});
