const LogoName = () => {
  return <h1 className="logo">Kart Cart</h1>;
};

const SearchBar = () => {
  return (
    <div>
      <input type="search" name="searchbar" className="search-bar" />
    </div>
  );
};

const Account = () => {
  return (
    <div className="account">
      <p>Account</p>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="cart">
      <p>Cart</p>
    </div>
  );
};

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <LogoName />
      <SearchBar />
      <Account />
      <Cart />
    </div>
  );
};

export default NavigationBar;
