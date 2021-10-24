from dataclasses import asdict, dataclass
from typing import List

@dataclass
class Post:
  id: str
  title: str
  content: str
  created_at: str
  tags: List[str]
  thumbnail: str
  description: str

  @classmethod
  def from_json(cls, json_object: dict):
      args = {"id": json_object.get('id'),
              "title": json_object.get('title'),
              "content": json_object.get('content'),
              "created_at": json_object.get('created_at'),
              "tags": json_object.get('tags'),
              "thumbnail": json_object.get('thumbnail'),
              "description": json_object.get('description')}
      
      return cls(*args.values())

@dataclass
class PostsDTO:
  posts: List[Post]
  total_posts: int = 0

  def to_dict(self):
    return asdict(self)
