import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/Billboard";
import Filter from "@/components/Filter";
import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import React from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  }); 
console.log(products.length);


  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <div className=" w-full h-full px-8 mt-10 lg:grid lg:grid-cols-2 ">
          <div>
            <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />

            <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
          </div>
          <div className="flex flex-wrap gap-3">
            {
               products.map((item)=>{
                return(
                    <ProductCard
                    key={item.id}
                    product={item} 
                    />
                )
               })
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
