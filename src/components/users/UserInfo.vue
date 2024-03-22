<template>
  <div class=" my-5">
      
      <VForm @submit.prevent="() => {}">
      <VRow>
        <!-- 👉 Full Name -->
        <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Full Name <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
    
           <!-- 👉 Email -->
        <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
        
        <!-- 👉 Phone Number -->
        <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Phone Number <span class="text-danger">*</span></label>
        <vue-tel-input class="bg-white py-1" style="border-radius: 14px;"></vue-tel-input>
        </VCol>
           <!-- 👉 Address -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Address <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
           <!-- 👉 Country -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Country <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
           <!-- 👉 Email -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Email </label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
           <!-- 👉 Email -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Email</label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
           <!-- 👉 Email -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Email </label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
           <!-- 👉 Email -->
           <VCol
          cols="12"
          md="4"
        >
        <label for="" class="col-form-label col-form-label-lg">Email</label>
        <input type="text" class="form-control form-control-lg">
        </VCol>
         <VCol
          cols="12"
          class="d-flex gap-2 justify-content-center"
        >
          <VBtn type="submit" class="col-4 bg-success">
            Submit
          </VBtn>
          </VCol>

      </VRow>
    </VForm>
  </div>
</template>
<script setup>




</script>