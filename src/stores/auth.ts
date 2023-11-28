import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const username = ref("");
  const password = ref("");

  const login = (name: string, pass: string) => {
    if (name === "dedad_fajar" && pass === "987654321") {
      username.value = name;
      password.value = pass;
    } else {
      // Handle kesalahan autentikasi, tampilkan alert dan tetap arahkan ke halaman login
      alert("Invalid username or password. Please enter the correct credentials.");
      // Atau Anda dapat menggunakan console.error untuk memberi tahu kesalahan pada konsol
      // console.error("Invalid username or password");
    }
  };

  const logout = () => {
    username.value = "";
    password.value = "";
  };

  return { username, password, login, logout };
});