from django.contrib import admin

# Register your models here.


from . import models


class NotesAdmin(admin.ModelAdmin):
    list_display = ('subject',)
    list_filter = ('subject',)


admin.site.register(models.Note, NotesAdmin)
admin.site.register(models.Author)
admin.site.register(models.Tag)
