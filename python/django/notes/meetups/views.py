from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    ret = HttpResponse("Hello")
    return ret

