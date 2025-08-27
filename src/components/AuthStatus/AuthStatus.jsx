import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthProvider";
import { Button } from "@mantine/core";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const onSingOut = () => {
    auth.signOut(() => navigate("/"));
  };

  if (auth.user === null) {
    return <NavLink to="/login" className="auth-btn">Авторизоваться</NavLink>;
  }

  return (
    <div className="user">
      <div className="user__name">{auth.user}</div>
      <Button onClick={onSingOut} color="yellow" radius="md" size="md">
        Выйти
      </Button>
    </div>
  );
}
