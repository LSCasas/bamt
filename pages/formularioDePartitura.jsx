import React from "react";
import SheetForm from "@/components/SheetForm";

export default function TeacherFormPage() {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-6">
          <h1 className="md:text-2xl text-xl font-bold text-center mb-6 text-[#6C0036]">
            Información del La partitura
          </h1>
          <SheetForm />
        </div>
      </div>
    </div>
  );
}
