export function setStorageItem(key: string, item: unknown) {
  window.localStorage.setItem(
    key,
    typeof item === 'string' ? item : JSON.stringify(item)
  );
}

export function getStorageItem<TReturn = string>(
  key: string,
  parse = false
): TReturn | null {
  const value = window.localStorage.getItem(key);
  return parse && value ? JSON.parse(value) : value;
}

export function clearStorage() {
  window.localStorage.clear();
}
