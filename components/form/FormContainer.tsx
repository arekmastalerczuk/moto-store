"use client";

import { ActionFunction } from "@/utils/types";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = {
  message: "",
};

type Props = {
  action: ActionFunction;
  children: React.ReactNode;
};

function FormContainer({ action, children }: Props) {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
