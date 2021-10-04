export default function sortItemsCheckedUnchecked(items) {
  const uncheckedArray = items.filter((item) => item.checked === false);
  uncheckedArray.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    else return -1;
  });
  const checkedArray = items.filter((item) => item.checked === true);

  return [...checkedArray, ...uncheckedArray];
}
