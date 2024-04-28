import {  NavLink } from "react-router-dom"

const Nav = ()=>{

      //? Link ve a tagi
// Single page application uygulamarında temel mantık aynı sayfada sayfa yenilenmeden istenilen komponentin sayfaya çağırılmasıdır.
// SPA da projenin navigasyonunda gezerken her linke tıklandığında sayfanın kendini yenilemesi durumu varsa bu bir problemdir. Bunun nedeni ise linke tıklandığında çağırılan komponentin
// <a href="/path"></a> şeklinde çağırılmış olmasıdır. a tagi servera istek attığı için sayfayı yeniler.
// Eğer a etiketi yerine react-router-dom elementi olan Link componenti kullanılırsa
// <Link to="/path"></Link>
// sayfa yenileme problemi ortadan kalkacaktır. Artık reload işlemi olmadan gezinme yapılabilecektir.
// Bu kullanım sadece React özelinde değil diğer SPA uygulamarı içinde geçerlidir.

   return (
    <ul className="bg-dark text-warning">
      <li>
         <NavLink to="/">Home</NavLink>
      </li>
      <li>
         {/* <NavLink style={({isActive})=>({color: isActive && "red"})} to="/instructors">Instructors</NavLink> */}
         <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
         <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
   )
}

export default Nav