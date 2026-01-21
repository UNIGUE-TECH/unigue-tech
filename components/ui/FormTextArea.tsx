interface FormTextAreaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

function FormTextArea({
  label,
  name,
  placeholder,
  rows = 4,
  required = false,
}: FormTextAreaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          id={name}
          rows={rows}
          required={required}
          className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-foreground dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default FormTextArea;
