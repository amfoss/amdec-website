from django.conf.urls import url
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url('projects', views.projectlist, name="projects"),
]
