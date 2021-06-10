<template>
  <div class="ProfilePage container-fluid">
    <div class="row mt-3">
      <div class="col-8">
        <CreateProject v-if="account.id == $route.params.id" />
        <Thread />
      </div>
      <div class="col-4 p-3">
        <Profile />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted, watchEffect } from 'vue'
import { profileService } from '../services/ProfileService'
import { useRoute, useRouter } from 'vue-router'
import { projectService } from '../services/ProjectService'
import Notification from '../utils/Notification'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({ })
    watchEffect(async() => {
      try {
        await profileService.getProfile(route.params.id)
        await projectService.getProjects('api/projects?creatorId=' + route.params.id)
      } catch (error) {
        Notification.toast('this user does not exist', 'warning', 'center')
        router.push({ name: 'Home' })
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>

</style>
