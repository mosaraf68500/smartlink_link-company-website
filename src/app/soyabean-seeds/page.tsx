import ContentHero from "@/src/components/shared/ContentHero";
import ImageGallery from "@/src/components/products/ImageGallery";
import { productImages } from "@/src/components/products/data/productImages";

export default function Page() {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="Products"
        title="Soyabean Seeds"
        description="Content for this page is being finalized."
      >
        <ImageGallery
          images={productImages["soyabean-seeds"]}
          alt="Soyabean Seeds"
          className="max-w-2xl"
        />
      </ContentHero>
      <div className="container py-16">
        {/* TODO: content pending — Soyabean Seeds */}
      </div>
    </div>
  );
}
