__author__ = 'leshiy'
from django.conf.urls import *
from piston.resource import Resource
from ClientSirena.api.handlers import PeopleHandler

people_resource = Resource(PeopleHandler)

urlpatterns = patterns('',
    url(r'^tasks/(?P<id>\d+)$', people_resource),
    url(r'^tasks$', people_resource),
)
