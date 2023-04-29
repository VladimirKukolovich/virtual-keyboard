type Key = {
  element: string, className: string, innerHtml?: string, data?: string, value?: string
};
export const createElement = ({
  element, className, innerHtml, data, value,
}: Key) => {
  const elem = document.createElement(element);
  elem.className = className;
  if (innerHtml) {
    elem.innerHTML = innerHtml;
  }
  if (data) {
    elem.dataset.keyCode = data;
  }
  if (value) {
    elem.dataset.value = value;
  }
  return elem;
};
