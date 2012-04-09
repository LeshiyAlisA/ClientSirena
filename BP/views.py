# Create your views here.
from django.shortcuts import render_to_response

def list(request):
    print "OK"
    return render_to_response('index.html')
