import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthProvider";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from || "/";
  const [loading, { toggle }] = useDisclosure();

  const onSubmit = () => {
    toggle();
    auth.signIn(form.getValues().login, () => {
      navigate(from, {
        replace: true,
      });
    });
  };

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    initialValues: {
      login: "",
      password: "",
    },

    validate: {
      login: (value) => (!value ? "Обязательное поле" : null),
      password: (value) =>
        !value
          ? "Обязательное поле"
          : value.length < 8
          ? "Длина пароля менее 8 символов"
          : null,
    },
  });

  return (
    <>
      <h1>Войти</h1>
      <form
        className="form"
        onSubmit={form.onSubmit((values) => onSubmit(values))}
      >
        <TextInput
          withAsterisk
          size="xl"
          label="Логин"
          placeholder="Введите логин"
          key={form.key("login")}
          {...form.getInputProps("login")}
        />
        <PasswordInput
          withAsterisk
          size="xl"
          label="Пароль"
          placeholder="Введите пароль"
          description="Длина пароля от 8 символов"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button
          type="submit"
          mt="md"
          color="yellow"
          radius="md"
          size="lg"
          loading={loading}
          disabled={loading}
        >
          Отправить
        </Button>
      </form>
    </>
  );
}
