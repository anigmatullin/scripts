from django.shortcuts import render
from django.http import HttpResponse

from .models import Note

# Create your views here.


def index(request):
    # ret = HttpResponse("Hello")
    notes = Note.objects.all()

    return render(request, 'meetups/index.html', {'notes': notes})
