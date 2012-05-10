__author__ = 'leshiy'
from django.conf.urls import *
from piston.resource import Resource
from ClientSirena.api.handlers import PeopleHandler,Nodes

people_resource = Resource(PeopleHandler)
nodes_resource = Resource(Nodes)

urlpatterns = patterns('',
    url(r'^tasks/(?P<id>\d+)$', people_resource),
    url(r'^tasks$', people_resource),
    url(r'^tree$',nodes_resource)
)
