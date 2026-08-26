interface ToastProps {
  message: string;
  isError?: boolean;
  visible: boolean;
}

export function Toast({ message, isError = false, visible }: ToastProps) {
  // TODO: fixed bottom-right pill, mirrors .toast / .toast.show
  return null;
}
