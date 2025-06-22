import React from "react";
import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";

const createProductAction = async (formData: FormData) => {
  "use server";

  const product = Object.fromEntries(formData);
  console.log(product);
};

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 2, max: 10 });
  const price = faker.commerce.price({ min: 4000, max: 10000, dec: 0 });

  return (
    <section>
      <h2 className="mb-4 text-2xl font-medium capitalize tracking-wider">
        create product
      </h2>
      <div className="rounded-md border p-8">
        <form action={createProductAction}>
          <FormInput name="name" label="product name" defaultValue={name} />
          <FormInput name="company" defaultValue={company} />
          <TextAreaInput name="description" defaultValue={description} />
          <PriceInput defaultValue={Number(price)} />
          <ImageInput />
          <CheckboxInput name="featured" label="featured" className="mb-6" />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

export default CreateProductPage;
