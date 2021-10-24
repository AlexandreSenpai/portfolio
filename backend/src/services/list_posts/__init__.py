from .controller import ListPostsController
from .use_case import ListPostsUseCase
from src.repositories.firestore_repository import FirestoreRepository

repo = FirestoreRepository()
list_posts_use_case = ListPostsUseCase(repository=repo)
list_posts_controller = ListPostsController(list_posts_service=list_posts_use_case)