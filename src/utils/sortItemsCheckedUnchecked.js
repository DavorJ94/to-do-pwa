export default function sortItemsCheckedUnchecked(items) {
  const checkedArray = items.filter((item) => item.checked === true);
  const uncheckedArray = items.filter((item) => item.checked === false);
  return [...checkedArray, ...uncheckedArray];
}
