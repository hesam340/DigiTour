import { TPublicProps } from "@/core/types/props";
import ProfileSidebar from "@/components/templates/profile/sidebar";
import AuthProvider from "@/components/partials/providers/AuthProvider";

export const metadata = {
  title: "پروژه دیجی تور | پنل کاربری",
  description: "سایت خرید تورهای گردشگری",
};

function ProfileLayout({ children }:TPublicProps) {
  return (
    <AuthProvider>
      <ProfileSidebar>{children}</ProfileSidebar>
    </AuthProvider>
  );
}

export default ProfileLayout;
