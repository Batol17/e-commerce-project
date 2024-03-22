<template>
    <v-navigation-drawer v-model="drawer" class="rounded-e-xl me-4" style="background-color: var(--main-color);">
      <v-sheet class="pa-4 rounded-te-xl my-5 mx-3 text-center" style="border-radius: 50%;">
          <img src="@/assets/images/logo.jpg" alt="" class="w-50">
      </v-sheet>
      <v-list>
      <v-list-item class="my-3">
        <router-link to="/" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">Dashboard</span>
        </router-link>
      </v-list-item>
      <v-list-item class="my-3">
        <router-link to="/users" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">USERS</span>
        </router-link>
      </v-list-item>
      <v-list-item class="my-3">
        <router-link to="/projects" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">PROJECTS</span>
        </router-link>
      </v-list-item>
      <v-list-item class="my-3">
        <router-link to="/services" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">SERVICES</span>
        </router-link>
      </v-list-item>
      <v-list-item class="my-3">
        <router-link to="/contact-us" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">CONTACT US</span>
        </router-link>
      </v-list-item>
      <v-list-item class="my-3">
        <router-link to="/solutions" class="button">
          <span>
            <v-icon>home</v-icon>
          </span>
          <span class="text">Solutions</span>
        </router-link>
      </v-list-item>
      </v-list>     
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from "vue";

  const drawer = ref(null);
  </script> 
  <style >
  .button{
    text-decoration: none;
    color: white;
  }

  
</style>