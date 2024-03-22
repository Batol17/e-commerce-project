<template>    
    <div class="layout">
     <v-layout>
        <v-main>
            <slot>
                
            </slot>
        </v-main>
        <SideBar />
        <AppNav />
        <AppFooter />
     </v-layout>
    </div>
</template>
<script setup>

import AppNav from './AppNav.vue';
import AppFooter from './AppFooter.vue';
import SideBar from './SideBar.vue';
  


</script>