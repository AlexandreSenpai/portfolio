from flask.wrappers import Request

from src.services.list_posts.DTO.posts_dto import PostsDTO
from .use_case import ListPostsUseCase

class ListPostsController:
    def __init__(self, list_posts_service: ListPostsUseCase):
        self.list_posts_service = list_posts_service

    def execute(self, request: Request) -> PostsDTO:
        return self.list_posts_service.execute()