import { Separator } from "@/components/ui/separator";
import React from "react";
import Sidebar from "./Sidebar";
import SectionTitle from "@/components/global/SectionTitle";

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <>
      <SectionTitle title="dashboard" />
      <section className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="px-4 lg:col-span-10">{children}</div>
      </section>
    </>
  );
}

export default DashboardLayout;
