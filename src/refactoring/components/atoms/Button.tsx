interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "new" | "add" | "delete" | "default" | "cart";
  children: React.ReactNode;
}

export const Button = ({
  variant = "default",
  children,
  ...props
}: ButtonProps) => {
  const buttonVariants = {
    default: "bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100",
    new: "bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600",
    add: "bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2",
    delete: "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
    cart: "bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400",
  };

  return (
    <button className={buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
};
