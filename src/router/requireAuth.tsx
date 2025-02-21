import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  roles: string[]; // Liste des rôles requis pour accéder à la route.
}

export default function RequireAuth({ roles }: Props) {
  const location = useLocation();

  // Récupérer les données de l'utilisateur depuis localStorage
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // Log l'utilisateur et l'état actuel
  console.log("Utilisateur actuel :", user?.token);
  console.log("Rôles requis :", roles);
  console.log("Emplacement actuel :", location);

  // Vérification si l'utilisateur est connecté
  if (!user || !user.token) {
    console.log("L'utilisateur n'est pas authentifié.");
    toast.error("Vous n'êtes pas authentifié.");
    return <Navigate to="/connexion" state={{ from: location }} />;
  }

  // Vérification si l'utilisateur a une adresse email enregistrée dans la base de données
  if (!user.email) {
    console.log("L'utilisateur n'a pas d'email valide.");
    toast.error("Vous n'avez pas d'email valide.");
    return <Navigate to="/register" />;
  }

  // Vérification des rôles requis
  if (roles && !roles.some((r) => user.roles?.includes(r))) {
    console.log(
      "L'utilisateur n'a pas les rôles requis. Rôles de l'utilisateur :",
      user.roles
    );
    toast.error("Vous n'avez pas l'autorisation pour accéder à cette page.");
    return <Navigate to="/" />;
  }

  // Si l'utilisateur est connecté, a un email et possède un des rôles requis, afficher le contenu protégé
  console.log("L'utilisateur est authentifié et autorisé. Affichage du contenu.");
  return <Outlet />;
}
