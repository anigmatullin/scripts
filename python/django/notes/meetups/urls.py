from django.urls import path, include

from . import views

urlpatterns = [
    path('demo/', views.index),
    path('', views.index),
    path('register', views.register),
    path('accounts/', include('django.contrib.auth.urls'))
]
