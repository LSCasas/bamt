import { toast } from "react-toastify";

const API_URL = "https://sasc-api-2.onrender.com";

// DEVELOPMENT:  //http://localhost:5000
// TESTING: //https://sasc-api-2.onrender.com

// LOGIN
export async function login(data) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const json = await res.json();

    if (!json.success) {
      throw new Error(json.message);
    }

    return json.data;
  } catch (error) {
    toast.error(error.message || "Error al iniciar sesión");
    throw error;
  }
}

// SELECTED SEDE
export async function selectCampus(campusId) {
  try {
    const response = await fetch(`${API_URL}/auth/select-campus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ selectedCampusId: campusId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error desconocido en selectCampus");
    }

    return data.data;
  } catch (error) {
    console.error("Error en la respuesta de selectCampus:", error);
    throw error;
  }
}

// LOGOUT
export async function logout() {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al cerrar sesión");
    }

    return data;
  } catch (error) {
    console.error("Error en logout:", error);
    throw error;
  }
}
