<template>
  <div class="flex items-center justify-center h-96">
    <div class="bg-white p-8 rounded shadow-inner w-96">
      <h1 class="text-2xl text-center font-semibold mb-4">Login Page</h1>
      <div class="flex flex-col gap-4">
        <input
          type="text"
          required
          v-model="username"
          class="border p-2 rounded"
          placeholder="Username"
        />
        <input
          type="password"
          required
          v-model="password"
          class="border p-2 rounded"
          placeholder="Password"
        />
        <button
          @click="onLogin2"
          :disabled="!isFormValid"
          class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const auth = useAuthStore();
const username = ref("");
const password = ref("");
const router = useRouter();

const onLogin = async () => {
  const response = await axios.post('http://localhost:3000/login', {
    username: username.value,
    password: password.value,
  })

  console.log(response)
};

// Check if both username and password are not empty
const isFormValid = () => {
  return username.value.trim() !== "" && password.value.trim() !== "";
};

const onLogin2 = () => {
  if (isFormValid()) {
    auth.login(username.value, password.value); // Memanggil fungsi login dengan username dan password
    router.push("/");
  } else {
    // Handle percobaan login yang tidak valid, misalnya menampilkan pesan kesalahan
    alert("Please enter username and password");
  }
};

</script>
