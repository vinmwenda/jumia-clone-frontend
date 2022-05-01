export function loadState(name) {
  try {
    const serializedState = localStorage.getItem(name);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
let s = [];
//let saved =;
if (loadState("cart")) {
  s = loadState("cart");
}

export function saveState(name, state) {
  //s = loadState("cart");
  const serializedState = JSON.stringify([...s, ...state]);

  localStorage.setItem(name, serializedState);
}
