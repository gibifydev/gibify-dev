
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center p-4">
      <p><code className="ml-2"> &copy;{currentYear} thegibi</code></p>
    </footer>
  )
}