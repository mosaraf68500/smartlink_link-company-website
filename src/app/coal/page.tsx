import ContentHero from "@/src/components/shared/ContentHero";

export default function Page() {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="Products"
        title="Coal"
        description="Content for this page is being finalized."
      />
      <div className="container py-16">
        {/* TODO: content pending — Coal */}
      </div>
    </div>
  );
}
