from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.staticfiles.urls import static
from . import settings
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from sportsmans.views import *
from competitions.views import *

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

router.register(r'insurance', InsuranceViewSet)
router.register(r'birth_certificate', Birth_CertificateViewSet)
router.register(r'oms', OMSViewSet)
router.register(r'passport', PassportViewSet)
router.register(r'proxy', Proxy_docViewSet)

router.register(r'category', CategoryViewSet)
router.register(r'discipline', DisciplineViewSet)
router.register(r'competitions', CompetitonViewSet)
router.register(r'competition_group', CompetitionGroupViewSet)
router.register(r'command', CommandViewSet)
#router.register(r'rank_history', Rank_historyViewSet)
#router.register(r'trainer_history', Trainer_historyViewSet)
#router.register(r'duan_czi_history', Duan_Czi_historyViewSet)
#router.register(r'club_history', Club_historyViewSet)


urlpatterns = [
    url(r'api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
