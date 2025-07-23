import React from "react";
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import PriceInput from "@/components/form/PriceInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";

type Props = {
  params: {
    id: string;
  };
};

async function EditProductPage({ params }: Props) {
  const { id } = params;

  const product = await fetchAdminProductDetails(id);
  const { name, company, description, price, image, featured } = product;

  return (
    <section>
      <h2 className="mb-4 text-2xl font-medium capitalize tracking-wider">
        edit product
      </h2>
      <div className="rounded-md border p-8">
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="my-4 grid gap-4 md:grid-cols-2">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput type="text" name="company" defaultValue={company} />
            <TextAreaInput
              name="description"
              defaultValue={description}
              className="col-span-2"
            />
            <PriceInput defaultValue={price} />
            <CheckboxInput
              name="featured"
              defaultChecked={featured}
              className="col-span-2"
            />
          </div>
          <div className="flex justify-center">
            <SubmitButton text="update product" className="mt-4" />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProductPage;
