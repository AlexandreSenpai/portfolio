from .controller import ListProjectsController
from .use_case import ListProjectsUseCase
from src.repositories.firestore_repository import FirestoreRepository

repo = FirestoreRepository()
list_projects_use_case = ListProjectsUseCase(repository=repo)
list_projects_controller = ListProjectsController(list_projects_service=list_projects_use_case)