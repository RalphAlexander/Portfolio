// Return the Footer component which renders the footer of the page
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <footer>
        © {year} Ralph Alexander
      </footer>
    </div>
  )
}
