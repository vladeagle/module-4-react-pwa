import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthProvider";
import { Button } from "@mantine/core";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const onSingOut = () => {
    auth.signOut(() => navigate("/"));
  };

  if (auth.user === null) {
    return (
      <Button href="/login" component="a" color="yellow" radius="md" size="md">
        Авторизоваться
      </Button>
    );
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
