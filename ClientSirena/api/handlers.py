__author__ = 'leshiy'
from piston.handler import BaseHandler
from BP.models import People
import simplejson

class Nodes(BaseHandler):
    allowed_methods = ('GET',)

    def read(self,request):
        print "nodes"
        data ={"success": "true", "children": [ { "id": "1", "title": "Phil", "leaf": "true" },  { "id": "2", "title": "Nico", "expanded": "true", "children": [{ "id": "3", "title": "Mitchell", "leaf": "true" }]}, { "id": "4", "title": "Sue", "loaded": "true" }]}
        return data

class PeopleHandler(BaseHandler):
    allowed_methods = ('GET',)
    model = People


    def read(self, request):
        print "PeopleHandler.read"
        start = 0
        limit = 10
        page = 1

        if request.method == "GET":
            start = request.GET['start']
            limit = request.GET['limit']

        d = []
        print start
        print limit
        for r in People.objects.all()[start:int(start) + int(limit)]:
            d.append(
                    {'lastName': r.lastName, 'firstName': r.firstName, 'middleName': r.middleName, 'company': r.company,
                     'department': r.department, 'passport': r.passport, 'numberPassport': r.numberPassport,
                     'datePassport': r.datePassport, 'address': r.address, 'phone': r.phone})

        ext_dict = {'total': People.objects.all().count(), 'data': d}

        return ext_dict
