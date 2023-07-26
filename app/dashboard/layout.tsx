import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-grow border border-primary my-5 rounded-r-xl">
        {children}
      </div>
    </section>
  );
}
