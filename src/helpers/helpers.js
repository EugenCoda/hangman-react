export function show(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
