import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product as ProductType } from "@/types";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

interface GalleryProps {
  productItem: ProductType;
}
export function Gallery({ productItem }: GalleryProps) {
  return (
    <Tabs defaultValue={productItem.images[0].id} className="w-full  flex flex-col-reverse">
      <TabsList className="w-full flex flex-wrap mt-4 gap-3 justify-start items-start">
        {productItem.images.map((image) => {
          return (
            <TabsTrigger   value={image.id} className="w-[100px]  "  key={image.id}>
               <div className="w-[80px]">
               <AspectRatio ratio={1/ 1}>
                <Image
                  src={image?.url}
                  alt="Image"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
               </div>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {productItem.images.map((image) => {
        return (
          <TabsContent value={image.id} className="w-[300px]"   key={image.id}>
             
            <div className="w-[300px] shadow-sm border rounded-lg">
               <AspectRatio ratio={1/ 1}>
                <Image
                  src={image?.url}
                  alt="Image"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
               </div>
        
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
