from django.shortcuts import render
from django.views.generic.detail import DetailView

from cranes.models import Cranes

def index(request):
    return render(request, 'frontend/index.html')

class CranesDetailView(DetailView):
    model = Cranes
    template_name = 'frontend/index.html'