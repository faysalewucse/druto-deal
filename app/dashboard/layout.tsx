import Container from "@/components/Container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <section className="flex">
        <nav className="w-80">Sidebar</nav>
        <div className="flex-grow">{children}</div>
      </section>
    </Container>
  );
}
