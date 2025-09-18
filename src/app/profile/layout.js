import AuthProvider from "@/components/partials/providers/AuthProvider";
import ProfileSidebar from "@/components/templates/profile/sidebar";

export const metadata = {
  title: "پروژه دیجی تور | پنل کاربری",
  description: "سایت خرید تورهای گردشگری",
};

function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <ProfileSidebar>{children}</ProfileSidebar>
    </AuthProvider>
  );
}

export default ProfileLayout;
