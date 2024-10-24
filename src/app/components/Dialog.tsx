"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DialogAction {
  open: boolean;
  title: string;
  message: string;
  positive: () => void;
  positiveLabel?: string;
  negative: () => void;
  negativeLabel?: string;
}

export function Dialog(props: Readonly<DialogAction>) {
  return (
    <AlertDialog open={props?.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props?.title}</AlertDialogTitle>
          <AlertDialogDescription>{props?.message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={props?.negative}
            className="bg-[#1d3f88] hover:bg-[#15234e] hover:text-white text-white"
          >
            {props?.negativeLabel ?? "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={props?.positive}
            className="bg-[#1d3f88] hover:bg-[#15234e] hover:text-white text-white"
          >
            {props?.positiveLabel ?? "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
