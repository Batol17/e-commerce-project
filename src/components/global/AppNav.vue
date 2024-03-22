<template>
    <div class="nav-bar " style="top: 40px;">
        <v-app-bar>
            <v-container fluid>
                <v-row class="d-flex justify-space-between align-item-center">
                    <v-col cols="7" >
                        <input type="search"
                         name="navSearch"
                         id="navSearch"
                         style=" border-radius: 16px; outline: none;background-color:#f9f7f7;height: 40px;"
                         placeholder="search"
                         class="w-100 ps-2">

                    </v-col>
                    <v-col cols="2" class="my-2">
                       <v-icon>mdi-wechat</v-icon>
                       <v-icon>mdi-bell-badge</v-icon>
                    </v-col>
                    

                </v-row>
                
            </v-container>
          
        </v-app-bar>
    </div>
</template>

<script setup>

</script>