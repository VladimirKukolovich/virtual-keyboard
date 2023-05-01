import { createElement } from '../../js/createElement';
import {
  ABC, Abc, RuAbc, RuABC,
} from './state';

const { body } = document;
let language = Abc;
let output = '';
let text: string[] = [];
const outputTextarea = (t:string[]) => t.filter((x) => x.length === 1 || x === '\u000A'
|| x === '<br>' || x === '\u00A0\u00A0\u00A0\u00A0').join('');
export const virtualKeyboard = () => {
  const currentCase = localStorage.getItem('case');
  const currentLanguage = localStorage.getItem('language') || 'en';
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
};

body.addEventListener('keydown', (e) => {
  const textArea = document.querySelector('.text');
  const newText = () => {
    text = output.split('');
    textArea!.innerHTML = output;
  };
  const brText = () => {
    if (text.length === 106 || (text.length - 106) % 110 === 0) {
      text.push('<br>');
      output = outputTextarea(text);
      newText();
    }
  };

  if (e.code === 'Backspace' && output.length > 0) {
    if (output.slice(-1) === '>') {
      output = outputTextarea(text).slice(0, -3);
      newText();
    }
    output = outputTextarea(text).slice(0, -1);
    newText();
  }
  if (e.code !== 'Backspace' && e.code !== 'Space' && e.code !== 'Enter'
   && e.code !== 'Tab') {
    text.push(e.key);
    output = outputTextarea(text);
    newText();
    brText();
  }
  if (e.code === 'Tab') {
    text.push('\u00A0\u00A0\u00A0\u00A0');
    output = outputTextarea(text);
    newText();
  }
  if (e.code === 'Enter') {
    text.push('<br>');
    output = outputTextarea(text);
    newText();
  }
  if (e.code === 'Space') {
    text.push('\u00A0');
    output = outputTextarea(text);
    newText();
  }
  const currentLanguage = localStorage.getItem('language') || 'en';
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    body.addEventListener('keydown', (event) => {
      const togleLang = currentLanguage === 'en' ? 'ru' : 'en';
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        const oldKeyBoard = document.querySelector('.keyboard');
        localStorage.setItem('language', togleLang);
        oldKeyBoard?.remove();
        virtualKeyboard();
      }
    });
  }

  if (e.code === 'CapsLock') {
    const oldKeyBoard = document.querySelector('.keyboard');
    const currentCase = localStorage.getItem('case') || 'lowerCase';
    const togleCase = currentCase === 'lowerCase' ? 'upperCase' : 'lowerCase';
    localStorage.setItem('case', togleCase);
    oldKeyBoard?.remove();
    virtualKeyboard();
  }
});

body.addEventListener('click', (e: MouseEvent) => {
  const code = (e.target as HTMLElement);
  if (code.classList[0] === 'button') {
    const oldKeyBoard = document.querySelector('.keyboard');

    if (code.innerHTML === 'Caps Lock') {
      const currentCase = localStorage.getItem('case') || 'lowerCase';
      const togleCase = currentCase === 'lowerCase' ? 'upperCase' : 'lowerCase';
      localStorage.setItem('case', togleCase);
      oldKeyBoard?.remove();
      virtualKeyboard();
    }
    const textArea = document.querySelector('.text');
    const newText = () => {
      text = output.split('');
      textArea!.innerHTML = output;
    };
    const brText = () => {
      if (text.length === 106 || (text.length - 106) % 110 === 0) {
        text.push('<br>');
        output = outputTextarea(text);
        newText();
      }
    };

    if (code.innerHTML === 'Backspace' && output.length > 0) {
      if (output.slice(-1) === '>') {
        output = outputTextarea(text).slice(0, -3);
        newText();
      }
      output = outputTextarea(text).slice(0, -1);
      newText();
    }
    if (code.innerHTML !== 'Backspace' && code.innerHTML !== 'Space' && code.innerHTML !== 'Enter'
     && code.innerHTML !== 'Tab') {
      text.push(code.innerHTML);
      output = outputTextarea(text);
      newText();
      brText();
    }
    if (code.innerHTML === 'Tab') {
      text.push('\u00A0\u00A0\u00A0\u00A0');
      output = outputTextarea(text);
      newText();
    }
    if (code.innerHTML === 'Enter') {
      text.push('<br>');
      output = outputTextarea(text);
      newText();
    }
    if (code.innerHTML === 'Space') {
      text.push('\u00A0');
      output = outputTextarea(text);
      newText();
    }
  }
});
