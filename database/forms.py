from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms.utils import ValidationError

class SheetForm(forms.Form):
    file = forms.FileField()