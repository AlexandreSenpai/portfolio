from flask import Flask, request, abort

from .services.list_posts import list_posts_controller
from .services.get_post import get_post_controller
from .services.list_projects import list_projects_controller

app = Flask(__name__)

@app.route('/posts', methods=['GET'])
def list_posts():
    return list_posts_controller.execute(request=request).to_dict(), 200

@app.route('/projects', methods=['GET'])
def list_projects():
    return list_projects_controller.execute().to_dict(), 200

@app.route('/posts/<post_id>', methods=['GET'])
def get_post(post_id: str):
    post = get_post_controller.execute(post_id=post_id)
    if(post.id != ''):
        return post.to_dict(), 200
    else:
        return {
            'error': 'post not found'
        }, 404