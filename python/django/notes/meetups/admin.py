from django.contrib import admin

# Register your models here.


from . import models


class NotesAdmin(admin.ModelAdmin):
    list_display = ('subject', 'owner')
    list_filter = ('subject', 'owner')


admin.site.register(models.Note, NotesAdmin)
admin.site.register(models.Author)
