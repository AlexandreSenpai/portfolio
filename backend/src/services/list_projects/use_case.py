from src.services.list_projects.DTO.projects_dto import Project, ProjectsDTO
from src.repositories.firestore_repository import FirestoreRepository

class ListProjectsUseCase:
  def __init__(self, repository: FirestoreRepository):
    self.repository = repository
    
  def execute(self) -> ProjectsDTO:
    snapshots = self.repository.list(collection='projects')

    projects_list = ProjectsDTO(projects=[])
    for doc in snapshots:
      projects_list.projects.append(Project.from_json(json_object={'id': doc.id, **doc.to_dict()}))
      projects_list.total_projects += 1

    return projects_list