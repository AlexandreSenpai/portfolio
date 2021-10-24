from src.services.list_posts.DTO.posts_dto import Post, PostsDTO
from src.repositories.firestore_repository import FirestoreRepository

class ListPostsUseCase:
  def __init__(self, repository: FirestoreRepository):
    self.repository = repository
    
  def execute(self) -> PostsDTO:
    snapshots = self.repository.list(collection='posts')

    post_list = PostsDTO(posts=[])
    for doc in snapshots:
      post_list.posts.append(Post.from_json(json_object={'id': doc.id, **doc.to_dict()}))
      post_list.total_posts += 1

    return post_list