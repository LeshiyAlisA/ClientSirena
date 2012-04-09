from django.conf.urls import patterns, include, url
from BP.views import list
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    (r'^api/', include('ClientSirena.api.urls')),
    url('^$', list),
)
