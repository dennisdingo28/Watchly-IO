"use client";
import { CardWrapper } from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FormError } from "../FormError";
import { FormSucces } from "../FormSuccess";
import { newVerification } from "@/actions/tokens";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [succes, setSucces] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token !");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSucces(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, []);
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
    >
      <div className="flex items-center w-full justify-center">
        {!succes && !error && <BeatLoader />}
        <FormSucces messaage={succes} />
        <FormError messaage={error} />
      </div>
    </CardWrapper>
  );
};