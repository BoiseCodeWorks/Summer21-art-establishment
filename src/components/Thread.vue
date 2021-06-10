<template>
  <div class="row justify-content-center pt-4">
    <div class="col-8">
      <!-- {{projects.forEach(p => p.Template)}} -->
      <Project v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped>

</style>
