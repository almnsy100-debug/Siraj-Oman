/* إعدادات المشروع السحابي المستقل. ليست كلمة مرور ولا تخزن أسراراً هنا.
   1) ضع apiKey و projectId لمشروع Firebase الذي تملكه.
   2) أنشئ مديراً بطريقة Email/Password في Authentication.
   3) ضع بريد هذا المدير في adminEmail. المستخدم في واجهة الدخول هو admin.
   4) أنشئ مستند admins/{Firebase UID} يحتوي active: true في Firestore Console.
   5) انشر قواعد firestore.rules من المستودع في Firebase Console.
*/
window.SIRAJ_CLOUD_CONFIG = Object.freeze({
  apiKey: "AIzaSyDZRtcYGph9lJ-EXCyAw2VsjygX-ISAmZY",
  projectId: "siraj-oman-school",
  adminEmail: "almnsy100@gmail.com",
  adminUsername: "admin"
});
