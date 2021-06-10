import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class ProjectService {
  async getProjects(url = 'api/projects') {
    const res = await api.get(url)
    logger.log('the projects', res.data)
    AppState.projects = res.data
  }

  setProject(projectId) {
    const project = AppState.projects.find(p => p.id === projectId)
    logger.log(project)
    AppState.activeProject = project
  }

  async createProject(newProject) {
    const res = await api.post('api/projects', newProject)
    logger.log('new project', res.data)
  }
}

export const projectService = new ProjectService()
