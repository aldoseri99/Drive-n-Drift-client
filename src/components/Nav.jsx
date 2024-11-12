const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="btn btn-dark" href="/">
        Home
      </a>
      <a className="btn btn-dark" href="/addvehicle">
        Add Vehicle
      </a>

      <a className="btn btn-dark" href="/addcategory">
        Add Category
      </a>

      <a className="btn btn-dark" href="/viewcategories">
        View All Categories
      </a>

      <a className="btn btn-dark" href="/viewvehicles">

        View All Vehicles
      </a>
      <a className="btn btn-dark" href="/addinsurance">
        Add Insurance
      </a>
      <a className="btn btn-dark" href="/register">
        Register
      </a>
      <a className="btn btn-dark" href="/signIn">
        SignIn
      </a>
    </nav>
  )
}

export default Nav
