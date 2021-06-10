<template>
  <div class="home container-fluid ">
    <Thread />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Thread from '../components/Thread.vue'
import Notification from '../utils/Notification'
import { projectService } from '../services/ProjectService'
export default {
  components: { Thread },
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        projectService.getProjects()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>
