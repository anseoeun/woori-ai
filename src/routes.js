import { useRoutes } from 'react-router-dom';

import LayoutPrimary from "./widgets/layout/layout.primary";
import ToastTest from "./test/toast/page";
import AlertTest from "./test/dialog/page";
import LoadingTest from "./test/loading/page";

import Splash from "./pages/splash/splash.main";
import Main from "./pages/home/home.main";

import RuleAgree from "./pages/agreement/agreement.rule.agree";
import Rule from "./pages/agreement/agreement.rule";
import Rule2 from "./pages/agreement/agreement.rule2";
import Marketing from "./pages/agreement/agreement.marketing";
import Phone from "./pages/agreement/agreement.phone";
import Certify from "./pages/agreement/agreement.certify";
import IdRegist from "./pages/agreement/agreement.id.register";
import PwRegister from "./pages/agreement/agreement.pw.register";
import JoinComplete from "./pages/agreement/agreement.join.complete";

import Login from "./pages/signin/signin.login";
import RequestAccess from "./pages/signin/signin.request.access";
import UserFind from "./pages/signin/signin.user.find";
import IdCheck from "./pages/signin/signin.id.check";
import PwChange from "./pages/signin/signin.pw.change";

import ServiceChoice from "./pages/property/property.service.choice";
import CenterSearch from "./pages/property/property.center.search";
import PropertyRegist from "./pages/property/property.regist";
import PhoneCheck from "./pages/property/property.phone.check";
import ProfileRegist from "./pages/property/property.profile.regist";
import PropertyComplete from "./pages/property/property.complete";

import NoticeList from "./pages/notice/notice.list";
import NoticeWrite from "./pages/notice/notice.write";
import NoticeWrite2 from "./pages/notice/notice.write2";
import NoticePreview from "./pages/notice/notice.preview";
import NoticeDetail from "./pages/notice/notice.detail";

import ReportList from "./pages/report/report.list";
import ReportSelect from "./pages/report/report.select";
import ReportWrite from "./pages/report/report.write";
import ReportPreview from "./pages/report/report.preview";
import ReportDetail from "./pages/report/report.detail";

import AlbumMain from "./pages/album/album.main";
import AlbumWrite from "./pages/album/album.write";
import AlbumPreview from "./pages/album/album.preview";
import AlbumDetail from "./pages/album/album.detail";

import PresenceMain from "./pages/presence/presence.main";
import PresenceDetail from "./pages/presence/presence.detail";

import DosageDetail from "./pages/dosage/dosage.detail";
import DosageNoregist from "./pages/dosage/dosage.noregist";
import DosageEdit from "./pages/dosage/dosage.edit";

import ReturnDetail from "./pages/return/return.detail";
import ReturnNoregist from "./pages/return/return.noregist";
import ReturnEdit from "./pages/return/return.edit";

import ScheduleList from "./pages/schedule/schedule.list";
import ScheduleEdit from "./pages/schedule/schedule.edit";
import ScheduleDetauk from "./pages/schedule/schedule.detail";

import MealDailyMain from "./pages/meal/meal.daily.main";
import MealDailyEdit from "./pages/meal/meal.daily.edit";
import MealMonthlyMain from "./pages/meal/meal.monthly.main";
import MealMonthlyEdit from "./pages/meal/meal.monthly.edit";

import CloudHome from "./pages/cloud/cloud.home";
import CloudFolder from "./pages/cloud/cloud.folder";
import Hold from "./pages/cloud/cloud.hold";

import AlertMain from "./pages/alert/alert.main";
import AlertUnsolve from "./pages/alert/alert.unsolve";
import AlertSolve from "./pages/alert/alert.solve";
import AlertReportEdit from "./pages/alert/alert.report.edit";
import AlertReportDetail from "./pages/alert/alert.report.detail";

import InstituteHome from "./pages/institute/institute.home";
import InstituteEdit from "./pages/institute/institute.edit";

import TeacherList from "./pages/teacher/teacher.list";
import TeacherEdit from "./pages/teacher/teacher.edit";
import TeacherUpdate from "./pages/teacher/teacher.update";

import ClassHome from "./pages/class/class.home";
import ClassModify from "./pages/class/class.edit";

import ChildList from "./pages/child/child.list";
import ChildDetail from "./pages/child/child.detail";
import ChildEdit from "./pages/child/child.edit";
import ChildBireport from "./pages/child/child.bireport";

import TagMain from "./pages/tag/tag.main";
import TagEdit from "./pages/tag/tag.edit";

import SettingMain from "./pages/privacy/privacy.setting.main";
import PhoneChange from "./pages/privacy/privacy.phone.change";
import PrivacyPw from "./pages/privacy/privacy.pw.change";
import PushSetting from "./pages/privacy/privacy.push.setting";
import AppInfo from "./pages/privacy/privacy.app.info";
import License from "./pages/privacy/privacy.license";
import Withdrawal from "./pages/privacy/privacy.member.withdraw";

