import { Navigate } from "react-router-dom";
import { useUsers } from "./contexts/User";

const App = ({ element }) => {
  const { user, loading } = useUsers();
  if (loading) {
    return (
      <div className="bg-primary flex flex-col gap-10 justify-center items-center h-screen">
        <div className="absolute top-5 left-10 text-4xl font-bold text-white">
          Regio
        </div>
        <img
          className="w-14 animate-bounce "
          src="/images/logo.png"
          alt="logo"
        />
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/register" replace />;
  }

  return element;
};

export default App;
