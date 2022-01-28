from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login

from django.utils.translation import activate

from .models import Note, Tag
from .forms import RegForm

# Create your views here.


def index(request):
    # ret = HttpResponse("Hello")
    notes = Note.objects.all()
    activate('ru')

    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        regform = RegForm(request.POST)
        # check whether it's valid:
        if regform.is_valid():
            name = regform.cleaned_data['name']
            sender = regform.cleaned_data['sender']
            print(name)
            print(sender)
            v1 = Tag(name=name)
            v1.save()
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        regform = RegForm()

    print(regform.is_bound )
    return render(request, 'meetups/index.html', {'notes': notes, 'form': regform})


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')
        else:
            context = {'form': form}
            return render(request, 'registration/register.html', context)  
    else:
        form = UserCreationForm()
        context = {'form': form}
        return render(request, 'registration/register.html', context)
