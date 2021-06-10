<template>
  <div v-if="activeProject.id" class="ProjectModal">
    <!-- Modal -->
    <div class="modal fade"
         id="projectModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content row bg-transparent border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title">
              {{ activeProject.title }}
            </h5>
            <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body row w-100">
            <div v-for="photo in allPhotos" :key="photo.id" class="col-6 px-1 my-1">
              <img :src="photo.imgUrl" class="img-fluid" alt="" srcset="">
            </div>
          </div>
          <div class="modal-footer border-0 col-6 ">
            <router-link :to="{name: 'ProfilePage', params:{ id: activeProject.creator.id}}" class="row align-items-center" data-dismiss="modal" :key="activeProject.creator.id">
              <div class="col-2">
                <img :src="activeProject.creator.picture" class="img-fluid rounded-pill" alt="" srcset="">
              </div>
              <div class="col-10">
                {{ activeProject.creator.name }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'ProjectModal',
  setup() {
    const state = reactive({
    })
    return {
      state,
      activeProject: computed(() => AppState.activeProject),
      allPhotos: computed(() => {
        if (AppState.activeProject.photos) {
          return [AppState.activeProject, ...AppState.activeProject.photos]
        }
        return []
      })
    }
  }
}
</script>

<style lang='scss'>

.modal-backdrop.show{
  opacity: 1!important;
  background: var(--fade);
  backdrop-filter: blur(20px) brightness(.3) contrast(.8);
}

.modal-body{
  height: 70vh;
  overflow-y: auto;
}

</style>
