from django.db import models


class tag(models.Model):
    name = models.CharField(max_length=200, verbose_name='Project Name')
    colour = models.CharField(max_length=10, default=None, blank=True, null=True, verbose_name='Colour (HEX with #)')
    class meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"

    def __str__(self):
        return self.name


class project(models.Model):

    name = models.CharField(max_length=200, verbose_name='Project Name')
    author = models.CharField(max_length=200, verbose_name='Author Username')
    url =  models.URLField(max_length=200, verbose_name='Project Repository URL')
    irc =  models.URLField(max_length=200, verbose_name='Chat URL')
    description = models.TextField(max_length=200)
    tags = models.ManyToManyField(tag, related_name = 'tag', verbose_name='Project Tag')

    class meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.name
