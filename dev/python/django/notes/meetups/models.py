from django.db import models

# Create your models here.


class Author(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        res = f'{self.name}'
        return res


class Note(models.Model):
    objects = models.Manager()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    content = models.TextField(default=None, blank=True, null=True)
    image = models.ImageField(default=None, blank=True, null=True, upload_to='images')
    taglist = models.ManyToManyField(Tag, blank=True)

    def __str__(self) -> str:
        ret = f'{self.subject}'
        return ret
