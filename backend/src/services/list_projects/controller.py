from src.services.list_projects.DTO.projects_dto import ProjectsDTO
from .use_case import ListProjectsUseCase

class ListProjectsController:
    def __init__(self, list_projects_service: ListProjectsUseCase):
        self.list_projects_service = list_projects_service

    def execute(self) -> ProjectsDTO:
        return self.list_projects_service.execute()