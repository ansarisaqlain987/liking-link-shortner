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

export function Dialog({
  open,
  title,
  message,
  positive,
  positiveLabel,
  negative,
  negativeLabel,
}: Readonly<{
  open: boolean;
  title: string;
  message: string;
  positive: () => void;
  positiveLabel?: string;
  negative: () => void;
  negativeLabel?: string;
}>) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={negative}>
            {negativeLabel ?? "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction onClick={positive}>
            {positiveLabel ?? "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
