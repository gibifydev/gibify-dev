
export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="flex items-center justify-center p-4">
      <p> &copy;{copyrightDate} <code className="ml-4">Gibify Dev</code></p>
    </footer>
  )
}