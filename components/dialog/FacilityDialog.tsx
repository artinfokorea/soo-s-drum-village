import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { Facility } from "@/types";

interface FacilityDialogProps {
  seletedFacility: Facility;
  close: () => void;
}

const FacilityDialog = ({ seletedFacility, close }: FacilityDialogProps) => {
  console.log(seletedFacility);

  return (
    <Dialog open={!!seletedFacility} onClose={close} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-5xl">
          <div className="relative h-[300px] md:h-[500px] max-w-5xl rounded-lg">
            <Image
              src={seletedFacility?.src as string}
              alt="facility image"
              fill
              quality={100}
              className="rounded-lg"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FacilityDialog;
