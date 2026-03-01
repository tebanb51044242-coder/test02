import { UserProfile } from "../componentes/UserProfile/UserProfile";
import type { User } from "../componentes/UserProfile/types";

const user: User = {
  name: "Pablo Victor",
  branch: "Reparto",
  email: "usuariodeprueb@gmail.com",
  phone: "123",
  registeredAt: "04-10-2024",
  birthDate: "21-07-2004",
  gender: "Masculino",
  goal: "Incremento de masa muscular",
  active: true,
  tag: "Prueba",
};

export const ProfilePage = () => {
  return <UserProfile user={user} />;
};