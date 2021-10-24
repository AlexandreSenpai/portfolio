from typing import Any, AsyncIterator, Coroutine

import firebase_admin
from firebase_admin import App
from firebase_admin.firestore import firestore
from firebase_admin import credentials
from google.cloud.firestore_v1.base_document import DocumentSnapshot

class FirestoreRepository:
    def __init__(self) -> None:
        try:
            self.client: App = firebase_admin.initialize_app(credentials.ApplicationDefault(), {
                'projectId': 'alexandresenpai'
            })
        except ValueError:
            self.client: App = firebase_admin.get_app()
    
        self.db = firestore.Client(credentials=self.client.credential.get_credential(), project=self.client.project_id)

    def read(self, collection: str, document: str) -> DocumentSnapshot:
        return self.db.collection(collection).document(document).get()
    
    def list(self, collection: str) -> AsyncIterator[DocumentSnapshot]:
        return self.db.collection(collection).stream()
    
    def create(self, collection: str, document: str, data: Any) -> Coroutine:
        return self.db.collection(collection).document(document).set(data)
    
    def update(self, collection: str, document: str, data: Any) -> Coroutine:
        return self.db.collection(collection).document(document).update(data)
    
    def delete(self, collection: str, document: str) -> Coroutine:
        return self.db.collection(collection).document(document).delete()
