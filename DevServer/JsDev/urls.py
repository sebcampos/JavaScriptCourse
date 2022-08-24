from django.urls import path
from . import views

urlpatterns = \
[
    path("", views.landing_page, name="landing_page"),
    path("hw2", views.hw2, name="hw2"),
    path("hw3", views.hw3, name="hw3"),
    path("hw4", views.hw4, name="hw4"),
    path("hw5", views.hw5, name="hw5"),
    path("hw6", views.hw6, name="hw6"),
    path("hw7", views.hw7, name="hw7"),
    path("hw8", views.hw8, name="hw8"),
]