from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from sportsmans.views import *

router = routers.DefaultRouter()
router.register(r'gender', GenderViewSet)
router.register(r'city', CityViewSet)
router.register(r'trainer', TrainerViewSet)
router.register(r'federation', FederationViewSet)
router.register(r'federal_region', FederalRegionViewSet)
router.register(r'region', RegionViewSet)
router.register(r'club', ClubViewSet)
router.register(r'rank', RankViewSet)
router.register(r'duan_czi', Duan_CziViewSet)
router.register(r'sportsmans', SportsmanViewSet)
#router.register(r'rank_history', Rank_historyViewSet)
#router.register(r'trainer_history', Trainer_historyViewSet)
#router.register(r'duan_czi_history', Duan_Czi_historyViewSet)
#router.register(r'club_history', Club_historyViewSet)

from . import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)