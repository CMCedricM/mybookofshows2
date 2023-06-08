"use server";
import { useState, useEffect } from "react";
import { revalidatePath } from "next/cache";
export const sayHello = async () => {
  console.log("hello");
  revalidatePath("/dashboard");
};