//pub
// import LayoutPublishing from "./layout/publishing/PublishingIndex";
import LayoutPublishing from "./pages/publish.main";
import PublishingIndex from "./widgets/layout/layout.primary";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    //pub
    {
      path: '/',
      element: <LayoutPublishing />,
      children: [
        { path: '/', element: <PublishingIndex /> }
      ],
    },
    //page
    {
      path: '/',
      element: <LayoutPrimary />,
      children: [
        { path: '/test/toast', element: <ToastTest /> },
        { path: '/test/dialog', element: <AlertTest /> },
        { path: '/test/loading', element: <LoadingTest /> },
        
        { path: '/publish/splash', element: <Splash /> },
        { path: '/publish/home', element: <Main /> },
        
        { path: '/publish/agreement/ruleAgree', element: <RuleAgree /> },
        { path: '/publish/agreement/rule', element: <Rule /> },
        { path: '/publish/agreement/rule2', element: <Rule2 /> },
        { path: '/publish/agreement/marketing', element: <Marketing /> },
        { path: '/publish/agreement/phone', element: <Phone /> },
        { path: '/publish/agreement/certify', element: <Certify /> },
        { path: '/publish/agreement/idRegister', element: <IdRegist /> },
        { path: '/publish/agreement/pwRegister', element: <PwRegister /> },
        { path: '/publish/agreement/joinComplete', element: <JoinComplete /> },
        
        { path: '/publish/signin/login', element: <Login /> },
        { path: '/publish/signin/requestAccess', element: <RequestAccess /> },
        { path: '/publish/signin/userFind', element: <UserFind /> },
        { path: '/publish/signin/idCheck', element: <IdCheck /> },
        { path: '/publish/signin/pwChange', element: <PwChange /> },
        
        { path: '/publish/property/service/choice', element: <ServiceChoice /> },
        { path: '/publish/property/center/search', element: <CenterSearch /> },
        { path: '/publish/property/regist', element: <PropertyRegist /> },
        { path: '/publish/property/phone/check', element: <PhoneCheck /> },
        { path: '/publish/property/profile/regist', element: <ProfileRegist /> },
        { path: '/publish/property/complete', element: <PropertyComplete /> },

        { path: '/publish/notice/list', element: <NoticeList /> },
        { path: '/publish/notice/write', element: <NoticeWrite /> },
        { path: '/publish/notice/write2', element: <NoticeWrite2 /> },
        { path: '/publish/notice/preview', element: <NoticePreview /> },
        { path: '/publish/notice/detail', element: <NoticeDetail /> },

        { path: '/publish/report/list', element: <ReportList /> },
        { path: '/publish/report/select', element: <ReportSelect /> },
        { path: '/publish/report/write', element: <ReportWrite /> },
        { path: '/publish/report/preview', element: <ReportPreview /> },
        { path: '/publish/report/detail', element: <ReportDetail /> },

        { path: '/publish/album/albumMain', element: <AlbumMain /> },
        { path: '/publish/album/write', element: <AlbumWrite /> },
        { path: '/publish/album/preview', element: <AlbumPreview /> },
        { path: '/publish/album/detail', element: <AlbumDetail /> },

        { path: '/publish/presence/main', element: <PresenceMain /> },
        { path: '/publish/presence/detail', element: <PresenceDetail /> },

        { path: '/publish/alert/main', element: <AlertMain /> },
        { path: '/publish/alert/unsolve', element: <AlertUnsolve /> },
        { path: '/publish/alert/solve', element: <AlertSolve /> },
        { path: '/publish/alert/report/edit', element: <AlertReportEdit /> },
        { path: '/publish/alert/report/detail', element: <AlertReportDetail /> },

        { path: '/publish/institute/home', element: <InstituteHome /> },
        { path: '/publish/institute/edit', element: <InstituteEdit /> },

        { path: '/publish/teacher/list', element: <TeacherList /> },
        { path: '/publish/teacher/edit', element: <TeacherEdit /> },
        { path: '/publish/teacher/update', element: <TeacherUpdate /> },

        { path: '/publish/class/home', element: <ClassHome /> },
        { path: '/publish/class/edit', element: <ClassModify /> },

        { path: '/publish/child/list', element: <ChildList /> },
        { path: '/publish/child/detail', element: <ChildDetail /> },
        { path: '/publish/child/edit', element: <ChildEdit /> },
        { path: '/publish/child/bireport', element: <ChildBireport /> },

        { path: '/publish/dosage/detail', element: <DosageDetail /> },
        { path: '/publish/dosage/noregist', element: <DosageNoregist /> },
        { path: '/publish/dosage/edit', element: <DosageEdit /> },
        
        { path: '/publish/return/detail', element: <ReturnDetail /> },
        { path: '/publish/return/noregist', element: <ReturnNoregist /> },
        { path: '/publish/return/edit', element: <ReturnEdit /> },   

        { path: '/publish/schedule/list', element: <ScheduleList /> },
        { path: '/publish/schedule/edit', element: <ScheduleEdit /> },
        { path: '/publish/schedule/detail', element: <ScheduleDetauk /> },       

        { path: '/publish/meal/daily/main', element: <MealDailyMain /> },
        { path: '/publish/meal/daily/edit', element: <MealDailyEdit /> },
        { path: '/publish/meal/monthly/main', element: <MealMonthlyMain /> },       
        { path: '/publish/meal/monthly/edit', element: <MealMonthlyEdit /> },       

        { path: '/publish/cloud/home', element: <CloudHome /> },
        { path: '/publish/cloud/folder', element: <CloudFolder /> },
        { path: '/publish/cloud/hold', element: <Hold /> },

        { path: '/publish/tag/main', element: <TagMain /> },
        { path: '/publish/tag/edit', element: <TagEdit /> },

        { path: '/publish/privacy/settingMain', element: <SettingMain /> },
        { path: '/publish/privacy/phoneChange', element: <PhoneChange /> },
        { path: '/publish/privacy/pwChange', element: <PrivacyPw /> },
        { path: '/publish/privacy/pushSetting', element: <PushSetting /> },
        { path: '/publish/privacy/appinfo', element: <AppInfo /> },
        { path: '/publish/privacy/appInfo/license', element: <License /> },
        { path: '/publish/privacy/memberWithdraw', element: <Withdrawal /> }

      ],
    }
  ]);

  return routes;
}
