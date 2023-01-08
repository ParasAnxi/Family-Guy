import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="imga"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95e68a53-8780-44ea-81d9-5caf7e424dd2/d661mv9-ba3dd1bf-7e38-4fe6-8f91-32f6df801725.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1ZTY4YTUzLTg3ODAtNDRlYS04MWQ5LTVjYWY3ZTQyNGRkMlwvZDY2MW12OS1iYTNkZDFiZi03ZTM4LTRmZTYtOGY5MS0zMmY2ZGY4MDE3MjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6i6-QNlx6oCHxOtqXbQNmt0tNUonOvTyEcKuXhWCtpY"
        alt="logo"
      />

      <div className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Email</a></li>
          <li><a href="#">sign up</a></li>
        </ul>
      </div>

      <div className="signin">
      <i class="fa fa-user fa-3x"></i>
      </div>
    </div>
  );
}

export default Header;