<template>
  <div class="Profile row bg-fade border justify-content-center p-3">
    <div class="col-8">
      <img :src="activeProfile.picture" class="img-fluid rounded-circle" alt="" srcset="">
    </div>
    <h4 class="col-12 text-center text-primary">
      {{ activeProfile.name }}
    </h4>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => {
    })
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>

</style>
