const text: string[] = [];
let output = '';
const outputTextarea = (t:string[]) => t.filter((e) => e.length === 1).join('');
function textValue() {
//   console.log(text);
//   const { body } = document;
  const keyBoard: HTMLElement | null = document.querySelector('.keyboard');
  if (keyBoard) {
    keyBoard.addEventListener('keyup', (e) => {
      text.push(e.key);
      if (e.code === 'Backspace') {
        text.pop();
      }
      if (e.code === 'Enter') {
        text.push('/n');
      }
      const textArea = document.querySelector('.text');
      output = outputTextarea(text);
      textArea!.innerHTML = output;
    });
  }
}
export default textValue;
