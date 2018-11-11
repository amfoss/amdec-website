from django.shortcuts import render
from . import models

# Create your views here.
def projectlist(request):
     projects = models.project.objects.all()
     return render(request, 'project/list.html', {'projects': projects})
