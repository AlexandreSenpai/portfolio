from google.auth import credentials
from google.cloud import storage
from google.auth.credentials import Credentials

class CloudStorage:
  def __init__(self):
    self.client = storage.Client(project='alexandresenpai')

  def read(self, bucket_name, file_name):
    bucket = self.client.get_bucket(bucket_name)
    blob = bucket.blob(file_name)
    return blob.download_as_string()

if __name__ == '__main__':
  cloud_storage = CloudStorage()
  print(cloud_storage.read('alexandresenpai.appspot.com', 'posts/tradutor-automatico-de-mangas.md'))