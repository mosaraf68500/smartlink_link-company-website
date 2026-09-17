import ContentHero from "@/src/components/shared/ContentHero";
import ImageGallery from "@/src/components/products/ImageGallery";
import { productImages } from "@/src/components/products/data/productImages";

export default function Page() {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="Products"
        title="Canola Seeds"
        description="Content for this page is being finalized."
      >
        <ImageGallery
          images={productImages["canola-seeds"]}
          alt="Canola Seeds"
          className="max-w-2xl"
        />
      </ContentHero>
      <div className="container py-16">
        {/* TODO: content pending — Canola Seeds */}
      </div>
    </div>
  );
}
