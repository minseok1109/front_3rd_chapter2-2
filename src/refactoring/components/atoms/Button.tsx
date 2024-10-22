interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "new" | "add" | "delete";
  children: React.ReactNode;
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  const buttonVariants = {
    new: "bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600",
    add: "bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2",
    delete: "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
  };

  return (
    <button className={buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
};
