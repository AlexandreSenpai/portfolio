from src.services.get_post.DTO.posts_dto import PostDTO
from src.repositories.firestore_repository import FirestoreRepository

class GetPostUseCase:
  def __init__(self, repository: FirestoreRepository):
    self.repository = repository
    
  def execute(self, post_id: str) -> PostDTO:
    post = self.repository.read(collection='posts', document=post_id).to_dict()
    if post:
      return PostDTO.from_json({'id': post_id, **post})
    else:
      return PostDTO(id='', title='', content='', created_at='', tags=[])