import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt=""  className="icon"/>
        <img src="expand.svg" alt=""  className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt=""  className="icon"/>
          <span>1</span>
        </div>
        <div className="user">
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" alt="" />
          <span>Yogesh</span>
        </div>
        <img className="icon" src="settings.svg" alt="" />

      </div>
    </div>
  )
}

export default Navbar