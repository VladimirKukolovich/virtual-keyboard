import { createElement } from '../../js/createElement';
import {
  ABC, Abc, RuAbc, RuABC,
} from './state';
import textValue from './textValue';
// import { monic } from './monic';

const { body } = document;
let language = Abc;

export const virtualKeyboard = () => {
  const currentLanguage = localStorage.getItem('language') || 'en';
  const currentCase = localStorage.getItem('case');

  if (currentLanguage === 'en') {
    language = (currentCase === 'lowerCase' || currentCase === null ? Abc : ABC);
  }

  if (currentLanguage === 'ru') {
    language = (currentCase === 'lowerCase' || currentCase === null ? RuAbc : RuABC);
  }

  const keyBoard = createElement({
    element: 'div',
    className: 'keyboard',
  });
  for (let i = 0; i < 5; i += 1) {
    const keysRow = createElement({
      element: 'div',
      className: 'key-row',
    });
    type Assa = {
      value:string, className: string, data: string,
    };
    language[i].forEach(({ value, className, data }: Assa) => {
      const button = createElement({
        element: 'div',
        className: `button ${className}`,
        innerHtml: value,
        data,
      });
      keysRow.append(button);
    });
    keyBoard.append(keysRow);
  }
  body.append(keyBoard);
  const capsLock = document.querySelector('.caps_lock');
  if (currentCase === 'upperCase') capsLock?.classList.toggle('active');
  // textValue();
};

// body.addEventListener('keydown', (e) => {
//   const currentCase = localStorage.getItem('case');
//   const currentLanguage = localStorage.getItem('language') || 'en';
//   console.log(e.code);
//   if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
//     const togleLang = currentLanguage === 'en' ? 'ru' : 'en';
//     body.addEventListener('keydown', (ev) => {
//       if (ev.code === 'AltLeft' || ev.code === 'AltRight') {
//         localStorage.setItem('language', togleLang);
//         body.childNodes[2].remove();
//         virtualKeyboard();
//       }
//       ev.preventDefault();
//     });
//   }

//   if (e.code === 'CapsLock') {
//     const togleCase = currentCase === 'lowerCase'
// || currentCase === null ? 'upperCase' : 'lowerCase';
//     localStorage.setItem('case', togleCase);
//     body.childNodes[2].remove();
//     virtualKeyboard();
//     e.preventDefault();
//   }
// });
// const text: string[] = [];
// let output = '';
// const outputTextarea = (t:string[]) => t.filter((e) => e.length === 1).join('');
// body.addEventListener('keydown', (e) => {
//   text.push(e.key);
//   if (e.code === 'Backspace') {
//     text.pop();
//   }
//   if (e.code === 'Enter') {
//     text.push('/n');
//   }
//   const textArea = document.querySelector('.text');
//   output = outputTextarea(text);
//   textArea!.innerHTML = output;
// });
// body.addEventListener('keydown', (e) => {
// const currentLanguage = localStorage.getItem('language') || 'en';
// if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
//   const togleLang = currentLanguage === 'en' ? 'ru' : 'en';
//   body.addEventListener('keydown', (ev) => {
//     if (ev.code === 'AltLeft' || ev.code === 'AltRight') {
//       localStorage.setItem('language', togleLang);
//     }
//     body.childNodes[2].remove();
//     virtualKeyboard();
//   });
// }
// });

// console.log(capsLock);
// capsLock?.addEventListener('click', () => {
//   capsLock.classList.toggle('active');
//   language = RuABC;
// });
