type Key = {
  element: string, className: string, innerHtml?: string, data?: string
};
export const createElement = ({
  element, className, innerHtml, data,
}: Key) => {
  const elem = document.createElement(element);
  elem.className = className;
  if (innerHtml) {
    elem.innerHTML = innerHtml;
  }
  if (data) {
    elem.dataset.keyCode = data;
  }
  return elem;
};
