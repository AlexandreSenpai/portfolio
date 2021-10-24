from dataclasses import asdict, dataclass
from typing import List

@dataclass
class PostDTO:
  id: str
  title: str
  content: str
  created_at: str
  tags: List[str]

  @classmethod
  def from_json(cls, json_object: dict):
      args = {"id": json_object.get('id'),
              "title": json_object.get('title'),
              "content": json_object.get('content'),
              "created_at": json_object.get('created_at'),
              "tags": json_object.get('tags')}
      
      return cls(*args.values())

  def to_dict(self):
    return asdict(self)


