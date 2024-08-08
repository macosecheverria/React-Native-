import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: "marcostest@gmail.com",
      password: "sasa1234",
    },
  });

  const onSubmit = (form: FormInputs) => {
    console.log({ form });
  };

  console.log(watch("email"))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input type="text" placeholder="password" {...register("password")} />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </div>
  );
};
