

const Logout = () => {
    // localStorage.removeItem("id");
    window.localStorage.removeItem('id');
    window.location.href="/";
  };
export default Logout;