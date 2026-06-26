import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NotFoundContent } from "@/components/features/not-found-content";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center">
        <div className="section-shell py-24 w-full">
          <NotFoundContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
