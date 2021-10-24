from dataclasses import asdict, dataclass
from typing import List

@dataclass
class Post:
  id: str
  title: str
  created_at: str
  updated_at: str
  tags: List[str]
  thumbnail: str
  author: str
  description: str

  @classmethod
  def from_json(cls, json_object: dict):
      args = {"id": json_object.get('id'),
              "title": json_object.get('title'),
              "created_at": json_object.get('created_at'),
              "updated_at": json_object.get('updated_at'),
              "tags": json_object.get('tags'),
              "thumbnail": json_object.get('thumbnail'),
              "author": json_object.get('author'),
              "description": json_object.get('description')}
      
      return cls(*args.values())

@dataclass
class PostsDTO:
  posts: List[Post]
  total_posts: int = 0

  def to_dict(self):
    return asdict(self)
