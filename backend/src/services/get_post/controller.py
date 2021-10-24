from flask.wrappers import Request

from .DTO.posts_dto import PostDTO
from .use_case import GetPostUseCase

class GetPostController:
    def __init__(self, get_post_service: GetPostUseCase):
        self.get_post_service = get_post_service

    def execute(self, post_id: str) -> PostDTO:
        return self.get_post_service.execute(post_id=post_id)