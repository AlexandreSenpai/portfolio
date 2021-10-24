from dataclasses import asdict, dataclass
from typing import List

@dataclass
class Project:
  id: str
  title: str
  status: str
  created_at: str
  languages: List[str]
  code_url: str
  post_url: str
  thumbnail: str
  
  @classmethod
  def from_json(cls, json_object: dict):
    args = {"id": json_object.get('id'),
            "title": json_object.get('title'),
            "status": json_object.get('status'),
            "created_at": json_object.get('created_at'),
            "languages": json_object.get('languages'),
            "code_url": json_object.get('code_url'),
            "post_url": json_object.get('post_url'),
            "thumbnail": json_object.get('thumbnail')}
    
    return cls(*args.values())

@dataclass
class ProjectsDTO:
  projects: List[Project]
  total_projects: int = 0

  def to_dict(self):
    return asdict(self)
