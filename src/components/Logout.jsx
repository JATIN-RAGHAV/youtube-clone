import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('nekoTssel-PTO');
        navigate('/');
        window.location.reload();
    }

  return (
    <button onClick={handleLogout}>
        Logout
    </button>
  );
};

export default Logout;
