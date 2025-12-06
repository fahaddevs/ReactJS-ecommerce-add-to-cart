export default function Nav (props) {
  return (
    <div className="bg-gray-800 text-white">
      <nav className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <a href="/" className="text-2xl">Ecommerce</a>
        <div className="ml-10 inline-block">Cart: <span>{props.totalAddCart}</span></div>
      </nav>
    </div>
  )
}