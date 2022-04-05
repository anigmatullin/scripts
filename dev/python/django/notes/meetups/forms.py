from django import forms
from django.core.exceptions import ValidationError

from .models import Tag


class RegForm(forms.Form):
    template_name = 'meetups/form_sample.html'
    name = forms.CharField(label='Your Name', max_length=4)
    sender = forms.EmailField(label='Your email address')

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get("name")
        sender = cleaned_data.get("sender")

        if sender == 'dont@example.com':
            raise ValidationError("do not do this!")
    
    def clean_name(self):
        # raise ValidationError("hm - I don't like this!", code='invalid')
        return self.cleaned_data['name']
    
    def clean_sender(self):
        # raise ValidationError("hm - I don't like this!")
        return self.cleaned_data['sender']

