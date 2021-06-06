from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from sportsmans.views import *

router = routers.DefaultRouter()
router.register(r'gender', GenderViewSet)
router.register(r'city', CityViewSet)
router.register(r'trainer', TrainerViewSet)
#router.register(r'federation', FederationViewSet)
#router.register(r'region', RegionViewSet)
router.register(r'club', ClubViewSet)
#router.register(r'insurance', InsuranceViewSet)
router.register(r'rank', RankViewSet)
router.register(r'duan_czi', Duan_CziViewSet)
router.register(r'sportsmans', SportsmanViewSet)
#router.register(r'rank_history', Rank_historyViewSet)
#router.register(r'trainer_history', Trainer_historyViewSet)
#router.register(r'duan_czi_history', Duan_Czi_historyViewSet)
#router.register(r'club_history', Club_historyViewSet)

#TODO: закомментированные роуты пока нафиг не нужны

urlpatterns = [
    url(r'api/', include(router.urls)),
    path('admin/', admin.site.urls),
]