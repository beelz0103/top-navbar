const turnOffDisplay = (elem) => {
  const elemStyle = elem.style;
  elemStyle.display = "none";
};

const turnOnDisplay = (elem) => {
  const elemStyle = elem.style;
  elemStyle.display = "block";
};

const dropDown = (menuElement, itemsElement) => {
  menuElement.addEventListener("mouseout", () => turnOffDisplay(itemsElement));
  menuElement.addEventListener("mouseover", () => turnOnDisplay(itemsElement));
  itemsElement.addEventListener("mouseout", () => turnOffDisplay(itemsElement));
  itemsElement.addEventListener("mouseover", () => turnOnDisplay(itemsElement));
};

export default dropDown;
