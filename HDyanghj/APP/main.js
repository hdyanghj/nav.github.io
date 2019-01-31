import Vue from 'vue'
import App from './App'
import md5 from './common/md5.min.js'
// 手机区号json文件
// import AreaCode from './components/Areacode.json'

Vue.config.productionTip = false

Vue.prototype.$md5 = md5;
// Vue.prototype.$AreaCode = AreaCode;
// 全局接口/////////////////////////////////////////////////////////////////////
// Vue.prototype.$webUrl = 'http://cms.qilinsports.com:8080/';
Vue.prototype.$shopUrl = 'http://cms.qilinsports.com:9080/';
// Vue.prototype.$webUrl = 'http://192.168.31.84:8080/';
// Vue.prototype.$webUrl = 'http://192.168.31.39:8080/';
Vue.prototype.$webUrl = 'http://192.168.31.105:8080/';

// 头像////////////////////////////////////////////////////////////////////////
Vue.prototype.$defaultAvatar='http://oss.qilinsports.com/picture/headPortrait/default_head_portrait.png?x-oss-process=style/headPortrait';
// 商城接口
Vue.prototype.$productlist = 'product/list';
// 短信注册POST 
Vue.prototype.$captchaRegister = 'app/register/v1.0/captchaRegister';

// 发送短信POST 
Vue.prototype.$sendMessage = 'message/sms/sendMessageValidate';

// 验证短信验证码PUT /
Vue.prototype.$SmsCaptcha = 'app/communal/v1.0/validationSmsCaptcha';

// 验证码登录接口POST 
Vue.prototype.$captchaLogin = 'app/login/v1.0/captchaLogin';

// 密码登录接口POST /
Vue.prototype.$passwordLogin = 'app/login/v1.0/passwordLogin';

// 修改用户信息PUT 
Vue.prototype.$useralter = 'app/user/v1.0';


// DELETE 
Vue.prototype.$logout = 'app/login/v1.0/logout';

//建议与反馈
Vue.prototype.$FeedBack = 'app/feedback/v1.0';

//文件上传
Vue.prototype.$Upload = 'app/file/upload';

//头像上传
Vue.prototype.$upAvatar = 'app/oss/v1.0/upload';

//体测图片上传POST /
Vue.prototype.$uploadPosture = 'app/oss/v1.0/uploadPosturePictures';

//修改用户信息PUT 
Vue.prototype.$modifyMsg = 'app/user/v1.0';

//更换手机号PUT /
Vue.prototype.$updateMobile = 'app/user/v1.0/updateMobile';

// 保存体姿测试人信息POST /
Vue.prototype.$addperson = 'app/detectionUser/v1.0';

//体姿检测记录列表 GET /
Vue.prototype.$peortlist = 'app/bodyPostureDetection/v1.0/page';

//报告详情GET /
Vue.prototype.$DetectionReport = 'app/DetectionReport/v1.0';

// 体姿测试人信息分页列表GET /
Vue.prototype.$addlist = 'app/detectionUser/v1.0/getByUserId';

// 根据用户id获取默认体测人GET /
Vue.prototype.$UserDefault = 'app/detectionUser/v1.0/getDetectionUserDefault';

// 上传体测POST /
Vue.prototype.$bodyPosture = 'app/bodyPostureDetection/v1.0';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
