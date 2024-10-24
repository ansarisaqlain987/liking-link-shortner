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
            className="bg-primaryColor hover:bg-primaryHover hover:text-primaryText text-primaryText"
          >
            {props?.negativeLabel ?? "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={props?.positive}
            className="bg-primaryColor hover:bg-primaryHover hover:text-primaryText text-primaryText"
          >
            {props?.positiveLabel ?? "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
