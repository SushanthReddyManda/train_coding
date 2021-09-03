from django.urls import path
from . import views

app_name = 'database'

urlpatterns = [
    path('update/', views.update),
    path('update2/', views.update2),
]

