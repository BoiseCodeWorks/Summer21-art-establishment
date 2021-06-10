<template>
  <div class="CreateProject row border p-2 mb-3">
    <form @submit.prevent="createProject">
      <input type="text" v-model="state.newProject.title" placeholder="title">
      <input type="text" v-model="state.newProject.imgUrl" placeholder="imgUrl">
      <button class="btn btn-primary">
        create project
      </button>
    </form>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { projectService } from '../services/ProjectService'
import Notification from '../utils/Notification'
export default {
  name: 'CreateProject',
  setup() {
    const state = reactive({
      newProject: {}
    })
    return {
      state,
      async createProject() {
        try {
          await projectService.createProject(state.newProject)
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
