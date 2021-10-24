from .controller import GetPostController
from .use_case import GetPostUseCase
from src.repositories.firestore_repository import FirestoreRepository

repo = FirestoreRepository()
get_post_use_case = GetPostUseCase(repository=repo)
get_post_controller = GetPostController(get_post_service=get_post_use_case)